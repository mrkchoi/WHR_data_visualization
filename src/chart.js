import {
  HEIGHT,
  MARGINS,
  WIDTH,
  ANIMATION_DURATION,
  ANIMATION_DELAY,
  ANIMATION_EASING,
  CITIES
} from './constants';

class Chart {
  constructor(selector, options) {
    this.setChart(selector, options);
    this.setData();
  }

  setChart(selector, options = { topOffset: 0, leftOffset: 0 }) {
    const svg = d3.select(selector)
      .attr('height', HEIGHT + MARGINS * 2)
      .attr('width', WIDTH + MARGINS * 2)
    this.chart = svg.append('g')
      .attr('transform', `translate(${MARGINS + options.leftOffset}, ${MARGINS / 2 + options.topOffset})`);
  }

  setData() {
    this.data = CITIES;
  }

  xAxis(domain, xScale, ticks = 5, tockFormat = () => {}) {
    this.xScale = d3[xScale]()
      .domain(domain)
      .range([0, WIDTH])

    this.chart
      .append('g')
      .call(axisBottom(this.xScale))
        .ticks(ticks)
        .tickFormat(tickFormat())
      .attr('transform', `translate(0, ${HEIGHT})`);
  }

  yAxis(domain, yScale, ticks = 5, tickFormat = () => {}) {
    if (yScale === 'scaleBand') {
      this.yScale = d3[yScale]()
        .domain(domain)
        .range([0, WIDTH])
        .padding(0.8)
    } else {
      this.yScale = d3[yScale]()
        .domain(domain)
        .range([0, WIDTH])
    }
    
    this.chart
      .append('g')
      .call(
        d3.axisLeft(this.yScale)
          .ticks(ticks)
          .tickFormat(tickFormat())
      )
  }

  gridLines(scale, position, ticks = 5) {
    this.chart.append('g')
      .attr('class', 'grid')
      .call(d3[position])()
        .scale(scale)
        .tickSize(WIDTH, 0, 0)
        .tickFormat('')
        .ticks(ticks);
  }

  rectangleLabels(text) {
    this.chart
      .selectAll()
      .data(this.sortedData)
      .enter()
      .append('text')
      .attr('class', d => `city ${d.class} bar-label city-data-toggle`)
      .attr('x', 5)
      .attr('y', d => this.yScale(d.city) - 2)
      .style('fill', '#fff')
      .text((d, i) => {
        if (typeof text === 'string') {
          return d[text];
        } else {
          return text.call(d, i)
        }
      })
      .style('opacity', 0);
  }

  labelTop(text) {
    this.chart
      .append('text')
      .attr('class', 'label-text')
      .attr('text-anchor', 'middle')
      .attr('x', WIDTH / 2)
      .attr('y', -20)
      .text(text);
  }
}

export default Chart;
