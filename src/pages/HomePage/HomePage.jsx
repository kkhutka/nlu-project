import Slider from "../../components/Slider/Slider";
import "./HomePage.css";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
export default function HomePage() {
  return (
    <main className="home">
      <section className="slider-section">
        <Slider />
      </section>

      <section className="home-grid">
        <div className="home-copy">
          <h1>Design. Manufacture. Deliver</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vehicula, metus et sodales egestas, augue velit aliquet leo, in luctus
            neque nibh nec magna. Sed tempor, dui a dictum ultricies, lorem turpis
            lacinia arcu, ut posuere eros enim quis turpis. Phasellus id mi id
            tellus pretium blandit. In hac habitasse platea dictumst.
          </p>
          <p>
            Quisque gravida ante id nulla posuere, vitae dictum elit interdum.
            Pellentesque aliquam molestie lacus, vitae maximus dolor hendrerit at.
            Donec consequat fermentum metus, eu gravida justo porttitor non.
          </p>
        </div>

        <aside className="home-quote">
          <QuoteForm />
        </aside>
      </section>
    </main>
  );
}
