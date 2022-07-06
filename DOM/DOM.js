//El DOM es el que nos permite manejar javascript a través de los navegadores

console.log("*********ELEMENTOS DEL DOCUMENTO********");
console.log(window.document);
console.log(document);
//obteniendo la parte de la cabecera del dom
console.log(document.head);
// Obteniendo lo que se encuentra en el body del dom
console.log(document.body);
// Obteniendo la etiqueta html del dom
console.log(document.documentElement);
//Accediendo al tipo de documento
console.log(document.doctype);
//Acceder al juego de caracteres que tienen el documento
console.log(document.characterSet);
//Acceder al titulo que tienen el documento
console.log(document.title);
//ontener links dom
console.log(document.links);
//obtener imagenes dom
console.log(document.images);
//Ontener formularios
console.log(document.forms);
//obtener hojas de estilos
console.log(document.styleSheets);
//obtener scrips
console.log(document.scripts);
//obtener la seleccion, hay que hacer una seleccion en el dom
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
//
document.write("<h2>Hola escribo desde el dom</h2>");
