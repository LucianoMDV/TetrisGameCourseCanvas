class Figura {
  constructor(forma, puntos) {
    this._forma = forma;
    this._puntos = puntos;
  }

  get forma() {
    return this._forma;
  }
  set forma(forma) {
    return this._forma = forma;
  }

  get puntos() {
    return this._puntos;
  }

  set puntos(puntos) {
    return this._puntos = puntos;
  }
}
