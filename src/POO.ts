interface FiguraGeometrica {
    calcularArea(): void
    calcularPerimetro(): void
}
abstract class Figura implements FiguraGeometrica {

    protected nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre
    }
    abstract calcularArea(): void;
    abstract calcularPerimetro() : void;
}
class Cuadrado extends Figura {
    
    private lado: number;
    constructor(nombre: string, lado: number) {
        super(nombre);
        this.lado = lado;
    }
    calcularArea(): void {
        this.lado * this.lado;
    }
    calcularPerimetro(): void {
        this.lado + this.lado + this.lado + this.lado;
    }
}