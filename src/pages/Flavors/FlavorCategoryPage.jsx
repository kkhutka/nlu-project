import { useParams, Link } from "react-router-dom";
import { useFlavors } from "../../context/FlavorsContext";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import "./flavors.css";

export default function FlavorCategory() {
  const { category: raw } = useParams();
  const decoded = decodeURIComponent(raw || "");
  const { byCategory } = useFlavors();
  const items = byCategory[decoded] || [];

  return (
    <main className="flavors">
      <div className="crumbs">
        <Link to="/flavors" className="crumb">Flavors</Link>
        <span className="sep">/</span>
        <span className="crumb current">{decoded || "Unknown"}</span>
      </div>

      <section className="flavors-grid">
        <div className="category-list">
          <h1 className="page-title">{decoded || "Flavor Category"}</h1>

          {items.length === 0 ? (
            <p className="muted">
              No flavors found for this category.
              <br />
              <Link to="/flavors">Back to all categories</Link>
            </p>
          ) : (
            <ul className="bullet-list">
              {items.map((f, i) => (
                <li key={i}>{f.name}</li>
              ))}
            </ul>
          )}
        </div>

        <aside >
          <QuoteForm />
        </aside>
      </section>
    </main>
  );
}
