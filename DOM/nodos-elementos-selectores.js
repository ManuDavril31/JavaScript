//nodos: etiquetas, comentarios, parrafos, encabezados
//Nos va a interezar trabajar los nodos de tipo elementos y los nodos de tipo texto

//METODOS DEL DOM

//Nos traemos todas las etiquetas por nombre de etiqueta que le pasemos en el algumento, en este caso todas las li del dom
console.log(document.getElementsByTagName("li"));

//Otra manera de calculas los elementos es a través de un metodo que se llama ---> por nombre de clase
console.log(document.getElementsByClassName("card"));

//metodod que no permite acceder a través del atributo name, sobre todo en los elementos del formulario.

console.log(document.getElementsByName("nombre"));

//Por nombre de ID
console.log(document.getElementById("menu"));

//por querySlectro, recibe como parametro un selector valido de css: clase, id.
//a nivel de rendimiento el querySelector es mas lento que el getElementById por que le toca primero validar que selector le mandamos si class, id, etc

console.log(document.querySelectorAll("#menu"));

//Buscame el primer selector de tipo enlace que tenga mi página
console.log(document.querySelector("a"));
//Buscame todos los selector de tipo enlace que tenga mi página
console.log(document.querySelectorAll("a"));
//propiedad .length
console.log(document.querySelectorAll("a").length);
//Mpetodo forEach
document.querySelectorAll("a").forEach((ele) => {
  console.log(ele);
});

//Solamente me trae el primer selector que tenga la clase .card
console.log(document.querySelector(".card"));

//para traer todos los selectores que implemente una misma clase
console.log(document.querySelectorAll(".card"));

//para traer un selector en particular, primero buscamos todos los selectores que implementa la misma clase, lo cual esto nos trae un conjunto de elementos y cada uno trae su posicion empezando desde el cero y entre corchetes el pasamos la posición.
console.log(document.querySelectorAll(".card")[2]);

//Tambien podemos traer posiciones desendientes, como sabemos que en nuestro DOM hay un menu, entonces le paramos el id del menu y luego la li como tal.

//Traeme la lista que se encuentren dentro del id menu
console.log(document.querySelectorAll("#menu li"));

//Traeme el primer item de la lista que se encuentren dentro del id menu
console.log(document.querySelector("#menu li"));

//LOS DESARROLLADORES ACTUALMENTE ESTAMOS UTILIZANDO LOS METODOS

/*
document.getElementById,
document.querySelector,
document.querySelectorAll,
*/
