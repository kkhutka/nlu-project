import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

const SLIDES = [
  { to: "/capabilities/design",        img: "/slider1.jpg", alt: "Design" },
  { to: "/capabilities/production",    img: "/slider2.jpg", alt: "Production" },
  { to: "/capabilities/certification", img: "/slider3.jpg", alt: "Certification" },
];

export default function Slider() {
  const [i, setI] = useState(0);
  const timer = useRef(null);

  const next = () => setI(v => (v + 1) % SLIDES.length);
  const go   = (idx) => setI(idx);

  useEffect(() => {
    timer.current = setInterval(next, 5000);
    return () => clearInterval(timer.current);
  }, []);

  const pause  = () => clearInterval(timer.current);
  const resume = () => { timer.current = setInterval(next, 5000); };

  return (
    <div
      className="slider"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      aria-roledescription="carousel"
      aria-label="Capabilities"
    >
      {SLIDES.map((s, idx) => (
        <Link
          key={s.to}
          to={s.to}
          className={`slide ${idx === i ? "active" : ""}`}
          tabIndex={idx === i ? 0 : -1}
          aria-hidden={idx !== i}
          // CRUCIAL: only the active slide can be clicked
          style={{ pointerEvents: idx === i ? "auto" : "none" }}
          aria-label={`${s.alt} capability`}
        >
          <img src={s.img} alt="" />
        </Link>
      ))}

      <div className="dots" role="tablist" aria-label="Choose slide">
        {SLIDES.map((s, idx) => (
          <button
            key={s.to}
            className={`dot ${idx === i ? "active" : ""}`}
            onClick={() => go(idx)}
            role="tab"
            aria-selected={idx === i}
            aria-label={`Show ${s.alt}`}
          />
        ))}
      </div>
    </div>
  );
}
