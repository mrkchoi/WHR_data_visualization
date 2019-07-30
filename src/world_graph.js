import {
  WIDTH, 
  HEIGHT,
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
    this.circles();
    this.percentageLabels();
    this.labelTop("Happiness Ranking");
    this.gridLines(this.xScale, "axisBottom");
    this.gridLines(this.yScale, "axisRight");
  }

  lines() {
    let line = d3
      .line()
      .x(d => this.xScale(d.ethnicity))
      .y(d => this.yScale(d.percentage));

    this.chart
      .selectAll(".line")
      .data(Object.values(this.data))
      .enter()
      .append("path")
      .attr("transform", "translate(25, 5)")
      .attr("class", d => `line city ${d.class}`)
      .attr("d", d => line(d.diversity))
      .style("stroke", d => d.color)
      .style("stroke-width", 2)
      .style("stroke-linecap", "round");
  }

  circles() {
    this.chart
      .selectAll()
      .data(Object.values(this.data))
      .enter()
      .append("g")
      .attr("class", d => `city ${d.class}`)
      .attr("fill", d => d.color)
      .selectAll()
      .data(d => d.diversity)
      .enter()
      .append("circle")
      .attr("cx", d => this.xScale(d.ethnicity) + 25)
      .transition()
      .delay((d, i) => i * ANIMATION_DELAY)
      .duration(ANIMATION_DURATION)
      .ease(ANIMATION_EASING)
      .attr("r", 3)
      .attr("cy", d => this.yScale(d.percentage));
  }

  percentageLabels() {
    this.chart
      .selectAll()
      .data(() => Object.values(this.data))
      .enter()
      .append("g")
      .attr("class", d => `city ${d.class} city-data-toggle`)
      .selectAll(".line-point")
      .data(d => d.diversity)
      .enter()
      .append("text")
      .attr("text-anchor", "middle")
      .text(d => d3.format(".0%")(d.percentage))
      .attr("x", d => this.xScale(d.ethnicity) + 25)
      .attr("y", d => this.yScale(d.percentage) - 10)
      .style("fill", "white");
  }
}

export default WorldGraph;