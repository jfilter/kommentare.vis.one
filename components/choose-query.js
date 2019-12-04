const React = require("react");

class Incrementer extends React.PureComponent {
  increment() {
    this.props.updateProps({
      value: this.props.value + 1
    });
  }

  render() {
    return <div>{<button type="button">Click Me!</button>}</div>;
  }
}

module.exports = Incrementer;
