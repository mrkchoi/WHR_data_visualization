import {
  WIDTH, 
  HEIGHT,
  ANIMATION_DELAY,
  ANIMATION_EASING,
  ANIMATION_DURATION,
} from './constants';

import Chart from './chart';

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
      // that.lines();
      that.circles();
      // that.percentageLabels();
    });
  }
  // lines() {
  //   let line = d3
  //     .line()
  //     .x(d => this.xScale(d.graphRanking))
  //     .y(d => this.yScale(d.graphGdp));
  //   debugger
  //   this.chart
  //     .selectAll(".line")
  //     .data(Object.values(this.data))
  //     .enter()
  //     .append("path")
  //     .attr("transform", "translate(25, 5)")
  //     .attr("class", d => `line city ${d.class}`)
  //     .attr("d", d => line(d.diversity))
  //     .style("stroke", d => d.color)
  //     .style("stroke-width", 2)
  //     .style("stroke-linecap", "round");
  // }

  circles() {
    // debugger;
    this.chart
      .selectAll("circle")
      .data(Object.values(this.data))
      .enter()
      .append("circle")
      // .append("g")
      .attr("class", d => `city ${d.class}`)
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
      // .selectAll()
      // .data(d => d)
      // .enter()
      .attr("cx", d => {
        // return 100;
        return this.xScale(d.graphGdp / 156) + 25;
      })
      .transition()
      .delay((d, i) => i * ANIMATION_DELAY)
      .duration(ANIMATION_DURATION)
      .ease(ANIMATION_EASING)
      .attr("r", d => {
        if (d.population > 100000000) {
          return d.population / 25000000;
        } else if (d.population > 1000000) {
          return d.population / 2500000;
        } else {
          return d.population / 100000;
        }
      })
      .attr("cy", d => {
        // return 100;
        return this.yScale(d.graphRanking / 156);
      });
  }

  // percentageLabels() {
  //   // debugger;

  //   this.chart
  //     .selectAll()
  //     .data(() => Object.values(this.data))
  //     .enter()
  //     .append("g")
  //     .attr("class", d => `city ${d.class} city-data-toggle`)
  //     .selectAll(".line-point")
  //     .data(d => d.diversity)
  //     .enter()
  //     .append("text")
  //     .attr("text-anchor", "middle")
  //     .text(d => d3.format(".0%")(d.percentage))
  //     .attr("x", d => this.xScale(d.ethnicity) + 25)
  //     .attr("y", d => this.yScale(d.percentage) - 10)
  //     .style("fill", "white");
  // }
}

export default WorldGraph;