import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useFlavors } from "../../context/FlavorsContext";
import "./NavBar.css";

export default function NavBar() {
  const { categories } = useFlavors();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      const el = e.target;
      if (el.closest && el.closest("a")) setMobileOpen(false);
    }
    const nav = navRef.current;
    nav?.addEventListener("click", handleClick);
    return () => nav?.removeEventListener("click", handleClick);
  }, []);

  const toggleDropdown = (key) =>
    setOpenDropdown((v) => (v === key ? null : key));

  return (
    <header className="site-header">
      {/* ROW 1: logo (on top) */}
      <div className="brand-row">
        <Link to="/" className="brand" aria-label="Home">
          <img src="/logo.png" alt="" />
        </Link>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="main-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="main-nav"
        ref={navRef}
        className={`main-nav ${mobileOpen ? "open" : ""}`}
        aria-label="Main"
      >
        <ul className="menu" role="menubar">
          <li
            className={`menu-item dropdown ${
              openDropdown === "capabilities" ? "open" : ""
            }`}
            role="none"
          >
            <button
              className="trigger"
              aria-haspopup="true"
              aria-expanded={openDropdown === "capabilities"}
              onClick={() => toggleDropdown("capabilities")}
            >
              Capabilities 
            </button>
            <ul className="submenu" role="menu" aria-label="Capabilities">
              <li role="none"><a role="menuitem" href="/capabilities/design">Design</a></li>
              <li role="none"><a role="menuitem" href="/capabilities/production">Production</a></li>
              <li role="none"><a role="menuitem" href="/capabilities/certification">Certification</a></li>
            </ul>
          </li>

          <li
            className={`menu-item dropdown ${
              openDropdown === "flavors" ? "open" : ""
            }`}
            role="none"
          >
            <NavLink to="/flavors" className="trigger" onClick={() => setOpenDropdown(null)}>
              Flavors
            </NavLink>
            <button
              className="expander"
              aria-label="Expand flavors"
              aria-haspopup="true"
              aria-expanded={openDropdown === "flavors"}
              onClick={() => toggleDropdown("flavors")}
            />
            <ul className="submenu" role="menu" aria-label="Flavor categories">
              {categories.map((c) => (
                <li role="none" key={c}>
                  <NavLink role="menuitem" to={`/flavors/${encodeURIComponent(c)}`}>
                    {c}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          {/* Simple links */}
          <li className="menu-item" role="none"><a role="menuitem" href="/about">About Us</a></li>
          <li className="menu-item" role="none"><a role="menuitem" href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}
