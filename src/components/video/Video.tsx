import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import "./video.css";

type Props = {};

function Video({}: Props) {
  const id = youtube_parser("https://www.youtube.com/watch?v=EUZvavETzbQ");

  return (
    <div className="video__container">
      <div className="middle video__wrapper">
        <div>
          {/* <iframe
        width="100%"
        height="443"
        loading="lazy"
        // type="text/html"
        src="https://youtu.be/embed/EUZvavETzbQ"
        title="myIframe"
      >
        <div>
          <small>
            <a href="https://youtubeembedcode.com/nl/">
              youtubeembedcode.com/nl/
            </a>
          </small>
        </div>
        <div>
          <small>
            <a href="https://realmoneycasinoau.com/">
              https://realmoneycasinoau.com/
            </a>
          </small>
        </div>
      </iframe> */}
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/EUZvavETzbQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
            style={{border:0}}
          >
            <div>
          <h1>Hello</h1>
        </div>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Video;

function youtube_parser(url: string) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}
