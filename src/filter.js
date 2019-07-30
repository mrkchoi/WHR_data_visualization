class Filter {
  constructor() {
    this.filterData();
  }

  filterData() {
    const tooltip = d3
      .select(`.header__tooltip`)
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "1rem");

    d3.selectAll('.city')
      .on('mouseover', (d, i) => {
        let className;
        if (typeof d === 'string') {
          className = `city-${d.split(' ').join('-')}`;
        } else if (d.data) {
          className = d.data.class;
        } else {
          className = d.class;
        }
        const allOtherCityData = document.querySelectorAll(`.city:not(.${className})`);
        allOtherCityData.forEach(data => {
          data.classList.add('filter');
        })

        // tooltip  
        tooltip
          .style("opacity", 1)
          .style("stroke", "black")
          .html(
            `
              <div class="tooltip__inner">
                <p class="tooltip__city"><strong>City: </strong><span>${
                  d.city
                }</span></p>
                <p class="tooltip__detail"><strong>Overall Rank:</strong> <span>${
                  d.ranking
                }</span></p>
                <p class="tooltip__detail"><strong>Total Happiness Score:</strong> <span>${
                  d.happinessScore
                }/100</span></p>
                <p class="tooltip__detail"><strong>Emotional & Physical Well-Being:</strong> <span>${
                  d.emotionalWellbeing
                }</span></p>
                <p class="tooltip__detail"><strong>Income & Employment:</strong> <span>${
                  d.incomeEmployment
                }</span></p>
                <p class="tooltip__detail"><strong>Community & Environment:</strong> <span>${
                  d.communityEnvironment
                }</span></p>
              </div>
            `
          );
        const mainHeader = document.querySelector('.main__header');
        mainHeader.setAttribute('style', `color: ${d.color}` );
      })
      .on('mouseleave', () => {
        const allCityData = document.querySelectorAll('.city');
        allCityData.forEach(data => {
          data.classList.remove('filter');
        })

        const mainHeader = document.querySelector(".main__header");
        mainHeader.setAttribute("style", `color: initial`);
      })
  }
}

export default Filter;