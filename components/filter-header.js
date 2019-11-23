import React from "react";

class FilterHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
    this.state = { svgElement: null };
  }

  componentDidMount() {
    const width = this.myInput.current.offsetWidth;

    this.setState({
      svgElement: `<svg class="fancy-text" viewBox="0 0 ${width} 400"><symbol id="s-text"><text text-anchor="middle" x="50%" y="50%">KOMMENTARE</text></symbol><g class = "g-ants">  <use xlink:href="#s-text" class="text-copy"></use>  <use xlink:href="#s-text" class="text-copy"></use>  <use xlink:href="#s-text" class="text-copy"></use>  <use xlink:href="#s-text" class="text-copy"></use>  <use xlink:href="#s-text" class="text-copy"></use></g></svg>`
    });
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

        <h1 className={"hed"}>{this.props.title}</h1>
        {this.props.subtitle && (
          <h2 className={"dek"}>{this.props.subtitle}</h2>
        )}
        {this.props.author && (
          <div className={"byline"}>
            von <a href={this.props.authorLink}>{this.props.author}</a>
          </div>
        )}
        {this.props.date && (
          <div className={"idyll-pub-date"}>{this.props.date}</div>
        )}
      </div>
    );
  }
}

module.exports = FilterHeader;
