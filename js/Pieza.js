class Pieza {
  constructor() {
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
    for (let px = 1; px < anchoTablero - 1; px++) {
      tableroCopy = tablero.getTablero();
      if (tableroCopy[2][px] != 0) {
        console.table(tableroCopy);
        pierde = true;
      }
    }
    console.log(pierde);
    return pierde;
  }

  limpia() {
    let filaCompleta;
    let tableroCopy;

    for (let py = 0; py < altoTablero - 1; py++) {
      filaCompleta = true;

      for (let px = 1; px < anchoTablero + 1; px++) {
        tableroCopy = tablero.getTablero();
        if (tableroCopy[py][px] == 0) {
          filaCompleta = false;
        }
      }
      if (filaCompleta == true) {
        for (let px = 1; px < anchoTablero + 1; px++) {
          tableroCopy[py][px] = 0;
        }
      }
    }
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
        this.limpia();
        this.nueva();
        if (this.compruebaSiPierde() == true) {
          tablero.reseteaTablero();
        }
      }
      this.fotograma = 0;
    }
  }

  fijar() {
    for (let py = 0; py < 4; py++) {
      for (let px = 0; px < 4; px++) {
        if (fichaGrafico[this.tipo][this.angulo][py][px] > 0) {
          tablero.getTablero()[this.y + py][this.x + px] =
            fichaGrafico[this.tipo][this.angulo][py][px];
        }
      }
    }
  }

  colision(anguloNuevo, yNueva, xNuevo) {
    let resultado = false;
    let tableroCopy;
    for (let py = 0; py < 4; py++) {
      for (let px = 0; px < 4; px++) {
        if (fichaGrafico[this.tipo][anguloNuevo][py][px]) {
          tableroCopy = tablero.getTablero();
          if (tableroCopy[yNueva + py][xNuevo + px] > 0) {
            resultado = true;
          }
        }
      }
    }
    return resultado;
  }

  dibujo() {
    for (let py = 0; py < 4; py++) {
      for (let px = 0; px < 4; px++) {
        
        if (fichaGrafico[this.tipo][this.angulo][py][px] != 0) {
          if (fichaGrafico[this.tipo][this.angulo][py][px] == 1) {
            ctx.fillStyle = rojo;
          }
          if (fichaGrafico[this.tipo][this.angulo][py][px] == 2) {
            ctx.fillStyle = naranja;
          }
          if (fichaGrafico[this.tipo][this.angulo][py][px] == 3) {
            ctx.fillStyle = amarillo;
          }
          if (fichaGrafico[this.tipo][this.angulo][py][px] == 4) {
            ctx.fillStyle = verde;
          }
          if (fichaGrafico[this.tipo][this.angulo][py][px] == 5) {
            ctx.fillStyle = cyan;
          }
          if (fichaGrafico[this.tipo][this.angulo][py][px] == 6) {
            ctx.fillStyle = azul;
          }
          if (fichaGrafico[this.tipo][this.angulo][py][px] == 7) {
            ctx.fillStyle = morado;
          }
          ctx.fillRect(
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

    console.log("rotar");
  }

  abajo() {
    if (this.colision(this.angulo, this.y + 1, this.x) == false) {
      this.y++;
      console.log("abajo");
    }
  }

  derecha() {
    if (this.colision(this.angulo, this.y, this.x + 1) == false) {
      this.x++;
      console.log("der");
    }
  }

  izquierda() {
    if (this.colision(this.angulo, this.y, this.x - 1) == false) {
      this.x--;
      console.log("izq");
    }
  }
}
