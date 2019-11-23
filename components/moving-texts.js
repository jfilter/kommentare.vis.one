const D3Component = require("idyll-d3-component");
const d3 = require("d3");

class MovingTexts extends D3Component {
  initialize(divNode, props) {
    const width = d3
      .select(".article-header")
      .node()
      .getBoundingClientRect().width;

    const height = d3
      .select(".article-header")
      .node()
      .getBoundingClientRect().height;

    const svg = d3
      .select(".article-header")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    let tokens = [...Array(1000).keys()];

    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open(
      "GET",
      "https://ptf-vecs.app.vis.one/token_random/german_comments_2010_2019_100k?n=1000",
      false
    );
    req.onload = function() {
      var jsonResponse = JSON.parse(req.responseText);
      tokens = jsonResponse.tokens;
    };
    req.send(null);

    const nodes = tokens.map(x => {
      return { id: x, x: width / 2, y: height / 2 };
    });

    nodes.forEach(function(d) {
      d.cx = d.x;
      d.cy = d.y;
    });

    // Initialize the nodes
    const node = svg
      .append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g");

    // Text to nodes
    const texts = node
      .append("text")
      .text(d => d.id)
      .attr("text-anchor", "middle")
      .style("font-size", "10px")
      .style("fill", "white")
      .attr("cx", function(d) {
        return d.cx;
      })
      .attr("cy", function(d) {
        return d.cy;
      });

    var simulation = d3
      .forceSimulation(nodes)
      .force("charge", d3.forceManyBody())
      // .force("charge", d3.forceCollide().radius(10))
      .force("r", d3.forceRadial(width / 3, width / 2, height / 2))
      .alpha(0.1)
      .alphaDecay(0)
      .tick(100);

    simulation.on("tick", () => {
      node
        .select("text")
        .attr("x", d => d.x)
        .attr("y", d => d.y);
    });

    setInterval(() => {
      simulation = simulation.force(
        "r",
        d3.forceRadial(width / (3 - Math.random()), width / 2, height / 2)
      );
    }, 3000);

    return svg;
  }
}

module.exports = MovingTexts;
