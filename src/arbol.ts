function imprimirArbol(n: number){
    for (let i = 0; i < n; i++) {
        let espacios = "";
        let estrellas = "";
        for (let j = 0; j < n - i - 1; j++) {
            espacios += " "
        }
        for(let k = 0; k < i * 2 + 1; k++) {
            estrellas += "*"
        }
        console.log(espacios + estrellas)
    }
    let base = "";
    for (let b = 0; b < n - 2; b++) {
        base += " "
    }
    base += "***"
    console.log(base)
}
console.log(imprimirArbol(10))
