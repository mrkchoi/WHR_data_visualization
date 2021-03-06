import {
  HEIGHT,
  MARGINS,
  WIDTH,
  ANIMATION_DURATION,
  ANIMATION_DELAY,
  ANIMATION_EASING
} from "./constants";

class Chart {
  constructor(selector, options) {
    this.setChart(selector, options);
    this.setLabels();
  }

  setChart(selector, options = { topOffset: 0, leftOffset: 0 }) {
    const svg = d3
      .select(selector)
      .attr("height", HEIGHT + MARGINS * 2)
      .attr("width", WIDTH + MARGINS * 2);
    this.chart = svg
      .append("g")
      .attr("position", "relative")
      .attr("class", "main__svg")
      .attr(
        "transform",
        `translate(${MARGINS + options.leftOffset}, ${MARGINS / 2 +
          options.topOffset})`
      );
  }

  setData(data) {
    this.data = data;
  }

  xAxis(ticks = 20, tickFormat = () => {}) {
    this.xScale = d3
      .scaleLinear()
      .range([0, WIDTH])
      // .domain([0, 1]);
    let xAxisCall = d3
      .axisBottom(this.xScale)
      .ticks(ticks)
      .tickFormat(d3.format(".0%"));
    this.chart
      .append("g")
      .attr("transform", `translate(0, ${HEIGHT})`)
      .call(xAxisCall);
  }

  yAxis(domain, yScale, ticks = 5, tickFormat = () => {}) {
    if (yScale === "scaleBand") {
      this.yScale = d3[yScale]()
        .domain(domain)
        .range([0, HEIGHT])
        .padding(0.8);
    } else {
      this.yScale = d3[yScale]()
        .domain(domain)
        .range([0, HEIGHT]);
    }

    this.chart.append("g").call(
      d3
        .axisLeft(this.yScale)
        .ticks(ticks)
        .tickFormat(tickFormat())
    );
  }

  setLabels() {
    // Labels
    var xLabel = this.chart
      .append("g")
      .append("text")
      .attr("class", "x-axis-label")
      .attr("y", HEIGHT + 50)
      .attr("x", WIDTH / 2)
      .attr("font-size", "18px")
      .attr("font-weight", "600")
      .attr("text-anchor", "middle")
      .text("GDP Per Capita ($)");
    var yLabel = this.chart
      .append("g")
      .attr("class", "yAxisGroup")
      .append("text")
      .attr("transform", "rotate(-90)")
      // .attr("position", 'relative')
      .attr("x", -(HEIGHT / 2))
      .attr("y", -50)
      .attr("font-size", "18px")
      .attr("font-weight", "600")
      .attr("text-anchor", "middle")
      .text("Happiness Index (%)");
  }
}

export default Chart;
