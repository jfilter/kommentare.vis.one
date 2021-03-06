const React = require("react");
const Video = require("./video");

class Overview1 extends React.PureComponent {
  render() {
    return (
      <div className="infokasten">
        <h3>Übersicht über das Projekt</h3>
        <div>
          Im ersten Teil (diese Seite) werden Grundlagen von Machine Learning
          erklärt. <a href="/zeit/">Im zweiten Teil (nächste Seite)</a> wird
          mithilfe von Machine Learning die Veränderung der Sprache in den
          Kommentarenspalte visualisiert.
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <video
              controls
              autoPlay
              loop
              playsInline
              className="overview_video"
              style={{ margin: "1rem auto" }}
            >
              <source
                src={`https://kommentare.vis.one/videos/mittelmeer.mp4`}
                type="video/mp4"
              />
              <source
                src={`https://kommentare.vis.one/videos/404.mp4`}
                type="video/mp4"
              />
              Bitte einen anderen Browser, z. B. Firefox oder Chrome, benutzen.
              Das Video kann nicht angezeigt werden.
            </video>
            <div>
              <a href="/zeit/">👉 zu Teil II springen</a>
            </div>
          </div>
          <br></br>
          Das Projekt ist im Rahmen des{" "}
          <a href="https://prototypefund.de/">Prototype Fund</a> enstanden und
          wurde vom{" "}
          <a href="https://www.bmbf.de/">
            Bundesministerium für Bildung und Forschung
          </a>{" "}
          finanziert.
        </div>
      </div>
    );
  }
}

module.exports = Overview1;
