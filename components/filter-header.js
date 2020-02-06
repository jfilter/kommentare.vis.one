import React from "react";

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
        svgElement: `<svg class="fancy-text" viewBox="0 0 ${width} ${height}"><symbol id="s-text"><text text-anchor="middle" x="50%" y="50%">KOMMENTARE</text></symbol><g class="g-ants">  <use xlink:href="#s-text" class="text-copy"></use>  <use xlink:href="#s-text" class="text-copy"></use>  <use xlink:href="#s-text" class="text-copy"></use>  <use xlink:href="#s-text" class="text-copy"></use>  <use xlink:href="#s-text" class="text-copy"></use></g></svg>`
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
        <div dangerouslySetInnerHTML={{ __html: this.state.svgElement }} />

        {this.props.subtitle && (
          <h2
            className={"dek"}
            style={{
              background: "#222222",
              position: "relative",
              padding: "0.5rem"
            }}
          >
            {this.props.subtitle}
          </h2>
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
            von <a href={this.props.authorLink}>{this.props.author}</a>,{" "}
            {this.props.date}
          </div>
        )}
      </div>
    );
  }
}

module.exports = FilterHeader;
