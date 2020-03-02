const D3Component = require("idyll-d3-component");
const d3 = require("d3");

class DataLoader extends D3Component {
  loadData(src, props) {
    d3.json(src).then(parsed => {
      const { tokens } = parsed;
      let data = {};
      if ("vectors" in parsed) {
        data = parsed.vectors.map((xx, i) => {
          return { x: xx[0], y: xx[1] };
        });
      }

      let sims = {};
      if ("sims" in parsed) {
        sims = parsed.sims;
      }

      props.updateProps({
        value: { data, tokens, sims }
      });
    });
  }

  initialize(node, props) {
    this.w = Math.max(window.screen.width, window.innerWidth);
    this.currentSrc = "";
    this.loadData(props.src, props);
  }

  update(props, oldProps) {
    let { src } = props;
    if (props.small == true) src += this.w > 768 ? 9 : 6;

    this.currentSrc = src;
    if (src !== oldProps.src) {
      setTimeout(() => {
        if (src === this.currentSrc) this.loadData(src, props);
      }, props.timeout);
    }
  }
}

module.exports = DataLoader;
