const D3Component = require("idyll-d3-component");
const d3 = require("d3");

class MovingTexts extends D3Component {
  initialize(divNode, props) {
    const width = d3.select(".article-header").node().getBoundingClientRect()
      .width;

    const height = d3.select(".article-header").node().getBoundingClientRect()
      .height;

    const simHeight = width > 768 ? height / 2 : window.innerHeight / 3;

    const svg = d3
      .select(".article-header")
      .append("svg")
      .lower()
      .attr("width", width)
      .attr("height", height);

    const windowWidth = window.innerWidth;
    let numTexts = 50;
    if (windowWidth > 768) numTexts = 100;
    if (windowWidth > 992) numTexts = 150;
    if (windowWidth > 1200) numTexts = 200;
    if (windowWidth > 1600) numTexts = 500;

    let tokens = [...Array(numTexts).keys()];

    d3.json(
      "https://kommentare.vis.one/vectors/token_random/german_comments_2010_2019_100k?n=" +
        numTexts
    ).then((jsonResponse) => {
      tokens = jsonResponse.tokens;
      let nodes = tokens.map((x) => {
        return { name: x, id: x, x: width / 2, y: simHeight };
      });

      nodes.forEach(function (d) {
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
        .text((d) => d.id)
        .attr("text-anchor", "middle")
        .style("font-size", "10px")
        .style("fill", "white")
        .attr("cx", function (d) {
          return d.cx;
        })
        .attr("cy", function (d) {
          return d.cy;
        });

      let simulation = d3
        .forceSimulation(nodes)
        .force("charge", d3.forceManyBody())
        .force("r", d3.forceRadial(width / 3, width / 2, simHeight))
        .alpha(0.1)
        .alphaDecay(0)
        .tick(100);

      simulation.on("tick", () => {
        node
          .select("text")
          .attr("x", (d) => d.x)
          .attr("y", (d) => d.y);
      });

      const removeLast = (_, i) => i < Math.floor(nodes.length * 0.95);

      setInterval(() => {
        nodes = nodes.filter(removeLast);
        node
          .data(nodes)
          .exit()
          .style("opacity", 1)
          .transition(d3.transition().duration(2000))
          .style("opacity", 0)
          .remove();
        simulation = simulation.nodes(nodes);
      }, 2200);

      setInterval(() => {
        simulation = simulation.force(
          "r",
          d3.forceRadial(width / (3 - Math.random()), width / 2, simHeight)
        );
      }, 5000);

      return svg;
    });
  }
}

module.exports = MovingTexts;
