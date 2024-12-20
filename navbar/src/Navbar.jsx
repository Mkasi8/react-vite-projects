import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data.jsx";
import logo from "./logo.svg";

const Navbar = () => {
  const [navlinks, toogleNavLinks] = useState(false);
  const linksRef = useRef(null);
  const linksContRef = useRef(null);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            type="button"
            className="nav-toogle"
            onClick={() => toogleNavLinks(!navlinks)}
          >
            {<FaBars />}
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContRef}
          style={{
            height: navlinks
              ? `${linksRef.current.getBoundingClientRect().height}px`
              : "0px",
          }}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              console.log(text);
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="social-icons">
            {social.map((singleSocial) => {
              const { id, url, icon } = singleSocial;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
