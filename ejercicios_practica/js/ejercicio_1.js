"use strict";

/* Inove Coding School
 * Ejercicios de funciones
 */

// Ejercicios con funciones

function imprimirMayor(numero1, numero2) {
    console.log("Funcion mayor")
    // En esta función debe determinar cual de los dos
    // números ingresados por parámetro es mayor
    // y luego imprimir dicho valor en consola
    let mayor = numero2
    let menor = numero1
    if (mayor > menor) {
        console.log( mayor +" es mayor")
    } 
}


imprimirMayor(2, 10);