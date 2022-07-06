document.getElementById("title").innerHTML = "Asincronía y el evento Loop";

//Procesamiento Single thread y Multi thread.
//Operaciones de CPU y Operaciones de I / O.
//Operaciones Bloqueantes y No Bloquenates
//Operaciones Síncronas y Asíncronas

/* 
Javascript usa un modelo asincrono no bloqueante, con un loop de eventos implementando en un solo hilo, (single thread) para operaciones de entrada y salida (input/output)
*/

//FUNCIONES ANONIMAS AUTOEJECUTABLE

//Código Sí ncrono Bloqueante
(() => {
  console.log("Código Síncrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
  console.log("*********************");
})();

//Código Asíncroo No Bloqueante

(() => {
  console.log("Código Asíncrono");
  console.log("Inicio");

  function dos() {
    setTimeout(function () {
      console.log("Dos");
    }, 1000);
  }

  function uno() {
    setTimeout(function () {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();
