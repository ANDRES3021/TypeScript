import { CrearFiguras, Circulo, Cuadrado } from './POO';

let figuras = new CrearFiguras();

let circulo = figuras.crear("Circulo", "circulo", 5);
let cuadrado = figuras.crear("Cuadrado", "cuadrado", 10);

let circuloObject = new Circulo(circulo, 5);
let cuadradoObject = new Cuadrado(cuadrado, 10);

console.log("Area del circulo: ", circuloObject.calcularArea());
console.log("Perimetro del circulo: ", circuloObject.calcularPerimetro());
console.log("Area del cuadrado: ", cuadradoObject.calcularArea());
console.log("Perimetro del cuadrado: ", cuadradoObject.calcularPerimetro());