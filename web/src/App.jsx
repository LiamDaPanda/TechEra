import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import Aurora from './components/rb/Aurora.jsx';
import SplitText from './components/rb/SplitText.jsx';
import RotatingText from './components/rb/RotatingText.jsx';
import ShinyText from './components/rb/ShinyText.jsx';
import Magnet from './components/rb/Magnet.jsx';
import ClickSpark from './components/rb/ClickSpark.jsx';
import ScrollVelocity from './components/rb/ScrollVelocity.jsx';
import SpotlightCard from './components/rb/SpotlightCard.jsx';
import CountUp from './components/rb/CountUp.jsx';
import GlitchText from './components/rb/GlitchText.jsx';
import ScrollFloat from './components/rb/ScrollFloat.jsx';
import ElectricBorder from './components/rb/ElectricBorder.jsx';
import CardSwap, { Card } from './components/rb/CardSwap.jsx';
import EraJourney from './components/EraJourney.jsx';
import WarpIntro from './components/WarpIntro.jsx';

// The heavy WebGL pieces load on demand, so the first paint stays light.
const Reactor3D = lazy(() => import('./components/Reactor3D.jsx'));
const Hyperspeed = lazy(() => import('./components/rb/Hyperspeed.jsx'));
const CircularGallery = lazy(() => import('./components/rb/CircularGallery.jsx'));
const Particles = lazy(() => import('./components/rb/Particles.jsx'));

const img = (name) => `${import.meta.env.BASE_URL}assets/img/${name}`;
const RELEASES = 'https://github.com/LiamDaPanda/TechEra/releases';
const SPOT = 'rgba(232, 116, 59, 0.22)';

const ERAS = [
	{ name: 'Medieval', years: '1000-1400', hue: '18', shot: 'fort-era-1.jpg', alt: 'The timber hill fort from above: log palisade and thatched huts',
		text: 'Wake in a timber hill fort with nothing. Char logs in a sealed clamp, smelt bog iron with bellows, and hammer the bloom into wrought iron, then steel.' },
	{ name: 'Gunpowder', years: '1400-1700', hue: '28', shot: 'fort-era-2.jpg', alt: 'The fort rebuilt as a stone castle with battlements and timber-framed huts',
		text: 'Farm saltpetre in nitre beds and grind gunpowder in a powder mill. Then come muskets, cast iron from the high furnace, and cannon on stone battlements.' },
	{ name: 'Industrial', years: '1700-1900', hue: '36', shot: 'fort-era-3.jpg', alt: 'The fort in brick and slate, with glass windows and a smoking chimney',
		text: 'Coke burns hotter than charcoal ever could. Raise a four-storey blast furnace, run machines off steam, and tap out telegrams while your fort turns to brick.' },
	{ name: 'Modern', years: '1900-2000', hue: '190', shot: 'fort-era-4.jpg', alt: 'The fort as a concrete compound with asphalt lanes and a radio mast',
		text: 'Motors, circuit boards and the electric arc furnace. Drive a motorcar, wire up solar panels, and let sentry turrets guard the walls.' },
	{ name: 'Futuristic', years: '2000+', hue: '200', shot: 'fort-era-5.jpg', alt: 'The fort as a glass citadel with quartz huts and glowing lights',
		text: 'A fusion reactor that powers thirty-two machines, plasma rifles, power armour, and finally a time machine to take you home.' },
];

const SYSTEMS = [
	{ title: 'The Patent Office', text: 'Invent the steam engine first and the whole server hears how many centuries you beat Newcomen by.' },
	{ title: 'Raids with Warlords', text: 'Every few nights raiders march on your fort behind a named Warlord. His banner rallies your team.' },
	{ title: 'Temporal rifts', text: 'Lightning splits the sky near your fort and leaves a barrel from your next era.' },
	{ title: 'Forts, claims and wars', text: 'Settle your own hill fort, claim the land around it, and fight timed wars for plunder.' },
	{ title: 'The telegraph', text: 'Tap out a telegram in the Industrial era and it clicks out at every station in the world.' },
	{ title: "Maker's marks", text: "Every blade carries its smith's name. Quench a Fine one and it becomes a Masterwork." },
];

