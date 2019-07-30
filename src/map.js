import {
  ANIMATION_EASING,
  ANIMATION_DURATION,
} from './constants';

import Chart from './chart';

class Map extends Chart {
  constructor(selector) {
    super(selector);
    this.svg = d3.select(selector);
    this.circle();
    this.cityLabel();
    this.ranking();
    this.pointer();
  }

  circle() {
    this.svg
      .selectAll()
      .data(Object.values(this.data))
      .enter()
      .append("circle")
      .attr("r", 10)
      .style("fill", d => d.color)
      .attr("class", d => `city ${d.class} city-pinpoint`)
      .transition()
      .ease(ANIMATION_EASING)
      .duration(ANIMATION_DURATION)
      .attr("cy", d => d.position.y)
      .attr("cx", d => d.position.x)
      .style("z-index", 100)
      .style("cursor", "pointer");
  }

  cityLabel() {
    this.svg
      .selectAll("text")
      .data(Object.values(this.data))
      .enter()
      .append("text")
      .attr("opacity", 0)
      .attr("class", d => `map-city-label city ${d.class}`)
      .text(d => d.city)
      .style("font-size", 14)
      .style("stroke-width", 3)
      .style("fill", d => d.color)
      .transition()
      .ease(ANIMATION_EASING)
      .duration(ANIMATION_DURATION / 1.5)
      .attr("opacity", 1)
      .attr("x", d => {
        if (d.city === "San Francisco") {
          return d.position.x - 110;
        } else if (d.city === "San Jose") {
          return d.position.x - 78;
        } else if (d.city === "Huntington Beach") {
          return d.position.x - 140;
        } else if (d.city === 'San Diego') {
          return d.position.x - 85;
        } else if (d.city === 'Bismarck') {
          return d.position.x - 85;
        } else if (d.city === 'Plano') {
          return d.position.x - 55;
        } else if (d.city === 'Sioux Falls') {
          return d.position.x - 90;
        } else if (d.city === 'Glendale') {
          return d.position.x - 75;
        }
        return d.position.x + 15;
      })
      .attr("y", d => d.position.y + 5)
      .style("z-index", 100);
  }

  ranking() {
    this.svg
      .selectAll(".ranking")
      .data(Object.values(this.data))
      .enter()
      .append("text")
      .text(d => d.ranking)
      .style("fill", "white")
      .style("font-size", 12)
      .style("font-weight", 700)
      .attr("class", d => `city ${d.class} city-pinpoint`)
      .transition()
      .ease(ANIMATION_EASING)
      .duration(ANIMATION_DURATION)
      .attr("y", d => d.position.y + 4)
      .attr("x", d => d.position.x)
      .style("text-anchor", "middle")
      .style('z-index', 100);
  }

  pointer() {}
}

export default Map;