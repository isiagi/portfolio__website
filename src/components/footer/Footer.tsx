import DownloadButton from "../button/DownloadButton"
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
          <h1 style={{ fontWeight:"500" }}>Geofrey Isiagi</h1>
        </div>
        <div className="last">
          <h2 style={{ marginBottom: "1rem",fontWeight:"500" }}>isiagigeofrey0@gmail.com</h2>
          <DownloadButton name="Download CV" to="/files/Geofrey_Isiagi_CV (8).pdf"/>
        </div>
      </div>
      <div className="footer__last">
        <p>&copy; Geofrey Isiagi 2023</p>
      </div>
    </div>
  );
}

export default Footer;
