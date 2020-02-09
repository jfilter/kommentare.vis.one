const D3Component = require("idyll-d3-component");
const d3 = require("d3");

class DataLoader extends D3Component {
  loadData(props) {
    d3.json(props.src).then(parsed => {
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
    this.currentSrc = "";
    this.loadData(props);
  }

  update(props, oldProps) {
    this.currentSrc = props.src;
    if (props.src !== oldProps.src) {
      setTimeout(() => {
        if (props.src === this.currentSrc) this.loadData(props);
      }, props.timeout);
    }
  }
}

module.exports = DataLoader;