const GALLERY = [
	{ image: img('fusion-reactor.jpg'), text: 'Fusion Reactor' },
	{ image: img('great-blast-furnace.jpg'), text: 'Great Blast Furnace' },
	{ image: img('machines.jpg'), text: 'Real heat' },
	{ image: img('monument.jpg'), text: 'The era monument' },
	{ image: img('vehicles.jpg'), text: 'Wagon to hover bike' },
	{ image: img('quests.jpg'), text: 'The quest book' },
	{ image: img('build-guide.jpg'), text: 'Build guide' },
	{ image: img('time-machine.jpg'), text: 'The Time Machine' },
	{ image: img('fort.jpg'), text: 'The hill fort' },
];

const reveal = {
	hidden: { opacity: 0, y: 40 },
	show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } }),
};

/** A block that rises into view once, with an optional stagger index. */
function Rise({ children, i = 0, className = '' }) {
	return (
		<motion.div className={className} variants={reveal} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
			{children}
		</motion.div>
	);
}

/** A section heading whose letters float up into place as it scrolls in. */
function FloatHeading({ children }) {
	return (
		<ScrollFloat containerClassName="float-h" textClassName="float-h-text" animationDuration={1} ease="back.inOut(2)"
			scrollStart="center bottom+=50%" scrollEnd="bottom bottom-=40%" stagger={0.025}>
			{children}
		</ScrollFloat>
	);
}

/** Mounts its children only once the area is about to scroll into view (for the WebGL pieces). */
function WhenNear({ children, className = '', margin = '400px' }) {
	const ref = useRef(null);
	const near = useInView(ref, { once: true, margin });
	return <div ref={ref} className={className}>{near && <Suspense fallback={null}>{children}</Suspense>}</div>;
}

/** Latest release from the public repo: version, jar link and size (falls back to the releases page). */
function useRelease() {
	const [release, setRelease] = useState({ loading: true });
	useEffect(() => {
		fetch('https://api.github.com/repos/LiamDaPanda/TechEra/releases/latest')
			.then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
			.then((data) => {
				const jar = (data.assets || []).find((a) => a.name.endsWith('.jar'));
				setRelease({ version: data.tag_name.replace(/^v/, ''), url: jar?.browser_download_url, file: jar?.name, size: jar?.size });
			})
			.catch(() => setRelease({ error: true }));
	}, []);
	return release;
}

function useWide() {
	const [wide, setWide] = useState(() => window.matchMedia('(min-width: 901px)').matches);
	useEffect(() => {
		const mq = window.matchMedia('(min-width: 901px)');
		const on = () => setWide(mq.matches);
		mq.addEventListener('change', on);
		return () => mq.removeEventListener('change', on);
	}, []);
	return wide;
}

function DownloadButton({ release, big = false }) {
	return (
		<Magnet padding={big ? 120 : 60} magnetStrength={big ? 3 : 4}>
			<a className={`btn btn-primary${big ? ' btn-big' : ''}`} href={release.url || `${RELEASES}/latest`}>Download</a>
		</Magnet>
	);
}

