import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

/**
 * The time-warp intro: the year races from 1000 AD to the present as the page loads, then the
 * curtain lifts. Shown once per browser session, and never with reduced motion.
 */
export default function WarpIntro() {
	const [show, setShow] = useState(() => {
		if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
		try { return !sessionStorage.getItem('techera-warp'); } catch { return true; }
	});
	const [year, setYear] = useState(1000);

	useEffect(() => {
		if (!show) return undefined;
		try { sessionStorage.setItem('techera-warp', '1'); } catch { /* private mode: show it again next time */ }
		const start = performance.now(), length = 1500, to = new Date().getFullYear();
		let raf = 0;
		const step = (now) => {
			const p = Math.min(1, (now - start) / length);
			const eased = 1 - Math.pow(1 - p, 3);
			setYear(Math.round(1000 + (to - 1000) * eased));
			if (p < 1) raf = requestAnimationFrame(step);
			else setTimeout(() => setShow(false), 350);
		};
		raf = requestAnimationFrame(step);
		return () => cancelAnimationFrame(raf);
	}, [show]);

	return (
		<AnimatePresence>
			{show && (
				<motion.div className="warp" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.08, filter: 'blur(12px)' }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} aria-hidden="true">
					<div className="warp-rings" />
					<motion.div className="warp-year" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
						{year}<span>AD</span>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
