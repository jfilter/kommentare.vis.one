const React = require("react");

class Infokasten extends React.PureComponent {
  render() {
    return (
      <div className="infokasten">
        <h3>Strukturen abbilden</h3>
        <p>
          Dies ist eine Visualisierung von einem Word Embedding. Das bedeutet,
          hier werden die Beziehungen zwischen den Worten
          gezeigt,runtergebrochen auf zwei Dimensionen. In der Mitte steht ein
          Wort, darum herum angeordnet sind die zehn ähnlichsten Wörter
          angeordnet. Je ähnlicher sich die Begriffe sind, desto kürzer sind die
          Distanzen zueinander. Begriffe die sich unähnlich sind, werden visuell
          weiter entfernt voneinander dargestellt. Die Achsen haben hier keine
          Bedeutung. [Hier erklären wir, wie genau es eine Ebene abgebildet
          werden kann.](/hintergrund/#todo)
        </p>
      </div>
    );
  }
}

module.exports = Infokasten;
