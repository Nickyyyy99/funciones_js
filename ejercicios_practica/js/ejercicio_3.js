"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/

// Definir y crear la función antes de esta llamada

function generarInvitados () {
    let invitado1 = (prompt("Ingrese primer nombre"))
    let invitado2 = (prompt("Ingrese segundo nombre"))
    let invitado3 = (prompt("Ingrece tercer nombre"))
    let lista = "Lista de Invitados: " + invitado1 + " " + invitado2 + " " + invitado3;
    console.log(lista)
}


generarInvitados ()