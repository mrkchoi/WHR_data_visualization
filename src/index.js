// import _ from 'lodash';

import Filter from './filter';
import WorldGraph from "./world_graph";


let worldGraph;
document.addEventListener("DOMContentLoaded", () => {
   worldGraph = new WorldGraph("svg.graph");
  // new Filter;
  loadChartListener(worldGraph);
});

function loadChartListener() {
  let btnGroup = document.querySelector(".btn-group");
  btnGroup.addEventListener("click", (e) => {
    e.preventDefault();
    let currentBtn = e.target;
    let currentBtnClass = currentBtn.classList[0].split('-')[1];
    console.log(currentBtnClass);
    worldGraph.updateData(currentBtnClass);

  });
};

window.onresize = () => {
  worldGraph.redraw("svg.graph");
  console.log('resized!');
};