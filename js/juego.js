let canvas;
let ctx;
const FPS = 50;

let anchoCanvas = 400;
let altoCanvas = 640;

let anchoTablero = 10;
let altoTablero = 20;
let margenSuperior = 4;

let anchoF = 40;
let altoF = 40;

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
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let rojo = '#FF0000';
let morado = '#800080';
let naranja = '#FF8C00';
let amarillo = '#FFD700';
let verde = '#008000';
let cyan = '#00CED1';
let azul = '#0000CD';

let fichaGrafico = [
  [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
  ],
  [
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
    ],
  ],
  [
    [
      [0, 0, 0, 0],
      [0, 0, 3, 3],
      [0, 3, 3, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 3, 0],
      [0, 0, 3, 3],
      [0, 0, 0, 3],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 3, 3],
      [0, 3, 3, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 3, 0],
      [0, 0, 3, 3],
      [0, 0, 0, 3],
      [0, 0, 0, 0],
    ],
  ],
  [
    [
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [0, 0, 4, 4],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 4],
      [0, 0, 4, 4],
      [0, 0, 4, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [0, 0, 4, 4],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 4],
      [0, 0, 4, 4],
      [0, 0, 4, 0],
      [0, 0, 0, 0],
    ],
  ],
  [
    [
      [0, 0, 0, 0],
      [0, 5, 5, 5],
      [0, 5, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 5, 5],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 5],
      [0, 5, 5, 5],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 5, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 0, 0],
    ],
  ],
  [
    [
      [0, 0, 0, 0],
      [0, 6, 6, 6],
      [0, 0, 0, 6],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 6, 6],
      [0, 0, 6, 0],
      [0, 0, 6, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 6, 0, 0],
      [0, 6, 6, 6],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 6, 0],
      [0, 0, 6, 0],
      [0, 6, 6, 0],
      [0, 0, 0, 0],
    ],
  ],
  [
    [
      [0, 0, 0, 0],
      [0, 7, 7, 7],
      [0, 0, 7, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 7, 0],
      [0, 0, 7, 7],
      [0, 0, 7, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 7, 0],
      [0, 7, 7, 7],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 7, 0],
      [0, 7, 7, 0],
      [0, 0, 7, 0],
      [0, 0, 0, 0],
    ],
  ],
];

let pieza;

let objPieza = function () {
  this.x = 1;
  this.y = 1;

  this.angulo = 0;
  this.tipo = 6;

  this.dibujo = function () {
      for (let py = 0; py < 4; py++) {
          for (let px = 0; px < 4; px++) {
              if (fichaGrafico[this.tipo][this.angulo][py][px] != 0) {
                
                if(fichaGrafico[this.tipo][this.angulo][py][px] == 1 ) {
                    ctx.fillStyle = rojo;
                }
                if(fichaGrafico[this.tipo][this.angulo][py][px] == 2 ) {
                    ctx.fillStyle = naranja;
                }
                if(fichaGrafico[this.tipo][this.angulo][py][px] == 3 ) {
                    ctx.fillStyle = amarillo;
                }
                if(fichaGrafico[this.tipo][this.angulo][py][px] == 4 ) {
                    ctx.fillStyle = verde;
                }
                if(fichaGrafico[this.tipo][this.angulo][py][px] == 5 ) {
                    ctx.fillStyle = cyan;
                }
                if(fichaGrafico[this.tipo][this.angulo][py][px] == 6 ) {
                    ctx.fillStyle = azul;
                }
                if(fichaGrafico[this.tipo][this.angulo][py][px] == 7 ) {
                    ctx.fillStyle = morado;
                }
                  ctx.fillRect((this.x + px)*anchoF, (this.y + py)*altoF, anchoF, altoF);
                
              }
          }
      }
  };

  //   console.log("pieza creada");

  this.rotar = function () {
    console.log("rotar");
  };
  this.abajo = function () {
    console.log("abajo");
  };
  this.derecha = function () {
    console.log("der");
  };
  this.izquierda = function () {
    console.log("izq");
  };
};

inicializa();


function dibujaTablero() {
    for (let py = margenSuperior; py < altoTablero; py++) {
        for (let px = 1; px < anchoTablero; px++) {
            if (tablero[py][px] != 0) {
              
              if(tablero[py][px] == 1 ) {
                  ctx.fillStyle = rojo;
              }
              if(tablero[py][px] == 2 ) {
                  ctx.fillStyle = naranja;
              }
              if(tablero[py][px] == 3 ) {
                  ctx.fillStyle = amarillo;
              }
              if(tablero[py][px] == 4 ) {
                  ctx.fillStyle = verde;
              }
              if(tablero[py][px] == 5 ) {
                  ctx.fillStyle = cyan;
              }
              if(tablero[py][px] == 6 ) {
                  ctx.fillStyle = azul;
              }
              if(tablero[py][px] == 7 ) {
                  ctx.fillStyle = morado;
              }
                ctx.fillRect( (px-1)*anchoF, (py-margenSuperior)*altoF, anchoF, altoF);
              
            }
        }
    }
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
  dibujaTablero();
  pieza.dibujo();
}

function borraCanvas() {
  canvas.width = parseInt(
    window.getComputedStyle(canvas, null).getPropertyValue("width")
  );
  canvas.height = parseInt(
    window.getComputedStyle(canvas, null).getPropertyValue("height")
  );
}
