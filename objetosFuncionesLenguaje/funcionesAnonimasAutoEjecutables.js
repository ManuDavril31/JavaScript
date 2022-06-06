//Funciones Anónimas Autoejecutables

//Clásica
(function () {
  console.log("Mi primer funcion autoejecutable");
})();

(function (d, w, c) {
  console.log("Mi segunda funcion autoejecutable");
  console.log(d);
  console.log(w);
  c.log("este es un console.log");
})(document, window, console);

//La Crockford (JavaScript the God Parts)
(function () {
  console.log("Versión Crockford");
})();

//Versión unaria
/*
+function () {
  console.log("Versión unaria");
}();
*/

//Versión facebook
/*
!function () {
  console.log("Versión facebok");
}();
*/
