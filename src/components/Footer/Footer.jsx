import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <small>Copyright © {new Date().getFullYear()}. All rights reserved.</small>
        <img className="footer-logo" src="/logo.png" alt="" />
      </div>
    </footer>
  );
}
