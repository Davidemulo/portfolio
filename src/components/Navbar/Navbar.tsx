import { NavLink } from "react-router-dom";

import githubIcon from "../../assets/icons/github-icon.svg";
import youtubeIcon from "../../assets/icons/black-and-white-youtube-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-square-icon.svg";
import behanceIcon from "../../assets/icons/behance-square-icon.svg";

import "./Navbar.css";

const links = [
  { path: "/", label: "/home" },
  { path: "/me", label: "/me" },
  { path: "/work", label: "/work" },
  { path: "/contact", label: "/contact" },
];

const socials = [
    {
    href: "https://www.behance.net/nnaomaemulo",
    icon: behanceIcon,
    alt: "Behance",
  },
  {
    href: "https://www.linkedin.com/in/david-emulo",
    icon: linkedinIcon,
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/Davidemulo",
    icon: githubIcon,
    alt: "GitHub",
  },
  {
    href: "https://www.youtube.com/@davidemulo",
    icon: youtubeIcon,
    alt: "Youtube",
  },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="social-links">
        {socials.map((social) => (
          <a
            key={social.alt}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.alt}
          >
            <img src={social.icon} alt={social.alt} />
          </a>
        ))}
      </div>
    </header>
  );
}