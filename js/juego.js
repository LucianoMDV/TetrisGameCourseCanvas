window.onload = function () {
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

  let tablero;
  let pieza;

  let sonido2 = new Howl({
    src: ["sound/efecto2.wav"],
    volume: 0.3,
    loop: false,
  });

  inicializa();

  function inicializa() {
    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");

    canvas.style.setProperty("width", anchoCanvas + "px");
    canvas.style.setProperty("height", altoCanvas + "px");

    tablero = new Tablero(altoTablero, anchoTablero, ctx);

    const cubo = new Cubo();
    const rectangulo = new Rectangulo();
    const figuraL = new FiguraL();
    const figuraL2 = new FiguraL2();
    const figuraS2 = new FiguraS2();
    const figuraT = new FiguraT();
    const figuraS = new FiguraS();

    let fichaGrafico = [
      cubo.getforma,
      rectangulo.getforma,
      figuraL.getforma,
      figuraL2.getforma,
      figuraS2.getforma,
      figuraT.getforma,
      figuraS.getforma,
    ];

    pieza = new Pieza(fichaGrafico, ctx, tablero);

    inicializarTeclado();

    setInterval(function () {
      principal();
    }, 1000 / FPS);
  }

  function principal() {
    borraCanvas();
    tablero.dibujaTablero(margenSuperior, anchoF, altoF);
    pieza.caer();
    pieza.dibujo(margenSuperior, anchoF, altoF);
  }

  function inicializarTeclado() {
    let sueltaTecla = true;
    document.addEventListener("keyup", (tecla) => {
      if (tecla.code === "ArrowUp") {
        sueltaTecla = true;
      }
      if (tecla.code === "ArrowDown") {
        sueltaTecla = true;
      }
      if (tecla.code === "ArrowLeft") {
        sueltaTecla = true;
      }
      if (tecla.code === "ArrowRight") {
        sueltaTecla = true;
      }
    });
    document.addEventListener("keydown", function apretarTecla(tecla) {
      // let p = document.createElement("p");
      // p.textContent = `KeyboardEvent: key='${tecla.key}' | code='${tecla.code}'`;
      if (sueltaTecla == true) {
        if (tecla.code === "ArrowUp") {
          pieza.rotar();
          sonido2.play();
          sueltaTecla = false;
        }

        if (tecla.code === "ArrowDown") {
          pieza.abajo();
          sonido2.play();
          sueltaTecla = false;
        }
        
        if (tecla.code === "ArrowLeft") {
          pieza.izquierda();
          sonido2.play();
          sueltaTecla = false;
        }
        
        if (tecla.code === "ArrowRight") {
          pieza.derecha();
          sonido2.play();
          sueltaTecla = false;
        }
      }
    });
    
    document.querySelector('#rotar').addEventListener('click', (tecla) =>{
      pieza.rotar();
      sonido2.play();
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
};
