const React = require("react");

class Infokasten extends React.PureComponent {
  render() {
    return (
      <div className="infokasten">
        <h3>Abbildung auf einer Ebene</h3>
        <p>
          Dies ist eine Visualisierung von einem Word Embedding. Das bedeutet,
          hier werden die Beziehungen zwischen den Worten gezeigt,
          runtergebrochen auf zwei Dimensionen, einer Ebene. In der Mitte steht
          ein Wort, darum herum angeordnet sind die zehn ähnlichsten Wörter
          angeordnet. Je ähnlicher sich die Begriffe sind, desto kürzer sind die
          Distanzen zueinander. Begriffe die sich unähnlich sind, werden visuell
          weiter entfernt voneinander dargestellt. Die Achsen haben hier keine
          Bedeutung. <a href="/hintergrund">Mehr Hintergrund-Informationen.</a>
        </p>
      </div>
    );
  }
}

module.exports = Infokasten;
