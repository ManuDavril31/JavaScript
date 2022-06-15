// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena = "") => {
  if (!cadena) return console.error("Debes enviar una cadena de texto");
  const nuevoArreglo = cadena.split("").reverse().join("");
  console.info(nuevoArreglo);
};

invertirCadena("hola mundo");

const texto = "hola mundo";
const array = texto.split("");
const invertirTexto = array.reverse();
const unirTexto = invertirTexto.join("");

console.log(unirTexto);
