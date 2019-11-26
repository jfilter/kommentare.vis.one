const React = require("react");

class Incrementer extends React.PureComponent {
  increment() {
    this.props.updateProps({
      value: this.props.value + 1
    });
  }

  render() {
    return <div onClick={this.increment.bind(this)}>Click me.</div>;
  }
}

module.exports = Incrementer;
