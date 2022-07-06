console.log("Inicio");
//Se ejecuta una sola vez en base al tiempo que se le indique.
//La funcion que cancela el setTimeut es clearTimeout() per para que esto funcione hay que guardar el setTimeout en una variable let tem = setTimeout(() => {}, 1000);
let temporizador = setTimeout(() => {
  console.log("Ejecutando un setTimeout, esto se ejcuta una sóla vez");
}, 3000);

//cancelando el setTimeout
clearTimeout(temporizador);

//Se ejecuta cada que se cumpla el tiempo que se le indique
// setInterval(() => {
//   console.log(
//     "Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo"
//   );
// }, 1000);

let temp = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

//En este punto cancela la ejecucion del setInteval()
clearInterval(temp);

console.log("Después del clearInterval");
