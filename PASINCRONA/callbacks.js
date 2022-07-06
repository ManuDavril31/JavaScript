//Un callback es una función que le puedes pasar a otra funcion como argumento y que se ejecuta después que se haya ejecutado cualquier operación o alguna operación.
//Eveces el callback puede recibir algún argumento

function modify(array, callback) {
  //Hacemos algo, esto se ejecuta primero que el callback
  array.push("midu");
  //después de hacer algo podemos ejecutar el callback
  callback(array);
}

const names = ["Manuel", "Nevis", "Vicky"];

modify(names, function (array) {
  console.log(`He modificado el Array y ahora es de ${array.length} elementos`);
});

//************************************** */

function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${value}, ${result}`);
  //-----------------
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
  });
  //--------------
  cuadradoCallback(2, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
  });
  //-----------------
  cuadradoCallback(3, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
  });
  //-------------
  cuadradoCallback(4, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
  });
  //-------------
  cuadradoCallback(5, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
  });
});
