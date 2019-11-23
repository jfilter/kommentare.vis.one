const D3Component = require("idyll-d3-component");
const d3 = require("d3");

class DataLoader extends D3Component {
  loadData(props) {
    d3.json(props.src).then(parsed => {
      const { tokens } = parsed;
      // const data = parsed.vectors.map((xx, i) => {
      //   return { x: xx[0], y: xx[1], label: tokens[i] };
      // });

      const data = parsed.vectors.map((xx, i) => {
        return { x: xx[0], y: xx[1] };
      });
      props.updateProps({ value: { data, tokens }, load: false });
    });
  }

  initialize(node, props) {
    if (props.load) {
      this.loadData(props);
    }
  }

  update(props, oldProps) {
    if (props.load) {
      this.loadData(props);
    }
  }
}

module.exports = DataLoader;
