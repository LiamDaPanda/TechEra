import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * The Fusion Reactor multiblock in 3D, built from the mod's own block textures: the same 5×5×3
 * layout as data/techera/techera/multiblocks/fusion_reactor.json. The coil's texture animates like
 * it does in game, plasma circles it, and the whole thing turns slowly. Drag to spin it; it leans
 * toward the cursor. With reduced motion it holds still.
 */
const LAYERS = [
	[' SCS ', 'S...S', 'S...S', 'S...S', ' SSS '],
	[' GGG ', 'G...G', 'G.O.G', 'G...G', ' GGG '],
	[' SSS ', 'S...S', 'S...S', 'S...S', ' SSS '],
];

function pixelTexture(url, frames = 1) {
	const tex = new THREE.TextureLoader().load(url);
	tex.magFilter = THREE.NearestFilter;
	tex.minFilter = THREE.NearestFilter;
	tex.colorSpace = THREE.SRGBColorSpace;
	if (frames > 1) {
		tex.repeat.set(1, 1 / frames);
		tex.offset.set(0, 1 - 1 / frames);
	}
	return tex;
}

export default function Reactor3D({ className = '' }) {
	const mountRef = useRef(null);

	useEffect(() => {
		const mount = mountRef.current;
		if (!mount) return undefined;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const base = `${import.meta.env.BASE_URL}assets/tex/`;

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.outputColorSpace = THREE.SRGBColorSpace;
		mount.appendChild(renderer.domElement);

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
		camera.position.set(0, 4.2, 11.5);
		camera.lookAt(0, 0.2, 0);

		scene.add(new THREE.AmbientLight(0xffe2c4, 1.3));
		const sun = new THREE.DirectionalLight(0xffc690, 2.2);
		sun.position.set(5, 8, 6);
		scene.add(sun);
		const coreLight = new THREE.PointLight(0x5fd0ff, 30, 9, 1.6);
		scene.add(coreLight);

		const casingTex = pixelTexture(base + 'fusion_casing.png');
		const coilTex = pixelTexture(base + 'fusion_coil.png', 4);
		const frontTex = pixelTexture(base + 'fusion_reactor_front_on.png', 3);
		const casing = new THREE.MeshStandardMaterial({ map: casingTex, roughness: 0.55, metalness: 0.35 });
		const front = new THREE.MeshStandardMaterial({ map: frontTex, emissive: 0x3aa8ff, emissiveMap: frontTex, emissiveIntensity: 0.9, roughness: 0.4 });
		const coil = new THREE.MeshStandardMaterial({ map: coilTex, emissive: 0x7fdcff, emissiveMap: coilTex, emissiveIntensity: 1.6 });
		const glass = new THREE.MeshPhysicalMaterial({ color: 0xbfe8ff, transparent: true, opacity: 0.18, roughness: 0.05, metalness: 0, depthWrite: false });
		const edgeMat = new THREE.LineBasicMaterial({ color: 0xcdeeff, transparent: true, opacity: 0.55 });

		const reactor = new THREE.Group();
		const cube = new THREE.BoxGeometry(1, 1, 1);
		const edges = new THREE.EdgesGeometry(cube);
		LAYERS.forEach((rows, y) => rows.forEach((row, z) => [...row].forEach((ch, x) => {
			if (ch === ' ' || ch === '.') return;
			let mesh;
			if (ch === 'G') {
				mesh = new THREE.Mesh(cube, glass);
				mesh.add(new THREE.LineSegments(edges, edgeMat));
			} else if (ch === 'O') {
				mesh = new THREE.Mesh(cube, coil);
			} else if (ch === 'C') {
				// the controller: lit reactor face toward the viewer (+z), casing elsewhere
				mesh = new THREE.Mesh(cube, [casing, casing, casing, casing, front, casing]);
			} else {
				mesh = new THREE.Mesh(cube, casing);
			}
			// rows run front (z=0) to back; put the front toward the camera
			mesh.position.set(x - 2, y - 1, 2 - z);
			reactor.add(mesh);
		})));
		const pivot = new THREE.Group();
		pivot.add(reactor);
		scene.add(pivot);

		// plasma: a ring of glowing points circling the coil
		const plasmaCount = 220;
		const plasmaPos = new Float32Array(plasmaCount * 3);
		const plasmaGeo = new THREE.BufferGeometry();
		plasmaGeo.setAttribute('position', new THREE.BufferAttribute(plasmaPos, 3));
		const plasma = new THREE.Points(plasmaGeo, new THREE.PointsMaterial({
			color: 0xbff0ff, size: 0.09, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false,
		}));
		pivot.add(plasma);
		const seeds = Array.from({ length: plasmaCount }, () => ({ a: Math.random() * Math.PI * 2, r: 1.05 + Math.random() * 0.45, y: (Math.random() - 0.5) * 0.5, s: 0.6 + Math.random() }));

		// interaction: drag to spin, lean toward the pointer
		let dragging = false, lastX = 0, spin = 0, velocity = 0, leanX = 0, leanY = 0, targetX = 0, targetY = 0;
		const onDown = (e) => { dragging = true; lastX = e.clientX; mount.setPointerCapture?.(e.pointerId); };
		const onUp = () => { dragging = false; };
		const onMove = (e) => {
			const r = mount.getBoundingClientRect();
			targetX = ((e.clientY - r.top) / r.height - 0.5) * 0.35;
			targetY = ((e.clientX - r.left) / r.width - 0.5) * 0.5;
			if (dragging) { velocity = (e.clientX - lastX) * 0.01; lastX = e.clientX; }
		};
		mount.addEventListener('pointerdown', onDown);
		window.addEventListener('pointerup', onUp);
		mount.addEventListener('pointermove', onMove);

		const resize = () => {
			const w = mount.clientWidth, h = mount.clientHeight;
			renderer.setSize(w, h, false);
			camera.aspect = w / Math.max(1, h);
			camera.updateProjectionMatrix();
		};
		const ro = new ResizeObserver(resize);
		ro.observe(mount);
		resize();

		let raf = 0, frame = 0, visible = true;
		const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible && !raf) raf = requestAnimationFrame(tick); });
		io.observe(mount);
		const clock = new THREE.Clock();
		function tick() {
			raf = 0;
			const t = clock.getElapsedTime();
			if (!reduce) {
				spin += dragging ? velocity : 0.0035 + velocity;
				velocity *= 0.94;
				leanX += (targetX - leanX) * 0.06;
				leanY += (targetY - leanY) * 0.06;
				pivot.rotation.set(leanX, spin + leanY, 0);
				pivot.position.y = Math.sin(t * 1.2) * 0.12; // a slow hover
				// the game's animated textures: coil every 4 ticks, front every 3
				const f = Math.floor(t * 5);
				coilTex.offset.y = 1 - ((f % 4) + 1) / 4;
				frontTex.offset.y = 1 - ((f % 3) + 1) / 3;
				coreLight.intensity = 26 + Math.sin(t * 6) * 8;
				coil.emissiveIntensity = 1.4 + Math.sin(t * 6) * 0.4;
				seeds.forEach((p, i) => {
					p.a += 0.02 * p.s;
					plasmaPos[i * 3] = Math.cos(p.a) * p.r;
					plasmaPos[i * 3 + 1] = p.y + Math.sin(p.a * 3 + t) * 0.08;
					plasmaPos[i * 3 + 2] = Math.sin(p.a) * p.r;
				});
				plasmaGeo.attributes.position.needsUpdate = true;
			} else if (frame === 0) {
				pivot.rotation.set(0.12, -0.6, 0);
				seeds.forEach((p, i) => { plasmaPos[i * 3] = Math.cos(p.a) * p.r; plasmaPos[i * 3 + 1] = p.y; plasmaPos[i * 3 + 2] = Math.sin(p.a) * p.r; });
				plasmaGeo.attributes.position.needsUpdate = true;
			}
			renderer.render(scene, camera);
			frame++;
			if (visible && (!reduce || frame < 30)) raf = requestAnimationFrame(tick); // reduced motion: draw a few frames, then stop
		}
		raf = requestAnimationFrame(tick);

		return () => {
			cancelAnimationFrame(raf);
			io.disconnect();
			ro.disconnect();
			mount.removeEventListener('pointerdown', onDown);
			mount.removeEventListener('pointermove', onMove);
			window.removeEventListener('pointerup', onUp);
			scene.traverse((o) => { o.geometry?.dispose?.(); });
			[casing, front, coil, glass, edgeMat, plasma.material].forEach((m) => m.dispose());
			[casingTex, coilTex, frontTex].forEach((t) => t.dispose());
			renderer.dispose();
			mount.removeChild(renderer.domElement);
		};
	}, []);

	return <div ref={mountRef} className={`reactor3d ${className}`} role="img" aria-label="A 3D Fusion Reactor: a ring of casing and glass around a glowing coil. Drag to turn it." />;
}
