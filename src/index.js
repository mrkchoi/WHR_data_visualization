import WorldGraph from "./world_graph";

let worldGraph;
document.addEventListener("DOMContentLoaded", () => {
  // initialize data visualzation
  worldGraph = new WorldGraph("svg.graph");

  // button group event listener
  let btnGroup = document.querySelector(".btn-group");
  btnGroup.addEventListener("mousedown", e => {
    e.preventDefault();
    let currentBtn = e.target;
    let currentBtnType = currentBtn.classList[1];
    let currentBtnClass;
    if (currentBtnType === "header-graph__btn") {
      currentBtnClass = currentBtn.classList[0].split("-")[1];
    }

    if (currentBtnType === "header-graph__btn") {
      worldGraph.updateData(currentBtnClass);
      let allBtns = btnGroup.querySelectorAll("a");
      allBtns.forEach(btn => {
        btn.classList.remove("active");
      });
      currentBtn.classList.add("active");
    }
  });

  // modal actions
  const modalBg = document.querySelector('.modal-bg');
  modalBg.addEventListener('click', handleModalBgClick);
});

// modal close 
function handleModalBgClick(e) {
  e.stopPropagation();
  let modalBg = document.querySelector(".modal-bg");
  let modal = document.querySelector('.modal');

  if (
    e.target.classList[0] === "modal-bg" ||
    e.target.classList[0] === "modal-close__btn-single" ) {
    modal.setAttribute("style", "opacity: 0; visibility: hidden");
    modalBg.setAttribute("style", "opacity: 0; visibility: hidden");
  }  
}
