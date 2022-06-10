// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const contandoCaracteres = (cadena) => {
  if (typeof cadena === "string" || cadena instanceof String) {
    console.log(cadena.length);
  } else {
    console.log("el argumento ingresado no es una cadena de texto");
  }
};

const miCadena = new String(
  "https://www.youtube.com/watch?v=3o5d-tdVscU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=35&ab_channel=jonmircha"
);

contandoCaracteres("Hola mundo");
contandoCaracteres(miCadena);
contandoCaracteres({ hola: "cadena" });
