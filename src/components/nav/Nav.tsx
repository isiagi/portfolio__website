import Button from "../button/Button";
import "./nav.css";

type Props = {};

function Nav({}: Props) {
  return (
    <nav className="nav__container">
      <div className="middle nav__wrapper">
        <div className="nav__header">
          <h1>Isiagi Geofrey</h1>
        </div>
        <div className="nav__ul">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <Button name="Hire Me"/>
      </div>
    </nav>
  );
}

export default Nav;
