import { Link } from "react-router-dom";
import { useFlavors } from "../../context/FlavorsContext";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import "./Flavors.css";

export default function FlavorsPage() {
  const { categories } = useFlavors();

  return (
    <main className="flavors">
      <h1 className="page-title">Flavors</h1>

      <section className="flavors-grid">
        <div className="cards">
          {categories.map((cat) => {
            const href = `/flavors/${encodeURIComponent(cat)}`;
            const img = `https://placehold.co/480x300?text=${encodeURIComponent(cat)}`;
            return (
              <Link key={cat} to={href} className="card flavor-card">
                <img src={img} alt="" loading="lazy" />
                <div className="card-title">{cat}</div>
              </Link>
            );
          })}
        </div>

        <aside className="quote-wrap">
          <QuoteForm />
        </aside>
      </section>
    </main>
  );
}
