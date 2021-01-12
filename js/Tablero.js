class Tablero {
  constructor(fila, columna) {
    this.fila = fila;
    this.columna = columna;
    this.arrayFila = [];
    this.generarArray();
    this.tableroMatriz = new Array(this.fila);
    crearMatriz(this.tableroMatriz, this.columna);
  }

  getTablero() {
    return this.tableroMatriz.slice();
  }

  generarArray() {
    for (let fila = 0; fila < this.fila; fila++) {
      this.arrayFila[fila] = 0;
    }
  }

  dibujaTablero() {
    for (let py = margenSuperior; py < altoTablero; py++) {
      for (let px = 1; px < anchoTablero + 1; px++) {
        if (this.tableroMatriz[py][px] != 0) {
          if (this.tableroMatriz[py][px] == 1) {
            ctx.fillStyle = rojo;
          }
          if (this.tableroMatriz[py][px] == 2) {
            ctx.fillStyle = naranja;
          }
          if (this.tableroMatriz[py][px] == 3) {
            ctx.fillStyle = amarillo;
          }
          if (this.tableroMatriz[py][px] == 4) {
            ctx.fillStyle = verde;
          }
          if (this.tableroMatriz[py][px] == 5) {
            ctx.fillStyle = cyan;
          }
          if (this.tableroMatriz[py][px] == 6) {
            ctx.fillStyle = azul;
          }
          if (this.tableroMatriz[py][px] == 7) {
            ctx.fillStyle = morado;
          }
          ctx.fillRect(
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
    crearMatriz(this.tableroMatriz, this.columna);
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
