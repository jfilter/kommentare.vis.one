const React = require("react");

class Thanks extends React.PureComponent {
  render() {
    return (
      <p>
        von <a href="//johannesfilter.com">Johannes Filter</a> (
        <a href="//twitter.com/fil_ter">@fil_ter</a>)<br></br>
        <br></br>
        Johannes Filter wohnt in Berlin, ist freiberuflicher Softwareentwickler
        und Aktivist für Informationsfreiheit, Civic Tech und Open Data. Er
        studierte Informatik am Hasso-Plattner-Institut in Potsdam sowie in
        Tallinn (Estland) und Madrid (Spanien).
        <br></br>
        <br></br>
        Diese Arbeit ist im Rahmen des{" "}
        <a href="https://prototypefund.de/">Prototype Fund</a> entstanden und
        wurde vom{" "}
        <a href="https://www.bmbf.de/">
          Bundesministerium für Bildung und Forschung
        </a>{" "}
        finanziert.
        <br></br>
        <br></br>
        <a href="https://www.bmbf.de/">
          <img
            style={{ width: "45%", float: "left", height: "20rem" }}
            src="/static/logo-bmbf.svg"
          />
        </a>
        <a href="https://prototypefund.de/">
          <img
            style={{ width: "45%", float: "right", height: "20rem" }}
            src="/static/ptf-icon.svg"
          />
        </a>
      </p>
    );
  }
}

module.exports = Thanks;
