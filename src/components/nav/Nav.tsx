import { Link } from "react-router-dom";
import Button from "../button/Button";
import { CgDetailsMore } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import "./nav.css";
import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav__container">
      <div className="middle nav__wrapper">
        <div className="nav__header">
          <Link to="/">
            <h1>Isiagi Geofrey</h1>
          </Link>
        </div>
        <div className={`nav__ul ${open ? "active" : ""}`}>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>About</li>
            </Link>
            <Link to="/">
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <Button name="Hire Me" />
        <div className="nav__icons">
          {open ? (
            <ImCancelCircle
              className="nav__icon"
              onClick={() => setOpen(false)}
            />
          ) : (
            <CgDetailsMore
              className="nav__icon"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
