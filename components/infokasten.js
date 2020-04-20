const React = require("react");

class Infokasten extends React.PureComponent {
  render() {
    return (
      <div className="infokasten">
        <h3>Abbildung auf einer Ebene</h3>
        <p>
          Dies ist eine Visualisierung von einem Word Embedding. Das bedeutet,
          hier werden die Beziehungen zwischen den Worten gezeigt,
          runtergebrochen auf zwei Dimensionen (eine Ebene). In der Mitte steht
          ein Wort, darum herum angeordnet sind ähnliche Wörter angeordnet. Je
          ähnlicher sich die Begriffe sind, desto kürzer sind die Distanzen
          zueinander. Begriffe die sich unähnlich sind, werden visuell weiter
          entfernt voneinander dargestellt. Die Achsen haben hier keine
          Bedeutung.{" "}
          <a href="/hintergrund#wie-kann-ein-word-embedding-auf-einer-ebene-dargestellt-werden?">
            Mehr Hintergrund-Informationen.
          </a>
        </p>
      </div>
    );
  }
}

module.exports = Infokasten;
