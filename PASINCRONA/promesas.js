//Las promesas trabajan con dos objetos o recursos principales, resolve - reject.
//Una promesa la podemos ver como un if, else. Si la promesa se cumple se ejecuta el resolve, si la promesa falla se ejecuta el reject.

//El resolve es la parte positiva de la promesa
//El reject es la parte negativa de la promesa

function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return new Promise.reject(
      `Error, el valor '${value}' ingresado no es un número`
    );
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

//then es el siguiente bloque que se va a ejecutar una ves se cumpla la funcion inicial, podemos tener tantos metodos then como necesitemos. EL then recibe la parte positiva de la promesa
//Al final de los metodos then vamos a tener un metodo catch, el cual captura el error que resulta del reject. El catch recibe la parte negative de la promesa

cuadradoPromise(0)
  .then((obj) => {
    // console.log(obj)
    console.log("Inicio Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin de la Promise");
  })
  .catch((err) => console.log(err));
