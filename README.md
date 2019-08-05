# World Happiness Report (Data Visualization)
Check out the **[live app](https://mrkchoi.github.io/WHR_data_visualization/)**

**World Happiness Report** is an interactive data visualization based off the annual World Happiness Report. Over 1096 data points from 156 countries were aggregated to give an exploratory visual of the state of global happiness.  

This year's World Happiness Report focuses on happiness and the community: how happiness has evolved over the past dozen years, with a focus on the technologies, social norms, conflicts and government policies that have driven those changes.  

This tool allows you to explore the study, customize the statistics, and share the facts.  

Data provided by [World Happiness Report](https://worldhappiness.report/) and [World Population Review](http://worldpopulationreview.com/).   
Visualization created by [Kenneth Choi](https://www.kchoi.io).  

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

## Data Chart (D3.js)

Clean and modular code through use of ES6 classes and inheritance.

```javascript

class Chart {
  constructor(selector, options) {
    this.setChart(selector, options);
    this.setLabels();
  }

  setChart(selector, options = { topOffset: 0, leftOffset: 0 }) {
    // ..
  }

  setData(data) {
    // ..
  }

  xAxis(ticks = 20, tickFormat = () => {}) {
    // ..
  }

  yAxis(domain, yScale, ticks = 5, tickFormat = () => {}) {
    // ..
  }

  setLabels() {
    // ..
  }
}

class WorldGraph extends Chart {
  constructor(selector) {
    super(selector);
    this.svg = d3.select(selector);
    this.xAxis();
    this.yAxis([1, 0], "scaleLinear", 20, () => d3.format(".0%"));
    this.getData("graphGdp");
  }

  getData(metric) {
    let that = this;
    d3.json("dist/data/countries.json").then(data => {
      that.setData(data);
      that.circles(metric);
    });
  }
  // ..
}
```

A parent class, `Chart`, was implemented to initialize the base configuration for the (D3.js) visualization. The rendered data graph was refactored into a child class `WorldGraph`, inheriting from the `Chart` class.


## Data (JSON)

Data was aggregated from multiple sources and formatted into JSON. The JSON file is loaded asynchronously into the D3 visualization.

```
{
  "LUXEMBOURG": {
      "continent": "Europe",
      "country": "Luxembourg",
      "class": "city-Luxembourg",
      "graphRanking": 143,
      "ranking": 14,
      "graphSocialSupport": 130,
      "socialSupport": 27,
      "graphFreedom": 129,
      "freedom": 28,
      "graphGenerosity": 127,
      "generosity": 30,
      "graphGdp": 155,
      "gdp": 2,
      "graphLifeExpectancy": 141,
      "lifeExpectancy": 16,
      "population": 616596
    },
  "UNITED_KINGDOM": {
    // ..
  },
  // ..
}
```


## Future Plans
Some features I plan on implement in the future are:

* the ability for users to view data from previous years' studies
* slicing and filtering data based on additional parameters (e.g. perceptions of corruption)
