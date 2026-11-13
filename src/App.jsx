import { useEffect, useRef, useState } from 'react';
import portrait from './assets/portrait.webp';
import wordmark from './assets/wordmark.png';

const materials = [
  { id: 'pearl', name: 'Pearl', hint: 'The original' },
  { id: 'chrome', name: 'Chrome', hint: 'Polished metal' },
  { id: 'glass', name: 'Liquid glass', hint: 'Iridescent glass' },
  { id: 'stitch', name: 'Soft stitch', hint: 'A crochet-inspired finish' },
];

export default function App() {
  const [lockedMaterial, setLockedMaterial] = useState('pearl');
  const [previewMaterial, setPreviewMaterial] = useState(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const activeMaterial = previewMaterial || lockedMaterial;

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMove = (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      setPointer({ x, y });
    };

    hero.addEventListener('pointermove', handleMove);
    return () => hero.removeEventListener('pointermove', handleMove);
  }, []);

  const resetPreview = () => setPreviewMaterial(null);

  return (
    <main>
      <section className="hero" ref={heroRef} onPointerLeave={resetPreview}>
        <img className="hero-photo" src={portrait} alt="Dreamy close-up portrait of Esha" />
        <div className="photo-wash" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        <div className="light-leak light-leak-one" aria-hidden="true" />
        <div className="light-leak light-leak-two" aria-hidden="true" />

        <header className="topbar">
          <a className="monogram" href="#home" aria-label="Esha Agarwal home">e.</a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="mailto:hello@eshaagarwal.com">Contact</a>
          </nav>
        </header>

        <div
          className={`wordmark-wrap material-${activeMaterial}`}
          style={{ '--pointer-x': `${pointer.x * 7}px`, '--pointer-y': `${pointer.y * 5}px` }}
        >
          <img className="wordmark wordmark-shadow" src={wordmark} alt="" aria-hidden="true" />
          <img className="wordmark" src={wordmark} alt="Esha Agarwal" />
          <span className="wordmark-glint" aria-hidden="true" />
        </div>

        <div className="material-control" aria-label="Choose a lettering material">
          <span className="material-label">MATERIAL PLAYGROUND</span>
          <div className="swatches">
            {materials.map((material) => (
              <button
                key={material.id}
                className={`swatch swatch-${material.id} ${lockedMaterial === material.id ? 'is-locked' : ''} ${activeMaterial === material.id ? 'is-active' : ''}`}
                type="button"
                aria-label={`${material.name}. ${material.hint}. Click to select.`}
                aria-pressed={lockedMaterial === material.id}
                onPointerEnter={() => setPreviewMaterial(material.id)}
                onFocus={() => setPreviewMaterial(material.id)}
                onBlur={resetPreview}
                onClick={() => setLockedMaterial(material.id)}
              >
                <span />
              </button>
            ))}
          </div>
          <span className="material-current">{materials.find((m) => m.id === activeMaterial)?.name}</span>
        </div>

        <div className="bottom-left">
          <span>Creative</span>
          <span>Art Director</span>
        </div>
        <a className="scroll-cue" href="#work">
          <span>Scroll to explore</span>
          <span className="arrow" aria-hidden="true">↓</span>
        </a>
        <div className="bottom-right">Mumbai, India</div>
      </section>

      <section className="below-fold" id="work">
        <div className="section-kicker">A LITTLE BIT OF EVERYTHING</div>
        <h1>Ideas made<br /><em>to be seen.</em></h1>
        <p>Selected work across identities, campaigns, digital experiences and the occasional experiment.</p>
        <div className="work-placeholder">Your work grid starts here ↓</div>
      </section>
      <section className="about-strip" id="about">
        <span>Independent thinker. Detail enthusiast. Always making.</span>
        <a href="mailto:hello@eshaagarwal.com">Say hello ↗</a>
      </section>
    </main>
  );
}
