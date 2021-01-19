class Tablero {
  constructor(fila, columna, ctx) {
    this.colors = new Color().colors;
    this._fila = fila;
    this._columna = columna;
    this.ctx = ctx;
    this.arrayFila = [];
    this.generarArray();
    this.tableroMatriz = new Array(this._fila);
    crearMatriz(this.tableroMatriz, this._columna);
  }

  get fila() {
    return this._fila;
  }

  get columna() {
    return this._columna;
  }

  getTablero() {
    return this.tableroMatriz.slice();
  }

  generarArray() {
    for (let fila = 0; fila < this._fila; fila++) {
      this.arrayFila[fila] = 0;
    }
  }

  dibujaTablero(margenSuperior, anchoF, altoF) {
    for (let py = margenSuperior; py < this._fila; py++) {
      for (let px = 1; px < this._columna + 1; px++) {
        if (this.tableroMatriz[py][px] != 0) {
          if (this.tableroMatriz[py][px] == 1) {
            this.ctx.fillStyle = this.colors.rojo;
          }
          if (this.tableroMatriz[py][px] == 2) {
            this.ctx.fillStyle = this.colors.naranja;
          }
          if (this.tableroMatriz[py][px] == 3) {
            this.ctx.fillStyle = this.colors.amarillo;
          }
          if (this.tableroMatriz[py][px] == 4) {
            this.ctx.fillStyle = this.colors.verde;
          }
          if (this.tableroMatriz[py][px] == 5) {
            this.ctx.fillStyle = this.colors.cyan;
          }
          if (this.tableroMatriz[py][px] == 6) {
            this.ctx.fillStyle = this.colors.azul;
          }
          if (this.tableroMatriz[py][px] == 7) {
            this.ctx.fillStyle = this.colors.morado;
          }
          this.ctx.fillRect(
            (px - 1) * anchoF,
            (py - margenSuperior) * altoF,
            anchoF,
            altoF
          );
        }
      }
    }
  }

  reseteaTablero() {
    crearMatriz(this.tableroMatriz, this._columna);
  }
}

function crearMatriz(tableroMatriz, columna) {
  //agrego un array dentro de otro para hacer la matriz
  for (let i = 0; i < tableroMatriz.length; i++) {
    tableroMatriz[i] = new Array(columna);
  }

  //cargo la matriz para que tenga numero aleatorios
  for (let i = 0; i < tableroMatriz.length; i++) {
    for (let j = 0; j < tableroMatriz[i].length; j++) {
      tableroMatriz[i][j] = 0; //esto es para iniciar con un valor en 0 en cualquier posicion de la matriz.
      if (j == 0) {
        //esto es para saber si es la 1er COLUMNA poner 1 en toda la columna
        tableroMatriz[i][j] = 1;
        // console.log('pos: ' + i +'-'+ j + ' valor: ' + tableroMatriz[j][0]);
      }
      if (j == tableroMatriz[i].length - 1) {
        //esto es para saber si es la ultima COLUMNA poner 1 en toda la columna
        tableroMatriz[i][j] = 1;
      }
      if (i == tableroMatriz.length - 1) {
        //esto es para saber si es la ultima FILA poner 1 en toda la columna
        tableroMatriz[i][j] = 1;
      }
    }
  }
}
