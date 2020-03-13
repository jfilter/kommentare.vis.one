const React = require("react");

class Overview1 extends React.PureComponent {
  render() {
    return (
      <div className="infokasten">
        <h3>Übersicht</h3>
        <p>
          Das Projekt besteht aus zwei Teilen. Auf dieser Seite werden
          Grundlagen von Machine Learning eklärt.{" "}
          <a href="/zeit/">Im zweiten Teil</a> geht es darum, Machine Learning
          anzuwenden, um Veränderung nachzuvollziehen. Das Projekt ist im Rahmen
          des <a href="https://prototypefund.de/">Prototype Fund</a> enstanden
          und wurde vom <a href="https://www.bmbf.de/">BMBF</a> finanziert.
        </p>
      </div>
    );
  }
}

module.exports = Overview1;
