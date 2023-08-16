import "./port.css";
import img1 from "../../assets/port.png";
import img2 from "../../assets/port1.png";
import img3 from "../../assets/port2.png";
import img4 from "../../assets/port3.png";
import img5 from "../../assets/port4.png";
import img6 from "../../assets/book.png";
import img7 from "../../assets/tour.png";
import img8 from "../../assets/weather.png";
import Button from "../button/Button";
import apply from "../../assets/apply.png";

type Props = {};

const data = [
  {
    id: 1,
    image: img1,
    para: `This is a website made with Reactjs/NextJs and CSS. The purpose
    of this website is to display the different services offer and
    let the user be to email the company.`,
    view: "View",
    github: "GitHub",
    viewLink: "https://www.hitexconsortium.com/",
    githubLink: "https://github.com/isiagi/medical",
  },
  {
    id: 20,
    image: apply,
    para: `This a job application tracking Web App. I enable you track your sent job application.It uses Nextjs, Tailwind CSS, Antd-for tables and Clerk Auth for authentication.`,
    view: "View",
    github: "GitHub",
    viewLink: "https://apply-track.vercel.app/",
    githubLink: "https://github.com/isiagi/apply_track/tree/main",
  },
  {
    id: 2,
    image: img2,
    para: `This website displays services offered by a shipping company. It
    was developed with ReactJs and CSS. I was able improve on my CSS
    and make something nice.`,
    view: "View",
    github: "GitHub",
    viewLink: "https://happilogistics.vercel.app/",
    githubLink: "https://github.com/isiagi/happilogistics",
  },
  {
    id: 3,
    image: img6,
    para: ` This is a fullstack MERN website creating a book shop.This was a job application test requirement. I used Chakra for styling.`,
    view: "View",
    github: "GitHub",
    viewLink: "https://bookshop-isiagi.vercel.app/",
    githubLink: "https://github.com/isiagi/bookshop/tree/main",
  },
  {
    id: 4,
    image: img4,
    para: `This Website let's you view houses for sale and rent. The
    project was create with React/NextJs, Chakra-UI and interacts
    with Rapid Api to fetch the information.`,
    view: "View",
    github: "GitHub",
    viewLink: "https://real-estate-isiagi.vercel.app/",
    githubLink: "https://github.com/isiagi/realEstate",
  },
  {
    id: 5,
    image: img5,
    para: `This is Portfolio website made with Reactjs, CSS and some React
    libraries like Emailjs. I picked inspiration from other portfolio websites for the styling and layout.`,
    view: "View",
    github: "GitHub",
    viewLink: "https://portfolio-website-isiagi.vercel.app/",
    githubLink: "https://github.com/isiagi/portfolio__website",
  },
  {
    id: 6,
    image: img7,
    para: ` This is almost a Homepage of a website I create when making a tutorial. The site was created in React/Typescript and CSS.`,
    view: "View",
    github: "GitHub",
    viewLink: "https://travel-website-rust-delta.vercel.app/",
    githubLink: "https://github.com/isiagi/travel__website/tree/master",
  },
  {
    id: 7,
    image: img8,
    para: ` This is a Weather Web App created in React with Vite and CSS for styling. This app can show the current weather of any city in the world`,
    view: "View",
    github: "GitHub",
    viewLink: "https://weather-app1-taupe.vercel.app/",
    githubLink: "https://github.com/isiagi/weather-app1/",
  },
  {
    id: 8,
    image: img3,
    para: ` This is a website serving information about HappiTravel. The
    website was created with ReactJS and CSS with some more React
    libraries.`,
    view: "View",
    github: "GitHub",
    viewLink: "https://happitravel.vercel.app/",
    githubLink: "https://github.com/isiagi/happitravel",
  },
];

function Port({}: Props) {
  return (
    <div className="port__container">
      <div className="port__wrapper">
        <div className="port__grid">
          {data.map(
            ({ id, image, para, view, github, viewLink, githubLink }) => (
              <div key={id} className="port__item">
                <div className="port__img">
                  <img src={image} alt="" />
                </div>
                <div className="port__details">
                  <p>{para}</p>
                </div>
                <div className="port__buttons">
                  <Button name={view} link={viewLink} path={false} />
                  <Button name={github} link={githubLink} path={false} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Port;