export default function App() {
	const release = useRelease();
	const reduce = useReducedMotion();
	const wide = useWide();

	return (
		<ClickSpark sparkColor="#ffb05c" sparkSize={11} sparkRadius={22} sparkCount={9} duration={450}>
			<WarpIntro />
			{wide && !reduce && (
				<div className="embers" aria-hidden="true">
					<Suspense fallback={null}>
						<Particles particleCount={90} particleSpread={12} speed={0.05} particleColors={['#ff8a3d', '#ffb05c', '#e8743b']}
							alphaParticles particleBaseSize={70} sizeRandomness={1.2} moveParticlesOnHover={false} glow={0.8} twinkle={0.5} />
					</Suspense>
				</div>
			)}

			<header className="nav">
				<div className="wrap nav-inner">
					<a className="brand" href="./"><img src={img('icon.png')} alt="" />Tech Era</a>
					<nav className="nav-links">
						<a className="hide-sm" href="#eras">Eras</a>
						<a className="hide-sm" href="#machines">Machines</a>
						<a href="guide.html">Guide</a>
						<a className="btn btn-primary btn-sm" href="#download">Download</a>
					</nav>
				</div>
			</header>

			<main>
				{/* ---------------- hero ---------------- */}
				<section className="hero">
					<div className="hero-bg" aria-hidden="true">
						{reduce ? <div className="hero-static" /> : (
							<Aurora colorStops={['#7a240b', '#ff8a3d', '#c2401a']} amplitude={1.2} blend={0.6} speed={0.6} brightness={1.15} intro={false} />
						)}
					</div>
					<div className="wrap hero-grid">
						<div className="hero-copy">
							<SplitText text="From 1000 AD to the future." tag="h1" className="hero-title" textAlign="left" splitType="words"
								delay={70} duration={1} from={{ opacity: 0, y: 60 }} to={{ opacity: 1, y: 0 }} />
							<p className="hero-sub">
								A Fabric mod for Minecraft 26.3. Build your way through the
								<RotatingText texts={ERAS.map((e) => e.name)} mainClassName="era-pill" staggerFrom="last" staggerDuration={0.025}
									splitLevelClassName="era-pill-split" transition={{ type: 'spring', damping: 30, stiffness: 400 }} rotationInterval={2200} />
								era.
							</p>
							<div className="hero-ctas">
								<DownloadButton release={release} />
								<a className="btn btn-ghost" href="guide.html">Read the guide</a>
							</div>
						</div>
						<div className="hero-3d">
							<Suspense fallback={<img className="hero-fallback" src={img('fusion-reactor.jpg')} alt="" />}>
								<Reactor3D />
							</Suspense>
							<span className="hero-3d-hint">Drag to spin the Fusion Reactor</span>
						</div>
					</div>
				</section>

				<div className="marquee" aria-hidden="true">
					<ScrollVelocity texts={['Charcoal  Bloomery  Steel  Gunpowder  Cast iron  Coke  Steam  Telegraph  ',
						'Dynamo  Circuits  Arc furnace  Fusion  Plasma  Time machine  ']}
						velocity={reduce ? 0 : 40} className="marquee-text" numCopies={4} />
				</div>

				<section className="wrap stats">
					{[
						{ n: 5, label: 'eras of technology' },
						{ n: 78, label: 'recipes to master' },
						{ n: 25, label: 'quests with rewards' },
						{ n: 3, label: 'giant multiblock machines' },
					].map((s, i) => (
						<Rise key={s.label} i={i} className="stat">
							<CountUp to={s.n} duration={1.6} className="stat-n" />
							<span className="stat-label">{s.label}</span>
						</Rise>
					))}
				</section>

				{/* ---------------- the eras: a pinned sideways journey ---------------- */}
				<EraJourney eras={ERAS} img={img} />

				{/* ---------------- machines bento ---------------- */}
				<section id="machines" className="wrap section">
					<FloatHeading>Machines with real heat.</FloatHeading>
					<Rise><p className="lede">And machines the size of a house: build them block by block, and the controller shows you where every block goes.</p></Rise>
					<div className="bento">
						{[
							{ cls: 'b-a', src: 'machines.jpg', title: 'Real heat', text: 'Pump the bellows past 1200 °C. Better fuel and a hotter fire make Fine metal.', alt: 'A row of Tech Era machines with custom 3D models' },
							{ cls: 'b-b', src: 'great-blast-furnace.jpg', title: 'Great Blast Furnace', text: 'A four-storey firebrick tower that smelts in bulk.', alt: 'The Great Blast Furnace with fire and smoke pouring from its chimney' },
							{ cls: 'b-c', src: 'build-guide.jpg', title: 'A build guide in the world', text: 'Sneak-click a controller and glowing marks show every missing block.', alt: "Orange marks floating where a reactor's missing blocks go" },
							{ cls: 'b-d', src: 'quests.jpg', title: 'A quest book for every era', text: '25 quests with rewards, shared by your team.', alt: "The notebook's quest book page with Era I quests" },
						].map((t, i) => (
							<Rise key={t.cls} i={i} className={`tile ${t.cls}`}>
								<SpotlightCard className="tile-card" spotlightColor={SPOT}>
									<img src={img(t.src)} alt={t.alt} loading="lazy" />
									<div className="tile-cap"><strong>{t.title}</strong><span>{t.text}</span></div>
								</SpotlightCard>
							</Rise>
						))}
					</div>
				</section>

				{/* ---------------- 3D gallery ---------------- */}
				<section className="gallery-section">
					<div className="wrap">
						<FloatHeading>See it in game.</FloatHeading>
						<Rise><p className="lede">Drag or scroll through the gallery. Every shot is straight from the mod.</p></Rise>
					</div>
					<WhenNear className="gallery">
						<CircularGallery items={GALLERY} bend={2.4} textColor="#ece8e2" borderRadius={0.04} font="bold 26px Outfit" scrollEase={0.04} autoScroll={reduce ? 0 : 0.6} />
					</WhenNear>
				</section>

				{/* ---------------- multiplayer: a 3D card stack ---------------- */}
				<section className="wrap section mp">
					<div className="mp-copy">
						<FloatHeading>Built for rival teams.</FloatHeading>
						<Rise><p className="lede">Every team has its own era, its own fort and its own knowledge. Race each other through history.</p></Rise>
						<ul className="mp-list">
							{SYSTEMS.map((s) => <li key={s.title}>{s.title}</li>)}
						</ul>
					</div>
					<div className="mp-stack">
						<CardSwap width={wide ? 420 : 300} height={wide ? 260 : 220} cardDistance={46} verticalDistance={56} delay={3800} pauseOnHover>
							{SYSTEMS.map((s, i) => (
								<Card key={s.title} customClass="sys-card">
									<span className="sys-num">{String(i + 1).padStart(2, '0')}</span>
									<h3>{s.title}</h3>
									<p>{s.text}</p>
								</Card>
							))}
						</CardSwap>
					</div>
				</section>

				{/* ---------------- finale: through the time warp ---------------- */}
				<section className="finale-warp">
					{!reduce && (
						<WhenNear className="warp-bg" margin="200px">
							<Hyperspeed curve="winding" speed={1.1} density={34} poles={16} dust={80}
								tailColors={['#ff8a3d', '#e8743b', '#c2401a']} headColors={['#7fdcff', '#3bc7e8', '#d7f5ff']} poleColors={['#ffb05c']} />
						</WhenNear>
					)}
					<div className="wrap finale">
						<Rise className="finale-copy">
							<GlitchText speed={0.6} enableShadows shadowColors={['#e8743b', '#3bc7e8']} className="finale-title" trigger="hover">The way home</GlitchText>
							<p>Build the Time Machine in the final era and your team goes home. Lightning splits the sky, the whole server hears about it, and your name tag turns to a star.</p>
							<p className="warp-hint">Press and hold the warp to boost.</p>
						</Rise>
						<Rise i={1} className="finale-shot">
							<img src={img('time-machine.jpg')} alt="The Time Machine: a brass frame around a glowing blue core" loading="lazy" />
						</Rise>
					</div>
				</section>

				<section className="wrap section install">
					<Rise>
						<h2>Install in two minutes.</h2>
						<p className="lede">Any launcher that supports Fabric: the official launcher, Prism, MultiMC or Modrinth App.</p>
					</Rise>
					<ol className="steps">
						<Rise i={0}><li><h3>Get Fabric</h3><p>Install <a href="https://fabricmc.net/use/installer/">Fabric Loader</a> 0.19.5 or newer for Minecraft 26.3.</p></li></Rise>
						<Rise i={1}><li><h3>Add Fabric API</h3><p>Put <a href="https://modrinth.com/mod/fabric-api">Fabric API</a> in your <code>mods</code> folder.</p></li></Rise>
						<Rise i={2}><li><h3>Drop in Tech Era</h3><p>Add the Tech Era jar to <code>mods</code> and create a new world. The fort is built at spawn.</p></li></Rise>
					</ol>
				</section>

				<section id="download" className="wrap section">
					<Rise>
						<ElectricBorder color="#ff8a3d" speed={0.8} chaos={0.4} thickness={1.6} borderRadius={8} glow={0.7}>
							<div className="download">
								<div>
									<h2><ShinyText text="Download Tech Era" color="#e9e6e1" shineColor="#ffcf9e" speed={3} /></h2>
									<dl>
										<dt>Version</dt>
										<dd className="mono">{release.loading ? <span className="skel" aria-label="Loading version" /> : release.version || 'see the releases page'}</dd>
										<dt>Minecraft</dt><dd className="mono">26.3 (Java Edition)</dd>
										<dt>Loader</dt><dd className="mono">Fabric 0.19.5+, Fabric API</dd>
										<dt>Java</dt><dd className="mono">25</dd>
									</dl>
									<p className="note">This is the only official download. The mod is free to play but all rights are reserved: please don't re-upload it or bundle it into modpacks. Link here instead. <a href="LICENSE.txt">Read the license</a>.</p>
								</div>
								<div className="dl-box">
									<DownloadButton release={release} big />
									{release.file && <span className="mono dl-file">{release.file}, {(release.size / 1024 / 1024).toFixed(1)} MB</span>}
									<a href={RELEASES}>All versions</a>
								</div>
							</div>
						</ElectricBorder>
					</Rise>
				</section>
			</main>

			<footer className="footer">
				<div className="wrap footer-inner">
					<span>Tech Era © 2026 Liam Chung. All rights reserved. <a href="LICENSE.txt">License</a></span>
					<span>Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.</span>
				</div>
			</footer>
		</ClickSpark>
	);
}
