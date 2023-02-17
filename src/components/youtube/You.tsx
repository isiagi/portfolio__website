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
            >
              <div>
                <h1>Hello</h1>
              </div>
            </iframe>
          </div>
          <div className="you__item">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/EUZvavETzbQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
              style={{ border: 0 }}
            >
              <div>
                <h1>Hello</h1>
              </div>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default You;
