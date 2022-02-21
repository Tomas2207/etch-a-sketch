const body = document.querySelector("body");

let gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "container");

body.appendChild(gridContainer);

let Tiles = 16;
let currentClass = "blue";
let newClass = "blue";

let drawGrid = function (container) {
  for (let x = 0; x < Tiles; x++) {
    let rowContainer = document.createElement("div");
    container.appendChild(rowContainer);
    rowContainer.classList.add("row-container");
    for (let i = 0; i < Tiles; i++) {
      let row = document.createElement("div");
      rowContainer.appendChild(row);
      row.classList.add("row");
      row.addEventListener("mouseover", () => {
        if (row.classList.contains("blue")) {
          row.classList.remove("blue");
        }
        if (row.classList.contains("green")) {
          row.classList.remove("green");
        }
        if (row.classList.contains("white")) {
          row.classList.remove("white");
        }
        row.classList.add(currentClass);
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
const eraser = document.querySelector("#four");

changeTiles.addEventListener("click", () => {
  Tiles = +prompt("How many tiles you want?");
  while (Tiles > 100) {
    alert("it has to be less than 100");
    Tiles = +prompt("How many tiles you want?");
  }
  reset(gridContainer);
});

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
