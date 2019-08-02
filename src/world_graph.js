import {
  WIDTH,
  HEIGHT,
  ANIMATION_DELAY,
  ANIMATION_EASING,
  ANIMATION_DURATION
} from "./constants";

import Chart from "./chart";

class WorldGraph extends Chart {
  constructor(selector) {
    super(selector);
    this.svg = d3.select(selector);
    this.xAxis();
    this.yAxis([1, 0], "scaleLinear", 20, () => d3.format(".0%"));
    this.getData();
    // this.lines();
    // this.circles();
    // this.percentageLabels();
    // this.labelTop("Happiness Ranking");
    // this.gridLines(this.xScale, "axisBottom");
    // this.gridLines(this.yScale, "axisRight");
  }

  getData() {
    let that = this;
    d3.json("/dist/data/countries.json").then(data => {
      that.setData(data);
      // that.setRadius();
      // that.lines();
      that.circles();
      // that.tooltips();
      // that.percentageLabels();
    });
  }

  circles() {
  ////////////////////////
  // tooltip
  ////////////////////////
  let tooltip = d3
    .select("body")
    .append("div")
    .style("visibility", "hidden")
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("color", "white")
    .style("z-index", "999999999")
    .style("position", "absolute")
    .style("display", "block");

  let showTooltip = function(d) {
    tooltip.transition().duration(200);
    tooltip
      .style("visibility", "visible")
      .html(
        `
  <strong>Country:</strong> ${d.country} (${
          d.continent
        })<br/>
  <strong>Happiness Ranking:</strong> ${d.ranking}
`
      )
      .style("top", d3.event.clientY - 100 + "px")
      .style("left", d3.event.clientX - 160 + "px");
    // .style("top", d3.mouse(d3.event.target)[1] + 80 + "px")
    // .style("left", d3.mouse(d3.event.target)[0] - 40 + "px");
  };

  let moveTooltip = function(d) {
    showTooltip(d);
    console.log("move tooltip");
    tooltip
      // .style("top", d3.mouse(d3.event.target)[1] + 80 + "px")
      // .style("left", d3.mouse(d3.event.target)[0] - 40 + "px")
      .style("top", d3.event.clientY - 100 + "px")
      .style("left", d3.event.clientX - 160 + "px");
  };

  let hideTooltip = function(d) {
    console.log("hide tooltip");
    tooltip
      .transition()
      .duration(200)
      .style("visibility", "hidden");
  };
  ////////////////////////
  // chart rendering
  ////////////////////////
  this.chart
    .selectAll("circle")
    .data(Object.values(this.data))
    .enter()
    .append("circle")
    .attr("class", d => `country ${d.class} continent-${d.continent.split(' ').join('-')} country-bubble`)
    .attr("fill", d => {
      if (d.continent === "Africa") {
        return "#7cbd1e";
      } else if (d.continent === "Asia") {
        return "#ff1f5a";
      } else if (d.continent === "North America") {
        return "#303481";
      } else if (d.continent === "South America") {
        return "#ff5b44";
      } else if (d.continent === "Europe") {
        return "#2fc5cc";
      } else {
        return "red";
      }
    })
    .attr("opacity", ".7")
    .attr("stroke", "#CDCDCD")
    .attr("stroke-width", "2px")
    .attr("cx", d => {
      return this.xScale(d.graphGdp / 156) + 25;
    })
    .on("mouseover", showTooltip)
    .on("mousemove", moveTooltip)
    .on("mouseleave", hideTooltip)
    .transition()
    .delay((d, i) => i * ANIMATION_DELAY)
    .duration(ANIMATION_DURATION)
    .ease(ANIMATION_EASING)
    .attr("r", d => {
      if (d.population > 800000000) {
        return d.population / 25000000;
      } else if (d.population > 50000000) {
        return d.population / 10000000;
      } else if (d.population > 1000000) {
        return d.population / 1500000;
      } else {
        return d.population / 100000;
      }
    })
    .attr("cy", d => {
      return this.yScale(d.graphRanking / 156);
    });

  ////////////////////////
  // legend
  ////////////////////////
  let continents = {
    AFRICA: { continent: "Africa" },
    ASIA: { continent: "Asia" },
    NORTH_AMERICA: { continent: "North America" },
    SOUTH_AMERICA: { continent: "South America" },
    EUROPE: { continent: "Europe" }
  };

  let continentFocusOn = (continentName) => {
    console.log(continentName);
    this.chart
      .selectAll(`circle:not(.continent-${continentName.split(' ').join('-')})`)
      .attr("opacity", "0.1");
    // let matchedCountries = document.querySelectorAll(`circle:not(.continent-${continentName})`);
    // matchedCountries.forEach(country => {
    //   debugger
    //   // country.style("transform", "scale(1.1)");
    //   console.log(country);

    // })
  };

  let continentFocusOff = (continentName) => {
    this.chart
      .selectAll(`circle:not(.continent-${continentName.split(' ').join('-')})`)
      .attr("opacity", "0.7");
  };

  let legend = this.chart
    .selectAll(".legend")
    .data(Object.values(continents))
    .enter()
    .append("g")
    .attr("class", "legend")
    .attr(
      "transform",
      "translate(" + 870 + "," + 480 + ")"
    );

  legend
    .append("rect")
    .attr("x", 0)
    .attr("y", function(d, i) {
      return 20 * i;
    })
    .attr("width", 15)
    .attr("height", 15)
    .style("fill", function(d) {
      if (d.continent === "Africa") {
        return "#7cbd1e";
      } else if (d.continent === "Asia") {
        return "#ff1f5a";
      } else if (d.continent === "North America") {
        return "#303481";
      } else if (d.continent === "South America") {
        return "#ff5b44";
      } else if (d.continent === "Europe") {
        return "#2fc5cc";
      } else {
        return "red";
      }
    })
    .on("mouseover", d => continentFocusOn(d.continent))
    .on("mouseleave", d => continentFocusOff(d.continent));

  legend
    .append("text")
    .attr("x", 25)
    .attr("text-anchor", "start")
    .attr("dy", "1em")
    .attr("class", d => `legend-${d.continent.split(" ").join("-")}`)
    .attr("y", function(d, i) {
      return 20 * i;
    })
    .text(function(d) {
      return d.continent;
    })
    .attr("font-size", "12px")
    .on("mouseover", d => continentFocusOn(d.continent))
    .on("mouseleave", d => continentFocusOff(d.continent));
    

  legend
    .append("text")
    .attr("x", 31)
    .attr("dy", "-.2em")
    .attr("y", -10)
    .text("Continent")
    .attr("font-size", "17px")
    .style("text-align", "left");
  }

