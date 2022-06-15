// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const verTextoRepetido = (cadena = "", cadena2 = "") => {
  if (!cadena || typeof cadena === "number")
    return console.error(
      "Debes ingresar una cadena de texto como primer y segundo argumento"
    );
  if (!cadena2 || typeof cadena === "number")
    return console.error(
      "Debes ingresar una cadena de texto como segundo argumento"
    );
  const num = [];
  const nuevaCadena = cadena.split(" ");
  console.log(nuevaCadena);

  const cadenaLimpiaConComa = [];
  const cadenaLimpiaSinComa = [];
  for (i = 0; i < nuevaCadena.length; i++) {
    if (nuevaCadena[i].includes(",")) {
      cadenaLimpiaConComa.push(nuevaCadena[i].replace(",", ""));
    } else {
      cadenaLimpiaSinComa.push(nuevaCadena[i]);
    }

    num.push([...(cadenaLimpiaConComa + cadenaLimpiaSinComa)]);
  }

  //   const array = cadenaSinpuntos.split(" ");

  //   console.log(array);
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i].toLowerCase() === cadena2.toLowerCase()) num.push(i);
  //   }
  //   console.log(num.length);
};

verTextoRepetido("hola mundo, adios mundo, feliz dia mundo", "mundo");
