function crearPalindromo(palabra: string) {
    let palindromo =  palabra + "";
    for (let i =palabra.length -2 ; i>= 0; i--) {
        palindromo += palabra[i];
    }
    return palindromo
}

console.log(crearPalindromo("hola"))
console.log(crearPalindromo("anita"))
console.log(crearPalindromo("andres"))
