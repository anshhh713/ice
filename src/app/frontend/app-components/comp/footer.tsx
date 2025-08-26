import "./footer.css";
import type { FC } from "react";
type FooterProps = {
  author: string;
};
const Footer: FC<FooterProps> = (props) => {
  return (
    <div className="footer">
      <p>© {new Date().getFullYear()} ICE. All rights reserved.</p>
      <nav className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="https://github.com/anshhh713/ICE">Github-repo-link</a>
      </nav>
      <p className="footer-note">
        Made with ❤️ using Vite + React + TypeScript
      </p>
      <p className="credits">
        Authors - Ansh Rawat, Rei WuZen, {props.author}
      </p>
    </div>
  );
};

export default Footer;
