const React = require("react");

class Thanks extends React.PureComponent {
  render() {
    return (
      <p>
        <script defer src="/static/js/matomo.js" />
        Ein Online-Projekt{" "}
        <a href="//johannesfilter.com">von Johannes Filter</a>, Johannes{" "}
        <a href="//twitter.com/fil_ter">auf Twitter folgen</a>
        <br></br>
        <small>
          <a href="https://johannesfilter.com/impressum/">Impressum</a>,{" "}
          <a href="https://johannesfilter.com/privacy/#german">
            Datenschutzerklärung
          </a>
        </small>
        <br></br>
        <br></br>
        Johannes Filter wohnt in Berlin, ist freiberuflicher Softwareentwickler
        und Aktivist für Informationsfreiheit, Civic Tech und Open Data. Er
        studierte Informatik (MSc) am Hasso-Plattner-Institut in Potsdam sowie
        in Tallinn (Estland) und Madrid (Spanien).
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
