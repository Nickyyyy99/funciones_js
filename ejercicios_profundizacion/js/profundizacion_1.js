/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/

function promedio (a,b,c,d,e) {
    let suma = a + b + c + d + e
    let promedio = suma / 5

    let datos = "Datos: " + a + ","+ b  + "," + c + "," + d + ","+ e;
    alert(datos)
    console.log(datos)

    alert("El promedio es: " + promedio);
    
    console.log("El promedio es: " + promedio);

    return promedio
} 

let resultado = promedio(1,23,7,4,22)
console.log("Resultado: " + resultado)

  