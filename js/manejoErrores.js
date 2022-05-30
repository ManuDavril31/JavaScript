//try / catch / Finally
//Es una estructura que nos va a permitir evaluar ciertos fragmentos de codigo y cuandl haya algún mensaje de error, o el codigo genere un error se va a capturar en la parte del catch.

try {
  console.log(
    "En el try se agrega el código a evaluar, si en el try se genera algún error, lo cpatura el catch."
  );
  noExiste;
  console.log("Segundo mensaje en el try");
} catch (error) {
  console.log("Catch captura cualquier error surgido o lanzado en el try");
  console.log(error);
} finally {
  console.log(
    "El bloque finally se ejecutarpa siempre haya error o no al final de un bloque try - catch"
  );
}

try {
  let numero = "Y";
  if (isNaN(numero)) {
    //throw sirve para mandar errores
    throw new Error("El caractér introducido no es un número");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`);
}
