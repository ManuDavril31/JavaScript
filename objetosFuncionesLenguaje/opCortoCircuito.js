//Operadores de cortocircuito funcionan poniendo dos condiciones, ya sea utilizando el operador logico OR o el operador logico AND

/*
Corto circuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto.

Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validarse a false, es el valor que se cargara por defecto
*/

//Operador cortocircuito con OR

function saludar(nombre) {
  //Operador cortocircuito con OR
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}
saludar("Jon");
saludar();

console.log("Cadena" || "Valor de la derecha");
console.log(19 || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log([] || "Valor de la derecha");

//false, null, undefined, cadena vacia, 0. Aplica el valor de la derecha
console.log(false || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log(0 || "Valor de la derecha");

//Operador cortocircuito con AND, Een este caso pasa lo contrario al OR, es decir va a validad lo que sea false y este del lado izquierdo
console.log(false && "Valor de la derecha");
console.log(null && "Valor de la derecha");
console.log(undefined && "Valor de la derecha");
console.log(0 && "Valor de la derecha");

console.log("Cadena" && "Valor de la derecha");
console.log(19 && "Valor de la derecha");
console.log(true && "Valor de la derecha");
console.log([] && "Valor de la derecha");
