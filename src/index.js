import WorldGraph from "./world_graph";


let worldGraph;
document.addEventListener("DOMContentLoaded", () => {
  worldGraph = new WorldGraph("svg.graph");

  let btnGroup = document.querySelector(".btn-group");
  btnGroup.addEventListener("mousedown", e => {
    e.preventDefault();
    let currentBtn = e.target;
    let currentBtnClass = currentBtn.classList[0].split("-")[1];
    console.log(currentBtnClass);
    worldGraph.updateData(currentBtnClass);
  });
});

window.onresize = () => {
  worldGraph.redraw("svg.graph");
  console.log('resized!');
};