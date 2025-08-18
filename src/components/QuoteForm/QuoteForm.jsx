import { useState } from "react";
import "./QuoteForm.css";

const LS_KEY = "nlu_quotes";
const CAPABILITIES = ["Design", "Production", "Certification"];

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    capability: "",
    comments: "",
    subscribe: false,
  });
  const [done, setDone] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
    list.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem(LS_KEY, JSON.stringify(list));
    setDone(true);
  };

  if (done) {
    return (
      <div className="quote-card">
        <h3>Get a quote</h3>
        <p className="success">Thanks! Your request was saved.</p>
      </div>
    );
  }

  return (
    <form className="quote-card" onSubmit={onSubmit}>
      <h3>Get a quote</h3>

      <label>
        <span>Name</span>
        <input name="name" value={form.name} onChange={onChange} required />
      </label>

      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          required
        />
      </label>

      <label>
        <span>Capability</span>
        <select
          name="capability"
          value={form.capability}
          onChange={onChange}
          required
        >
          <option value="" disabled>
            Select a capability
          </option>
          {CAPABILITIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Comments</span>
        <textarea
          rows={5}
          name="comments"
          value={form.comments}
          onChange={onChange}
        />
      </label>

      <label className="check">
        <input
          type="checkbox"
          name="subscribe"
          checked={form.subscribe}
          onChange={onChange}
        />
        <em>I’d like to receive the newsletter</em>
      </label>

      <button type="submit" className="btn-primary">Get a quote</button>
    </form>
  );
}
