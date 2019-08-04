# World Happiness Report (Data Visualization)
Check out the **[live app](https://mrkchoi.github.io/WHR_data_visualization/)**

World Happiness Report is an interactive data visualization based off the annual World Happiness Report. Over 1096 data points from 156 countries were aggregated to give an exploratory visual of the state of global happiness in 2019.  

This year's World Happiness Report focuses on happiness and the community: how happiness has evolved over the past dozen years, with a focus on the technologies, social norms, conflicts and government policies that have driven those changes.  

This tool allows you to explore the study, customize the statistics, and share the facts.  

Data provided by World Happiness Report and World Population Review . 
Visualization created by Kenneth Choi . 

## Technologies
* D3.js
* JavaScript (ES6)
* Webpack
* Babel
* HTML5
* CSS3

## Screenshots

## Features
* Users can interact with the individual data points to see further data on each country
* Users can develop correlation hypotheses on GDP, social support, generosity, freedom, life expectancy and population
* Users can filter data by both continent and metrics from individual countries

## Chart
```
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
      .attr(
        "transform",
        `translate(${MARGINS + options.leftOffset}, ${MARGINS / 2 +
          options.topOffset})`
      );
  }

  setData(data) {
    this.data = data;
  }

  // redraw(selector, options = { topOffset: 0, leftOffset: 0 }) {
  //   const svg = d3
  //     .select(selector)
  //     .attr("height", HEIGHT + MARGINS * 2)
  //     .attr("width", WIDTH + MARGINS * 2);
  //   this.chart = svg
  //     .append("g")
  //     .attr("position", "relative")
  //     .attr(
  //       "transform",
  //       `translate(${MARGINS + options.leftOffset}, ${MARGINS / 2 +
  //         options.topOffset})`
  //     );
  // }

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

```
## Map

## Future Plans
Some features I plan on implement in the future are:

* the ability for users to view data from previous years' studies
* slicing and filtering data based on additional parameters (e.g. perceptions of corruption)
