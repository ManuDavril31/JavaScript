//mapada debiles y conjuntos debiles: Solamente pueden almacenar referencias debiles, es decir, que las llaves deben de ser de tipo objeto.
//No podemos recorrerlos
//Solo se pueden ir eliminando los item de 1 en u¿1
//No tenemos la propiedad size para saber la longitud

//WEAKSET

const ws = new WeakSet();

let valor1 = { valor: 1 };
let valor2 = { valor2: 2 };
let valor3 = { valor3: 3 };

ws.add(valor1);
ws.add(valor2);
ws.add(valor3);

console.log(ws);

//Evaluando si existe una referencia a algun dato dentro del WeakSet
console.log(ws.has(valor1));
console.log(ws.has(valor2));

//eleminando elemento del WeakSet

ws.delete(valor2);
console.log(ws);

//WEAKMAP

const wm = new WeakMap();

let llave1 = {};
let llave2 = {};
let llave3 = {};
//ingressando valores a WeakMap
wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

//Evaluando si existe una referencia a algun dato dentro del WeakMap
console.log(wm.has(llave1));
console.log(wm.has(llave3));

//obteniendo valores de un WeakMap

console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));

//eleminando elemento del WeakMap
wm.delete(llave2);
console.log(wm);

wm.set(llave2, 2);
wm.set(llave3, 2);
console.log(wm);
