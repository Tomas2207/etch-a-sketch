const body = document.querySelector(".all-container");

let gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "container");

body.appendChild(gridContainer);

let currentClass = "black";
let newClass = "blue";
let isMouseDown = false;

// Slider

let slider = document.getElementById("slider");
let output = document.getElementById("output");
output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function () {
  output.innerHTML = this.value + " x " + this.value;
  Tiles = slider.value;
  reset(gridContainer);
};
//

let Tiles = slider.value;

body.addEventListener("mousedown", () => {
  isMouseDown = true;
});
body.addEventListener("mouseup", () => {
  isMouseDown = false;
});

let drawGrid = function (container) {
  for (let x = 0; x < Tiles; x++) {
    let rowContainer = document.createElement("div");
    container.appendChild(rowContainer);
    rowContainer.classList.add("row-container");
    for (let i = 0; i < Tiles; i++) {
      let row = document.createElement("div");
      rowContainer.appendChild(row);
      row.classList.add("row");
      row.addEventListener("mousedown", () => {
        isMouseDown = true;
        row.setAttribute("draggable", false);
      });
      row.addEventListener("mouseup", () => {
        isMouseDown = false;
      });
      row.addEventListener("mousemove", () => {
        if (isMouseDown) {
          classCheck(row);
        }
      });
    }
  }
};

drawGrid(gridContainer);

const changeTiles = document.querySelector("#change-tiles");
const resetGrid = document.querySelector("#reset");
const redColor = document.querySelector("#one");
const greenColor = document.querySelector("#two");
const blueColor = document.querySelector("#three");
const blackColor = document.querySelector("#default");
const eraser = document.querySelector("#four");

// changeTiles.addEventListener("click", () => {
//   Tiles = +prompt("How many tiles you want?");
//   while (Tiles > 100) {
//     alert("it has to be less than 100");
//     Tiles = +prompt("How many tiles you want?");
//   }
//   reset(gridContainer);
// });

resetGrid.addEventListener("click", () => {
  reset(gridContainer);
});

let saveTiles;

redColor.addEventListener("click", () => {
  currentClass = "red";
  saveTiles = Tiles;
  Tiles = 0;
  drawGrid(gridContainer);
  Tiles = saveTiles;
});
blueColor.addEventListener("click", () => {
  currentClass = "blue";
  saveTiles = Tiles;
  Tiles = 0;
  drawGrid(gridContainer);
  Tiles = saveTiles;
});
greenColor.addEventListener("click", () => {
  currentClass = "green";
  saveTiles = Tiles;
  Tiles = 0;
  drawGrid(gridContainer);
  Tiles = saveTiles;
});
blackColor.addEventListener("click", () => {
  currentClass = "black";
  saveTiles = Tiles;
  Tiles = 0;
  drawGrid(gridContainer);
  Tiles = saveTiles;
});
eraser.addEventListener("click", () => {
  currentClass = "white";
  saveTiles = Tiles;
  Tiles = 0;
  drawGrid(gridContainer);
  Tiles = saveTiles;
});

reset = function (container) {
  gridContainer = document.createElement("div");
  gridContainer.setAttribute("id", "container");
  body.replaceChild(gridContainer, container);

  drawGrid(gridContainer);
};

let classCheck = function (element) {
  if (element.classList.contains("blue")) {
    element.classList.remove("blue");
  }
  if (element.classList.contains("green")) {
    element.classList.remove("green");
  }
  if (element.classList.contains("white")) {
    element.classList.remove("white");
  }
  if (element.classList.contains("black")) {
    element.classList.remove("black");
  }
  element.classList.add(currentClass);
};
