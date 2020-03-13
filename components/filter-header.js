const React = require("react");

class FilterHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
    this.state = { svgElement: null };
  }

  componentDidMount() {
    setTimeout(() => {
      const width = this.myInput.current.offsetWidth;
      const height = width > 768 ? 400 : (window.innerHeight * 2) / 3;
      this.setState({
        svgElement: `<svg class="fancy-text" viewBox="0 0 ${width} ${height}"><symbol id="s-text"><text text-anchor="middle" x="50%" y="50%">Machine Learning</text></symbol><g class="g-ants">  <use xlink:href="#s-text" class="text-copy"></use>  <use xlink:href="#s-text" class="text-copy"></use>  <use xlink:href="#s-text" class="text-copy"></use>  <use xlink:href="#s-text" class="text-copy"></use>  <use xlink:href="#s-text" class="text-copy"></use></g></svg>`
      });
    }, 10);
  }

  render() {
    const { background, color } = this.props;
    return (
      <div
        ref={this.myInput}
        className={"article-header"}
        style={{ background, color }}
      >
        {/* this is dirty */}
        <script defer src="/static/js/chroma.min.js" />
        <div dangerouslySetInnerHTML={{ __html: this.state.svgElement }} />

        {this.props.subtitle && (
          <div
            className={"dek"}
            style={{
              background: "#222222",
              position: "relative",
              padding: "0.5rem"
            }}
          >
            <h2>am Beispiel von Kommentaren</h2>
            <h3>{this.props.subtitle}</h3>
          </div>
        )}
        {this.props.author && (
          <div
            className={"byline"}
            style={{
              background: "#222222",
              position: "relative",
              padding: "0.5rem"
            }}
          >
            Online-Projekt von{" "}
            <a href={this.props.authorLink}>{this.props.author}</a>
            <br></br>
            {this.props.date}
          </div>
        )}
      </div>
    );
  }
}

module.exports = FilterHeader;
