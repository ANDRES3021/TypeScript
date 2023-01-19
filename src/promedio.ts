function promedio(...args: number[]): number {
    let sum = 0;
    for (let i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum/args.length;
}
console.log(promedio(1, 2, 3));
console.log(promedio(10, 20, 30, 40)); 
console.log(promedio(-5, 0, 5)); 
console.log(promedio(3.14, 2.718, 1.618));


let compara = promedio(1, 2, 3);

function compararPromedio(compara: number, otro: number){
    if(compara > otro){
        return 'mayor' }
    return 'menor'
}
console.log(compararPromedio(compara, 5))

function promedioMayorMenor(compara:number, ...args: number[]): string {
    let prom = promedio(...args);
    let result = compararPromedio(prom, compara);
    return `El promedio es ${result} que ${compara}`;

}
console.log(promedioMayorMenor(10, 5, 7, 9, 12)); 
console.log(promedioMayorMenor(3, 1, 2, 3, 4, 5)); 
console.log(promedioMayorMenor(20, 15, 25, 30, 18, 22)); 
console.log(promedioMayorMenor(0, -5, -3, 0, 3, 5));
