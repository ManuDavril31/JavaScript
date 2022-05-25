//UN ARREGLO ES UNA COLECCION DE ELEMENTOS, PUEDEN SER DE DIFERENTES TIPOS DE DATOS.
//SE ACCEDE A LA REFERENCIA DEL VALOR

const a = [];
const b = [1, true, "HOLA", ["a", "b", "c", [1, 2, 3]]];
console.log(a);
console.log(b);
console.log(b[2]);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][0]);

//CREAN UN ARREGLO CON Array.of()
const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);

//CREANDO ARRAY DE 100 POSICIONES Y A CADA POSICION LE ASIGNAMOS EL VALOR DE false

const d = Array(100).fill(false);
console.log(d);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro");
console.log(colores);

colores.pop();
console.log(colores);

//RECORIENDO EL ARRAY CON EL METODO forEach
colores.forEach(function (ele, index) {
  console.log(`<li id='${index}'>${ele}</li>`);
});
