//DESAFIO 1

/* Desarrolla un programa que le indique al usuario - en base a su perfil o
responsabilidades - qué puede hacer o no en el sistema. Para eso debes crear una
variable llamada: “perfil” y asignarle alguno de estos valores:
a. administrador
b. asistente
c. invitado.
Es importante tener en cuenta que se debe mostrar un único mensaje, utilizando el
console.log():
A. Si se le asigna un espacio en blanco a la variable perfil, debe mostrar el
mensaje: “Debe especificar el perfil del usuario”.
B. Si es un perfil “administrador - ADMINISTRADOR - Administrador”, la
consola debe mostrar este mensaje: “Usted tiene todos los privilegios de
uso del sistema”.
C. Si es un perfil “asistente - ASISTENTE - Asistente”, la consola debe mostrar
este mensaje: “c”.
D. Si es un perfil “invitado - INVITADO - Invitado”, la consola debe mostrar este
mensaje: “Usted sólo tiene permisos de consultar datos”.
E. Si se especifica un valor diferente a la variable perfil entonces se debe mostrar
este mensaje: “Debe especificar un perfil válido”. */

let perfil = "administrador"

switch (perfil){
    case "":
        console.log("Debe especificar el perfil del usuario");
        break;
    case "administrador":
    case "Administrador":
    case "ADMINISTRADOR":
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;
    case "asistente":
    case "Asistente":
    case "ASISTENTE":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
        break;
    case "invitado":
    case "Invitado":
    case "INVITADO":
        console.log("Usted sólo tiene permisos de consultar datos");
        break;
    default :
    console.log("Debe especificar un perfil válido");

}


//DESAFIO 2
/* Desarrolla el programa Ajuste tarifario de energía eléctrica. Utilizando el operador
condicional ternario, queremos determinar cuánto va a pagar un hogar según su
consumo. Veamos los pasos a seguir...
a. Crear una variable “pagoMes” y asignarle un pago actual de energía
eléctrica por mes.
b. Crear otra variable “consumoKWH” y asignarle un consumo mensual de
Kilovatios hora de consumo mensual por el hogar.
c. Si en el hogar se consumen más de 300 kwh por mes, entonces al pago actual
se le incrementará un 20%.
d. En el caso contrario se le mantendrá el subsidio, es decir que no tendrá ningún
aumento..

3. Una vez obtenido el monto del pago por consumo mostrar al usuario este mensaje:

“Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste tarifario
(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),
cumplimos con informarle que se ha ajustado el total a pagar, que será de $14400” */