//INTERACTUAR, LEER, MODIFICAR, SI EXISTEN O NO, TAMTO ATRIBUTOS NORMALES DE HTML COMO LOS NUEVOS DATA-ATTRIBUTES QUE TENEMOS A PARTIR DEL ESTANDAR HTML 5

//aceder al atributo lang que tiene la etiqueta html

console.log(document.documentElement.lang);

//Los elementos tienen un atributo que se llama getAttribute y como parametro le pasamos el nombre del atributo
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

//Establecer un nuevo valor a los atributos con notacion de punto
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
//Establecer un nuevo valor a los atributos con el método setAttribute
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);
//
//Guardando elementos del DOM en una variable, es una buena practiva nombrar las variables donde van a ir guardadas elementos del DOM anteponiendo un signo de dolar $ esto con el fin de distinguir las variables que guardan elementos del DOM y las del codigo javascript como tal.
const $linkDOM = document.querySelector(".link-dom");

//Abrir en una nueva pestaña
$linkDOM.setAttribute("target", "_blank");
//Agregando atributos a las etiquetas con el método setAttribute().
$linkDOM.setAttribute("rel", "noopener");
//Modificando atributo href de un enlace
$linkDOM.setAttribute("href", "https://google.com");
//comprobar si una etiquta tiene un atrbuto
console.log($linkDOM.hasAttribute("rel")); //true
//eliminar un atributo de una etiqueta
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel")); //false

//DATA-ATTRIBUTES
console.log($linkDOM.getAttribute("data-description"));

//todos estos data-attribute los guarda a manera de un mapa, de una colección javascript la cual se llama dataset. cada data-attribute lo va guardando en ese dataset
console.log($linkDOM.dataset);
//obtener un data-attribute en particular con la notacion del punto
console.log($linkDOM.dataset.description);
//modificar o establecer nuevos valores a los data-attibute con el método setAttribute
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
//modificar o establecer nuevos valores a los data-attibute con la notación del punto
$linkDOM.dataset.description = "Suscribete a mi canal y copmarte";
console.log($linkDOM.dataset.description);
//validando si existe un data-attribute llamado data-id
console.log($linkDOM.hasAttribute("data-id"));
//Eliminando un data-attribute llamado data-id
console.log($linkDOM.removeAttribute("data-id"));
//validando si existe un data-attribute llamado data-id
console.log($linkDOM.hasAttribute("data-id"));
