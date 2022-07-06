//Async - Await: van a esperar a que algo se cumpla para poder seguir ejecutando el proceso que se esta trabajando en ese momento.

async function funcionAsyncronaDeclarada() {
  try {
    console.log("Inicio Async Function");
    let obj = cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
  } catch (error) {}
}
