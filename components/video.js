const React = require("react");

class Video extends React.PureComponent {
  render() {
    return (
      <video controls autoplay loop>
        <source
          src={`http://kommentare.vis.one/videos/${this.props.q}.mp4`}
          type="video/mp4"
        />
      </video>
    );
  }
}

module.exports = Video;
