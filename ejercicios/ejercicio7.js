// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// const esPalindromo = (cadena = "") => {
//   return console.log(arraySinSignos);

//   // const cadena1 = cadena
//   //   .replace(",", " ") //QUITANDO LAS COMAS
//   //   .replace(".", "")
//   //   .replace(":", "")
//   //   .split(" ") //SEPARAMOS LA CADENA PARA UNIRLA CON EL METODO JOIN()
//   //   .join("") //UNIMOS EL ARRAY QUE NOS GENERO EL METODO SPLIT() EN UNA CADENA
//   //   .normalize("NFD") //QUITANDO ACENTOS
//   //   .replace(/[\u0300-\u036f]/g, "") //QUITANDO ACENTOS
//   //   .split(" ") //VOLVEMOS A SEPARAR LA CADENA ESTA VES POR PALABRA
//   //   .join("") //VOLVEMOS A UNIR PARA COMVERTIR EN CADENA
//   //   .toLowerCase(); //CONVERTIMOS TODO A MINUSCULAS

//   // console.log(cadena1);

//   // const cadena2 = cadena
//   //   .split("") //SEPARAMOS LA CADENA POR CADA PALABRA Y LA CONVERTIMOS EN ARRAY
//   //   .reverse() //INVERTIMOS EL CONTENIDO DEL ARRAY
//   //   .join("") //UNIMOS EL CONTENIDO DEL ARRAY Y LO CONVERTIMOS A CADENA
//   //   .replace(",", "") //QUITAMOS LAS COMAS

//   //   .normalize("NFD") //QUITAMOS ACENTOS
//   //   .replace(/[\u0300-\u036f]/g, "") //QUITAMOS ACENTOS
//   //   .split(" ") //SEPARAMOS CADA QUE ENCONTREMOS UN ESPACIO EN LA CADENA
//   //   .join("") //UNIMOAS LA EL ARRAY Y CONVERTIMOS A CADENA
//   //   .toLowerCase(); //CONVERTIMOS TODO A MINUSCULAS

//   // console.log(cadena2);

//   // if (cadena1 === cadena2) return console.log("true");
//   // console.log("false");

//   // -------------------------------

//   // LIMPIANDO LA CADENA DE LAS COMAS.
//   // const cadenaLimpia = cadena.split(" ");
//   // const result = [];
//   // for (let i = 0; i < cadenaLimpia.length; i++) {
//   //   if (cadenaLimpia[i].includes(","))
//   //     result.push(cadenaLimpia[i].replace(",", ""));
//   //   else result.push(cadenaLimpia[i]);
//   // }
//   // const cadenaSinComas = result.join("");
//   // console.log(cadenaSinComas.toLowerCase());
//   // const cadenaAComprobar = cadenaSinComas.split(" ").reverse().join("");
//   // console.log(cadenaAComprobar.toLowerCase());
//   // if (cadenaSinComas.toLowerCase() === cadenaAComprobar.toLowerCase())
//   //   return console.log("true");
//   // console.log("false");
// };

// let texto =
//   "Amor azul  Ramera, de todo te di.  Mariposa colosal, sí,  yo de todo te di.  Poda la rosa, Venus. El átomo como tal es un evasor alado. Pide, todo te doy: isla, sol, ocaso, pirámide. Todo te daré: mar, luz, aroma";
// esPalindromo(texto);
