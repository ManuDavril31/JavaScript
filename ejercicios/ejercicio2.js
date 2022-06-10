// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const recortarTexto = (cadena, num) => {
  if (
    (typeof cadena === "string" || typeof cadena instanceof String) &&
    typeof num === "number"
  ) {
    const nuevaCadena = cadena.slice(0, num);
    console.log(nuevaCadena);
  } else {
    console.log(
      "Datos incorrectos, en el primer argumento ingrese la cadena de texto y en el segundo, el valor numerico."
    );
  }
};

recortarTexto("Hola mundo", 4);
