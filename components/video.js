const React = require("react");

class Video extends React.PureComponent {
  render() {
    const { q } = this.props;
    return (
      <div className="video-container">
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
        </video>
      </div>
    );
  }
}

module.exports = Video;
