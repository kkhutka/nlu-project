import { useEffect, useRef, useState } from "react";
import "./Slider.css";

const SLIDES = [{ img: "/slider1.jpg" }, { img: "/slider2.jpg" }, { img: "/slider3.jpg" }];

export default function Slider() {
  const [i, setI] = useState(0);
  const timer = useRef(null);

  const next = () => setI((v) => (v + 1) % SLIDES.length);
  const go = (idx) => setI(idx);

  useEffect(() => {
    timer.current = setInterval(next, 5000);
    return () => clearInterval(timer.current);
  }, []);

  const pause = () => clearInterval(timer.current);
  const resume = () => { timer.current = setInterval(next, 5000); };

  return (
    <div className="slider" onMouseEnter={pause} onMouseLeave={resume}>
      {SLIDES.map((s, idx) => (
        <div key={idx} className={`slide ${idx === i ? "active" : ""}`} aria-hidden={idx !== i}>
          <img src={s.img} alt="" />
        </div>
      ))}

      <div className="dots">
        {SLIDES.map((_, idx) => (
          <button key={idx} className={`dot ${idx === i ? "active" : ""}`} onClick={() => go(idx)} />
        ))}
      </div>
    </div>
  );
}
