// import _ from 'lodash';

import Filter from './filter';
import WorldGraph from "./world_graph";


let worldGraph;
document.addEventListener("DOMContentLoaded", () => {
   worldGraph = new WorldGraph("svg.graph");
  // new Filter;
});

window.onresize = () => {
  worldGraph.redraw("svg.graph");
  console.log('resized!');
};