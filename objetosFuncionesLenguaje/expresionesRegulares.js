/*
Expresiones regulares
    Son una secuencia de caracteres que forman un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres.

    https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
    https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
    
*/

let cadena =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deserunt optio quaerat non totam eaque cum repellat quas. Sunt eos totam sapiente, excepturi consequuntur eaque culpa facilis accusantium lorem ipsam molestiae!";

//la i dentro de la instancia de la expresio regular RegExp("lorem", "ig") ignora entre mayusculas y minusculas y g significa que no solamente se va a quedar con la primer concidencia, si no va a buscar todas las coincidencias.

let expReg = new RegExp("lorem", "ig");
let expReg2 = /Lorem/gi;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
