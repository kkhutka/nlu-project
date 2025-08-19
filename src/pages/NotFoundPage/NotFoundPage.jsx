import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  const FALLBACKS = useMemo(
    () => [
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2J4Zm51NHJsY2tubXNxM3pyNWdjdWlrMXk1NXlpM3d1NHpkYjZ4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ISOckXUybVfQ4/giphy.gif"
    ],
    []
  );

  const [src, setSrc] = useState("/404.gif");
  const [i, setI] = useState(0);

  const handleError = () => {
    if (src !== FALLBACKS[i]) setSrc(FALLBACKS[i]);
    else if (i + 1 < FALLBACKS.length) {
      setI(i + 1);
      setSrc(FALLBACKS[i + 1]);
    }
  };

  return (
    <main className="nf">
      <div className="nf-card">
        <img className="nf-gif" src={src} alt="Lost in the sauce (404)" onError={handleError} />
        <h1>Oops — page not found</h1>
        <p className="nf-text">
          We couldn’t find that page. It might have moved or never existed.
        </p>

        <div className="nf-actions">
          <Link to="/" className="btn-primary">Go home</Link>
          <Link to="/flavors" className="btn-secondary">Browse flavors</Link>
        </div>

        <p className="nf-small">
          If you think this is a mistake, <a href="mailto:hello@example.com">let us know</a>.
        </p>
      </div>
    </main>
  );
}
