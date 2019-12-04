const D3Component = require("idyll-d3-component");
const d3 = require("d3");

class DataLoader extends D3Component {
  loadData(props) {
    if (
      !"value" in props ||
      !"prevSrc" in props.value ||
      props.value.prevSrc != props.src
    ) {
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
          value: { data, tokens, sims, prevSrc: props.src }
        });
      });
    } else {
      props.updateProps({ load: false });
    }
  }

  initialize(node, props) {
    this.loadData(props);
  }

  update(props, oldProps) {
    this.loadData(props);
  }
}

module.exports = DataLoader;
