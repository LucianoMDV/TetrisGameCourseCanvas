let canvas;
let ctx;
const FPS = 50;

let anchoCanvas = 400;
let altoCanvas = 640;

let anchoTablero = 10;
let altoTablero = 16;

let anchoF = 40;
let antoF = 40;

//12x17 (10x16)
let tablero = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let pieza;

let objPieza = function () {
  this.x = 0;
  this.y = 0;

  console.log("pieza creada");
};

inicializa();

function inicializarTeclado() {
  document.addEventListener("keydown", (tecla) => {
    // let p = document.createElement("p");
    // p.textContent = `KeyboardEvent: key='${tecla.key}' | code='${tecla.code}'`;

    if (tecla.code === "ArrowUp") {
      //   protagonista.arriba();
      console.log("arriba");
    }

    if (tecla.code === "ArrowDown") {
      //   protagonista.abajo();
      console.log("abajo");
    }

    if (tecla.code === "ArrowLeft") {
      //   protagonista.izquierda();
      console.log("izq");
    }

    if (tecla.code === "ArrowRight") {
      //   protagonista.derecha();
      console.log("der");
    }
  });
}

function inicializa() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");

  canvas.style.setProperty("width", anchoCanvas + "px");
  canvas.style.setProperty("height", altoCanvas + "px");

  pieza = new objPieza();

  inicializarTeclado();

  setInterval(function () {
    principal();
  }, 1000 / FPS);
}

function principal() {
  borraCanvas();
}

function borraCanvas() {
  canvas.width = parseInt(
    window.getComputedStyle(canvas, null).getPropertyValue("width")
  );
  canvas.height = parseInt(
    window.getComputedStyle(canvas, null).getPropertyValue("height")
  );
}
