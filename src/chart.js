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
    this.getData();
    this.setLabels();
    this.data = null;
  }

  setChart(selector, options = { topOffset: 0, leftOffset: 0 }) {
    const svg = d3
      .select(selector)
      .attr("height", HEIGHT + MARGINS * 2)
      .attr("width", WIDTH + MARGINS * 2);
    this.chart = svg
      .append("g")
      .attr(
        "transform",
        `translate(${MARGINS + options.leftOffset}, ${MARGINS / 2 +
          options.topOffset})`
      );
  }

  getData() {
    // this.data = CITIES;
    let that = this;
    d3.json("/dist/data/countries.json").then(data => {
      that.setData(data);
    });
  }

  setData(data) {
    this.data = data;
  }

  xAxis(ticks = 20, tickFormat = () => {}) {
    this.xScale = d3
      .scaleLinear()
      .range([0, WIDTH])
      .domain([0, 1]);
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
      .attr("y", HEIGHT + 50)
      .attr("x", WIDTH / 2)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .text("GDP Per Capita ($)");
    var yLabel = this.chart
      .append("g")
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -65)
      .attr("x", -350)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .text("Life Expectancy (Years)");
  }

  gridLines(scale, position, ticks = 5) {
    this.chart
      .append("g")
      .attr("class", "grid")
      .call(d3[position])()
      .scale(scale)
      .tickSize(WIDTH, 0, 0)
      .tickFormat("")
      .ticks(ticks);
  }

  rectangleLabels(text) {
    this.chart
      .selectAll()
      .data(this.sortedData)
      .enter()
      .append("text")
      .attr("class", d => `city ${d.class} bar-label city-data-toggle`)
      .attr("x", 5)
      .attr("y", d => this.yScale(d.city) - 2)
      .style("fill", "#fff")
      .text((d, i) => {
        if (typeof text === "string") {
          return d[text];
        } else {
          return text.call(d, i);
        }
      })
      .style("opacity", 0);
  }

  labelTop(text) {
    this.chart
      .append("text")
      .attr("class", "label-text")
      .attr("text-anchor", "middle")
      .attr("x", WIDTH / 2)
      .attr("y", -20)
      .text(text);
  }
}

export default Chart;
