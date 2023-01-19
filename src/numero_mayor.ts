function obtenerMayor(...args: number[]) {
    let mayor = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] > mayor) {
            mayor = args[i];
        }
    }
    return mayor;
}


console.log(obtenerMayor(2, 24, 356, 40, 5)); 
console.log(obtenerMayor(0, -63, 98, 1, -99)); 
console.log(obtenerMayor(11, -65, 9, -5, -2));