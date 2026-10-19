import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * "Journey through the eras": on wide screens the section pins at the top of the viewport and
 * vertical scrolling pans sideways through five full-width panels. Each panel has a giant year
 * that drifts at a different speed (parallax), its screenshot slides in, and the backdrop warms
 * from forge-red to fusion-blue. Narrow screens and reduced motion get a plain vertical stack.
 */
export default function EraJourney({ eras, img }) {
	const wrap = useRef(null);
	const track = useRef(null);

	useGSAP(() => {
		const mm = gsap.matchMedia();
		mm.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
			const distance = () => track.current.scrollWidth - window.innerWidth;
			const pan = gsap.to(track.current, {
				x: () => -distance(),
				ease: 'none',
				scrollTrigger: {
					trigger: wrap.current,
					start: 'top top',
					end: () => `+=${distance()}`,
					pin: true,
					scrub: 1,
					invalidateOnRefresh: true,
				},
			});
			gsap.utils.toArray('.ej-panel', track.current).forEach((panel) => {
				const tl = { containerAnimation: pan, trigger: panel, scrub: true };
				gsap.fromTo(panel.querySelector('.ej-year'), { xPercent: 30 }, { xPercent: -30, ease: 'none', scrollTrigger: { ...tl, start: 'left right', end: 'right left' } });
				gsap.fromTo(panel.querySelector('.ej-shot'), { y: 80, rotate: 4, opacity: 0.2 }, { y: 0, rotate: -2, opacity: 1, ease: 'none', scrollTrigger: { ...tl, start: 'left 85%', end: 'center center' } });
				gsap.fromTo(panel.querySelector('.ej-copy'), { y: 40, opacity: 0 }, { y: 0, opacity: 1, ease: 'none', scrollTrigger: { ...tl, start: 'left 70%', end: 'left 30%' } });
			});
			gsap.fromTo(wrap.current.querySelector('.ej-progress-fill'), { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: wrap.current, start: 'top top', end: () => `+=${distance()}`, scrub: true } });
		});
		return () => mm.revert();
	}, { scope: wrap });

	return (
		<section className="ej" ref={wrap} id="eras" aria-label="The five eras">
			<div className="ej-head wrap">
				<h2>Five eras. No research tree.</h2>
				<p className="lede">Make something for the first time and the designs that use it open up. Run a gate machine eight times and history moves on.</p>
			</div>
			<div className="ej-track" ref={track}>
				{eras.map((era, i) => (
					<article key={era.name} className="ej-panel" style={{ '--hue': era.hue }}>
						<span className="ej-year" aria-hidden="true">{era.years.split('-')[0].replace('+', '')}</span>
						<div className="ej-copy">
							<span className="ej-index">Era {['I', 'II', 'III', 'IV', 'V'][i]} · {era.years}</span>
							<h3>{era.name}</h3>
							<p>{era.text}</p>
						</div>
						<img className="ej-shot" src={img(era.shot)} alt={era.alt} loading="lazy" />
					</article>
				))}
			</div>
			<div className="ej-progress" aria-hidden="true"><div className="ej-progress-fill" /></div>
		</section>
	);
}
