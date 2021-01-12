class Pieza extends Color {
  constructor(fichaGrafico, ctx, tablero) {
    super();
    this.fichaGrafico = fichaGrafico;
    this.ctx = ctx;
    this.tablero = tablero;
    this.x = 1;
    this.y = 1;

    this.angulo = 0;
    this.tipo = 0;

    this.retraso = 50;
    this.fotograma = 0;

    this.nueva();
  }

  nueva() {
    this.tipo = Math.floor(Math.random() * 7);
    this.y = 0;
    this.x = 4;
  }

  compruebaSiPierde() {
    let pierde = false;
    let tableroCopy;

    let anchoTablero = this.tablero.getColumna;

    for (let px = 1; px < anchoTablero - 1; px++) {
      tableroCopy = this.tablero.getTablero();
      if (tableroCopy[2][px] != 0) {
        // console.table(tableroCopy);
        pierde = true;
        guardarDatos(0);
      }
    }
    // console.log(pierde);
    return pierde;
  }

  limpia() {
    let filaCompleta;
    let tableroCopy;

    let altoTablero = this.tablero.getFila;
    let anchoTablero = this.tablero.getColumna;

    let sumarPuntos = false;
    let puntosDeLinea = cargarDatos();

    for (let py = 0; py < altoTablero - 1; py++) {
      filaCompleta = true;

      for (let px = 1; px < anchoTablero + 1; px++) {
        tableroCopy = this.tablero.getTablero();
        if (tableroCopy[py][px] == 0) {
          filaCompleta = false;
        }
      }
      if (filaCompleta == true) {
        // debugger;
        for (let px = 1; px < anchoTablero - 1; px++) {
          // debugger;

          puntosDeLinea += tableroCopy[py][px];
          tableroCopy[py][px] = 0;
        }
        this.bajarLineas(tableroCopy, py, anchoTablero);
        sumarPuntos = true;
        guardarDatos(puntosDeLinea);
      } else {
        sumarPuntos = false;
      }
    }
    return sumarPuntos;
  }

  bajarLineas(tableroCopy, iniPy, anchoTablero) {
    for (let py = iniPy; py > 0; py--) {
      for (let px = 1; px < anchoTablero + 1; px++) {
        tableroCopy[py][px] = tableroCopy[py - 1][px];
      }
    }
    console.table(tableroCopy);
  }

  caer() {
    if (this.fotograma < this.retraso) {
      this.fotograma++;
    } else {
      let result = this.colision(this.angulo, this.y + 1, this.x);

      if (result == false) {
        this.y++;
        this.fotograma = 0;
      } else {
        this.fijar();
        let sumarPuntos = this.limpia();
        // if (sumarPuntos == true) {
        //   //ACA
        //   let score = document.querySelector('#score');
        //   score.children[0].innerHTML = cargarDatos();
        // }
        this.nueva();
        if (this.compruebaSiPierde(this.tablero) == true) {
          this.tablero.reseteaTablero();
        }
      }
      this.fotograma = 0;
    }
  }

  fijar() {
    let tableroCopy;
    for (let py = 0; py < 4; py++) {
      for (let px = 0; px < 4; px++) {
        if (this.fichaGrafico[this.tipo][this.angulo][py][px] > 0) {
          tableroCopy = this.tablero.getTablero();
          tableroCopy[this.y + py][this.x + px] = this.fichaGrafico[this.tipo][
            this.angulo
          ][py][px];
        }
      }
    }
  }

  colision(anguloNuevo, yNueva, xNuevo) {
    let resultado = false;
    let tableroCopy;
    for (let py = 0; py < 4; py++) {
      for (let px = 0; px < 4; px++) {
        if (this.fichaGrafico[this.tipo][anguloNuevo][py][px]) {
          tableroCopy = this.tablero.getTablero();
          if (tableroCopy[yNueva + py][xNuevo + px] > 0) {
            resultado = true;
          }
        }
      }
    }
    return resultado;
  }

  dibujo(margenSuperior, anchoF, altoF) {
    for (let py = 0; py < 4; py++) {
      for (let px = 0; px < 4; px++) {
        if (this.fichaGrafico[this.tipo][this.angulo][py][px] != 0) {
          if (this.fichaGrafico[this.tipo][this.angulo][py][px] == 1) {
            this.ctx.fillStyle = this.colors.rojo;
          }
          if (this.fichaGrafico[this.tipo][this.angulo][py][px] == 2) {
            this.ctx.fillStyle = this.colors.naranja;
          }
          if (this.fichaGrafico[this.tipo][this.angulo][py][px] == 3) {
            this.ctx.fillStyle = this.colors.amarillo;
          }
          if (this.fichaGrafico[this.tipo][this.angulo][py][px] == 4) {
            this.ctx.fillStyle = this.colors.verde;
          }
          if (this.fichaGrafico[this.tipo][this.angulo][py][px] == 5) {
            this.ctx.fillStyle = this.colors.cyan;
          }
          if (this.fichaGrafico[this.tipo][this.angulo][py][px] == 6) {
            this.ctx.fillStyle = this.colors.azul;
          }
          if (this.fichaGrafico[this.tipo][this.angulo][py][px] == 7) {
            this.ctx.fillStyle = this.colors.morado;
          }
          this.ctx.fillRect(
            (this.x + px - 1) * anchoF,
            (this.y + py - margenSuperior) * altoF,
            anchoF,
            altoF
          );
        }
      }
    }
  }

  rotar() {
    let anguloNuevo = this.angulo;

    if (anguloNuevo < 3) {
      anguloNuevo++;
    } else {
      anguloNuevo = 0;
    }

    if (this.colision(anguloNuevo, this.y, this.x) == false) {
      this.angulo = anguloNuevo;
    }

    // console.log("rotar");
  }

  abajo() {
    if (this.colision(this.angulo, this.y + 1, this.x) == false) {
      this.y++;
      // console.log("abajo");
    }
  }

  derecha() {
    if (this.colision(this.angulo, this.y, this.x + 1) == false) {
      this.x++;
      // console.log("der");
    }
  }

  izquierda() {
    if (this.colision(this.angulo, this.y, this.x - 1) == false) {
      this.x--;
      // console.log("izq");
    }
  }
}

function guardarDatos(valor) {
  // debugger;
  localStorage.setItem("nombre_jugador", valor);
  console.log("guardo datos: " + valor);

  let score = document.querySelector("#score");
  debugger;
  score.children[0].innerHTML = cargarDatos();
}
function cargarDatos() {
  // debugger;
  let valor = parseInt(localStorage.getItem("nombre_jugador"));
  return valor;
}
