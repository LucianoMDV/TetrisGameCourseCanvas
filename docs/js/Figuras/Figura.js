class Figura {
    constructor(forma, puntos) {
        this.forma = forma;
        this.puntos = puntos;
    }

    get getForma() {
        return this.forma;
    }

    get getPuntos() {
        return this.puntos;
    }
}