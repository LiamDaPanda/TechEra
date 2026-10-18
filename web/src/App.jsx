import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Aurora from './components/rb/Aurora.jsx';
import SplitText from './components/rb/SplitText.jsx';
import RotatingText from './components/rb/RotatingText.jsx';
import ShinyText from './components/rb/ShinyText.jsx';
import Magnet from './components/rb/Magnet.jsx';
import ClickSpark from './components/rb/ClickSpark.jsx';
import ScrollVelocity from './components/rb/ScrollVelocity.jsx';
import SpotlightCard from './components/rb/SpotlightCard.jsx';
import CountUp from './components/rb/CountUp.jsx';
import TiltedCard from './components/rb/TiltedCard.jsx';
import DecryptedText from './components/rb/DecryptedText.jsx';
import GlitchText from './components/rb/GlitchText.jsx';

const img = (name) => `${import.meta.env.BASE_URL}assets/img/${name}`;
const RELEASES = 'https://github.com/LiamDaPanda/TechEra/releases';
const SPOT = 'rgba(232, 116, 59, 0.22)';

const ERAS = [
  { name: 'Medieval', years: '1000-1400', text: 'Charcoal clamps, bloomeries, the forge and the anvil. Wrought iron, then steel.' },
  { name: 'Gunpowder', years: '1400-1700', text: 'Saltpetre beds, powder mills, muskets, cast iron and cannon.' },
  { name: 'Industrial', years: '1700-1900', text: 'Coke, steam power, the telegraph and the Great Blast Furnace.' },
  { name: 'Modern', years: '1900-2000', text: 'Motors, circuit boards, the electric arc furnace and the motorcar.' },
  { name: 'Futuristic', years: '2000+', text: 'Fusion power, plasma, power armour, and a time machine home.' },
];

const SYSTEMS = [
  { title: 'The Patent Office', text: 'Invent the steam engine first and the whole server hears how many centuries you beat Newcomen by.' },
  { title: 'Raids with Warlords', text: 'Every few nights raiders march on your fort behind a named Warlord. His banner rallies your team.' },
  { title: 'Temporal rifts', text: 'Lightning splits the sky near your fort and leaves a barrel from your next era.' },
  { title: 'Forts, claims and wars', text: 'Settle your own hill fort, claim the land around it, and fight timed wars for plunder.' },
  { title: 'The telegraph', text: 'Tap out a telegram in the Industrial era and it clicks out at every station in the world.' },
  { title: "Maker's marks", text: 'Every blade carries its smith\'s name. Quench a Fine one and it becomes a Masterwork.' },
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

  return (
    <ClickSpark sparkColor="#ffb05c" sparkSize={11} sparkRadius={22} sparkCount={9} duration={450}>
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
            <div className="hero-shot">
              <TiltedCard imageSrc={img('fusion-reactor.jpg')} altText="A Fusion Reactor running: a ring of casing and glass around a glowing coil"
                captionText="The Fusion Reactor, Era V" containerHeight="clamp(240px, 32vw, 400px)" containerWidth="100%"
                imageHeight="clamp(240px, 32vw, 400px)" imageWidth="100%" rotateAmplitude={10} scaleOnHover={1.04}
                showTooltip={false} flipOnClick={false} radius={10} glare={0.35} glareColor="#ffd2a8" />
            </div>
          </div>
        </section>

        {/* ---------------- marquee ---------------- */}
        <div className="marquee" aria-hidden="true">
          <ScrollVelocity texts={['Charcoal  Bloomery  Steel  Gunpowder  Cast iron  Coke  Steam  Telegraph  ',
            'Dynamo  Circuits  Arc furnace  Fusion  Plasma  Time machine  ']}
            velocity={reduce ? 0 : 40} className="marquee-text" numCopies={4} />
        </div>

        {/* ---------------- numbers ---------------- */}
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

        {/* ---------------- eras ---------------- */}
        <section id="eras" className="wrap section">
          <Rise><h2>Five eras. No research tree.</h2></Rise>
          <Rise i={1}><p className="lede">Make something for the first time and the designs that use it open up. Run a gate machine eight times and history moves on.</p></Rise>
          <ol className="timeline">
            {ERAS.map((era, i) => (
              <Rise key={era.name} i={i} className="tl-item">
                <span className="tl-years">{era.years}</span>
                <h3><DecryptedText text={era.name} animateOn="view" speed={45} maxIterations={14} sequential revealDirection="start"
                  encryptedClassName="tl-scramble" /></h3>
                <p>{era.text}</p>
              </Rise>
            ))}
          </ol>
        </section>

        {/* ---------------- machines bento ---------------- */}
        <section id="machines" className="wrap section">
          <Rise><h2>Machines with real heat, and machines the size of a house.</h2></Rise>
          <div className="bento">
            {[
              { cls: 'b-a', src: 'machines.jpg', title: 'Real heat', text: 'Pump the bellows past 1200 °C. Better fuel and a hotter fire make Fine metal.', alt: 'A row of Tech Era machines with custom 3D models' },
              { cls: 'b-b', src: 'great-blast-furnace.jpg', title: 'Great Blast Furnace', text: 'A four-storey firebrick tower that smelts in bulk.', alt: 'The Great Blast Furnace with fire and smoke pouring from its chimney' },
              { cls: 'b-c', src: 'build-guide.jpg', title: 'A build guide in the world', text: 'Sneak-click a controller and glowing marks show every missing block.', alt: 'Orange marks floating where a reactor\'s missing blocks go' },
              { cls: 'b-d', src: 'quests.jpg', title: 'A quest book for every era', text: '25 quests with rewards, shared by your team.', alt: 'The notebook\'s quest book page with Era I quests' },
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

        {/* ---------------- multiplayer ---------------- */}
        <section className="wrap section">
          <Rise><h2>Built for a server full of rival teams.</h2></Rise>
          <Rise i={1}><p className="lede">Every team has its own era, its own fort and its own knowledge. Race each other through history.</p></Rise>
          <div className="systems">
            {SYSTEMS.map((s, i) => (
              <Rise key={s.title} i={i % 2}>
                <SpotlightCard className="sys" spotlightColor={SPOT}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </SpotlightCard>
              </Rise>
            ))}
          </div>
        </section>

        {/* ---------------- finale ---------------- */}
        <section className="wrap section finale">
          <Rise className="finale-copy">
            <GlitchText speed={0.6} enableShadows shadowColors={['#e8743b', '#3bc7e8']} className="finale-title" trigger="hover">The way home</GlitchText>
            <p>Build the Time Machine in the final era and your team goes home. Lightning splits the sky, the whole server hears about it, and your name tag turns to a star.</p>
          </Rise>
          <Rise i={1} className="finale-shot">
            <img src={img('time-machine.jpg')} alt="The Time Machine: a brass frame around a glowing blue core" loading="lazy" />
          </Rise>
        </section>

        {/* ---------------- install ---------------- */}
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

        {/* ---------------- download ---------------- */}
        <section id="download" className="wrap section">
          <Rise>
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
