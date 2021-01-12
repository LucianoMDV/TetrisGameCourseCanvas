let canvas;
let ctx;
const FPS = 50;

let anchoCanvas = 400;
let altoCanvas = 640;

let anchoTablero = 12;
let altoTablero = 21;
let margenSuperior = 4;

let anchoF = 40;
let altoF = 40;

let tablero = new Tablero(altoTablero, anchoTablero);

let rojo = "#FF0000";
let morado = "#800080";
let naranja = "#FF8C00";
let amarillo = "#FFD700";
let verde = "#008000";
let cyan = "#00CED1";
let azul = "#0000CD";

const cubo = new Cubo();
const rectangulo = new Rectangulo();
const figuraL = new FiguraL();
const figuraL2 = new FiguraL2();
const figuraS2 = new FiguraS2();
const figuraT = new FiguraT();
const figuraS = new FiguraS();

// console.table( cubo.getforma);
console.table(rectangulo.getforma);

let fichaGrafico = [
  cubo.getforma,
  rectangulo.getforma,
  figuraL.getforma,
  figuraL2.getforma,
  figuraS2.getforma,
  figuraT.getforma,
  figuraS.getforma,
];

let pieza;

inicializa();

function inicializa() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");

  canvas.style.setProperty("width", anchoCanvas + "px");
  canvas.style.setProperty("height", altoCanvas + "px");

  pieza = new Pieza();

  inicializarTeclado();

  setInterval(function () {
    principal();
  }, 1000 / FPS);
}

function principal() {
  borraCanvas();
  tablero.dibujaTablero();
  pieza.caer();
  pieza.dibujo();
}

function inicializarTeclado() {
  document.addEventListener("keydown", (tecla) => {
    // let p = document.createElement("p");
    // p.textContent = `KeyboardEvent: key='${tecla.key}' | code='${tecla.code}'`;

    if (tecla.code === "ArrowUp") {
      pieza.rotar();
    }

    if (tecla.code === "ArrowDown") {
      pieza.abajo();
    }

    if (tecla.code === "ArrowLeft") {
      pieza.izquierda();
    }

    if (tecla.code === "ArrowRight") {
      pieza.derecha();
    }
  });
}

function borraCanvas() {
  canvas.width = parseInt(
    window.getComputedStyle(canvas, null).getPropertyValue("width")
  );
  canvas.height = parseInt(
    window.getComputedStyle(canvas, null).getPropertyValue("height")
  );
}
