import Button from "../button/Button";
import "./footer.css";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="footer__container">
      <div className="middle footer__wrapper">
        <div className="footer__links">
          <p>Home</p>
          <p>About</p>
          <p>Portfolio</p>
        </div>
        <div className="logo">
          <h1>Geofrey Isiagi</h1>
        </div>
        <div className="last">
          <h2 style={{ marginBottom: "1rem" }}>isiagigeofrey0@gmail.com</h2>
          <Button name="Get CV" />
        </div>
      </div>
      <div className="footer__last">
        <p>&copy; Geofrey Isiagi 2023</p>
      </div>
    </div>
  );
}

export default Footer;
