
//  * @fileoverview Ejercitación de Funciones
//  * @author       Inove coding School <alumnos@inove.com.ar>
//  * @copyright    www.inove.com.ar
//  *
//  * Consignas:
//  * Deberá enlazar este archivo javascript al documento HTML.
//  * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
//  * admita:
//  * 
//  * 2. En la función generarInvitados():
//  *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
//  *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
//  *    correctos. 

//variable global que indica 3 nombres 
let cantidadNombres = alert("Ingrese tres invitados")

 function generarInvitados () {
     if (cantidadNombres == 1) {
         let nombre1 = prompt("Ingrese el nombre del primer invitado: ")
         console.log("Nombre del invitado nro1: " + nombre1)
     } 
     else if (cantidadNombres == 2) {
         let nombre2 = prompt("Ingrese el nombre del segundo invitado: ")
         console.log("Nombre del invitado nro2: "+ nombre2)
     }
     else if (cantidadNombres == 3) {
         let nombre3 = prompt("Ingrese el nombre del tercer invitado")
         console.log("Nombre del invitado nro3: " + nombre3)
     }
     else {
         console.log("Cantidad de invitados no valida")
     }
     
 }
cantidadNombres = 1
generarInvitados()
cantidadNombres = 2
generarInvitados()
cantidadNombres =3
generarInvitados()



  