  // tooltips() {
  //   let tooltip = this.chart
  //     .append("div")
  //     .style("visibility", "hidden")
  //     .attr("class", "tooltip")
  //     .style("background-color", "black")
  //     .style("border-radius", "5px")
  //     .style("padding", "10px")
  //     .style("color", "white");

  //     let showTooltip = d => {
  //       tooltip
  //         .transition()
  //         .duration(200);
  //       tooltip
  //         .style("opacity", 1)
  //         .html(
  //           `
  //             Country: ${d.country}<br/>
  //             Continent: ${d.continent}<br/>
  //             Happiness Ranking: ${d.ranking}<br/>
  //             Social Support: ${d.socialSupport}<br/>
  //             Freedom: ${d.freedom}<br/>
  //             Generosity: ${d.generosity}<br/>
  //             GDP Per Capita: ${d.gdp}<br/>
  //             Life Expectancy: ${d.lifeExpectancy}<br/>
  //           `
  //         )
  //         .style("left", d3.mouse(this)[0] + 30 + "px")
  //         .style("top", d3.mouse(this)[1] + 30 + "px");
  //     }

  //     let moveTooltip = d => {
  //       tooltip
  //         .style("left", (d3.mouse(this)[0] + 30) + "px")
  //         .style("top", (d3.mouse(this)[1] + 30) + "px")
  //     }

  //     let hideTooltip = d => {
  //       tooltip
  //         .transition()
  //         .duration(200)
  //         .style("opacity", 0)
  //     }

  // }
}

export default WorldGraph;
