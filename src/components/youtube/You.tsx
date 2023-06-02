import "./you.css";

type Props = {};

function You({}: Props) {
  return (
    <div className="you__container">
      <div className="you__wrapper">
        <div className="you__grid">
          <div className="you__item">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/EUZvavETzbQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
              style={{ border: 0 }}
            ></iframe>
            <div>
              <h3 style={{color: "#D8472E"}}>
                CREATE A RESPONSIVE REACT / TYPESCRIPT WEBSITE FOR BEGINNERS
              </h3>
            </div>
          </div>
          <div className="you__item">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/jmhGNBSlazQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
              style={{ border: 0 }}
            ></iframe>
            <div>
              <h3 style={{color: "#D8472E"}}>HOST A JAVASCRIPT NODE EXPRESS API TO RENDER FOR FREE.</h3>
            </div>
          </div>
          <div className="you__item">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/nEdqYuqyemc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
              style={{ border: 0 }}
            ></iframe>
            <div>
              <h3 style={{color: "#D8472E"}}>
                HOW TO HOST A REACTJS STATIC WEBSITE IN AN AWS S3 BUCKET AND USE
                CLOUDFRONT
              </h3>
            </div>
          </div>
          <div className="you__item">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/5HimmpIqLoE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
              style={{ border: 0 }}
            ></iframe>
            <div>
              <h3 style={{color: "#D8472E"}}>Create a Simple Responsive NavBar in React and CSS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default You;
