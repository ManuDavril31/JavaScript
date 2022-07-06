//PODEMOS INTERACTUAR CON LOS ESTILOS DE NUESTRON ELEMENTOS HTML

//Agregando estilos en línea a las etiquetas con la notación del punto
const $linkDOM = document.querySelector(".link-dom");

//Esto me va a regresar un objeto de tipo CSSStyleDeclaration, las cuales estan escritas en formnato camelCase
console.log($linkDOM.style);
//
console.log($linkDOM.getAttribute("style"));
