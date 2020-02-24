const React = require("react");

class Video extends React.PureComponent {
  render() {
    const { q } = this.props;
    return (
      <div className="video-container">
        {q && (
          <video
            key={q}
            controls
            autoPlay
            loop
            playsInline
            width="100%"
            height="100%"
          >
            <source
              src={`http://kommentare.vis.one/videos/${q}.mp4`}
              type="video/mp4"
            />
            <source
              src={`http://kommentare.vis.one/videos/404.mp4`}
              type="video/mp4"
            />
            Bitte einen anderen Browser, z. B. Firefox oder Chrome, benutzen.
            Das Video kann nicht angezeigt werden.
          </video>
        )}
      </div>
    );
  }
}

module.exports = Video;
