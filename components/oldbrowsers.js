const React = require("react");

class Oldbrowsers extends React.PureComponent {
  render() {
    return (
      <div>
        <p
          id="oldbrowsers"
          style={{ border: "2px solid red", padding: "10px" }}
          hidden
        >
          Du benutzt einen alten Browser, daher könnten Teile der Webseite nicht
          richtig dargestellt werden. Bitte benutze z. B.{" "}
          <a href="https://www.mozilla.org/de/firefox/new/">Firefox</a> oder{" "}
          <a href="https://www.google.com/intl/de/chrome/">Chrome</a>.
        </p>
        <script defer noModule src="/static/js/oldbrowsers.js" />
      </div>
    );
  }
}

module.exports = Oldbrowsers;
