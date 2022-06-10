// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetirTexto = (cadena, num) => {
  if (
    (typeof cadena === "string" || cadena instanceof String) &&
    typeof num === "number"
  ) {
    const nuevacadena = cadena.repeat(num);
    console.log(nuevacadena);
  } else {
    console.log(
      "Error, enviar una cadena en el primer argumento y un numero en el segundo argumento"
    );
  }
};

repetirTexto("Mi cadena ", 4);
