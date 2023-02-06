// SPREAD //

/*

Spread nos permite esparcir elementos de un iterable (array)
como argumentos de una función cuando la ejecutamos.

*/

// const DescribePersona = (nombre, edad, ciudad, hobby) => {

// console.log(nombre);
// console.log(edad);
// console.log(ciudad);
// console.log(hobby);

// };

// let persona = ["David", 36, "Valencia", "Padel"];


//SIN SPREAD:
// DescribePersona(persona[0],persona[1],persona[2],persona[3]):

//CON SPREAD:

// DescribePersona(...DescribePersona);

///////////////////////////////////////////////////

///////////////////////////////////////////////////

//REST

/*

    Rest nos agrupa en un array todos los argumentos que recibe la función,
    reciba los que reciba.

*/

// const SaludaAlumno = (...argumentos) => {

//     argumentos.map(item => console.log(item));

// };


// SaludaAlumno("Felipe", 35, "Valencia", "cine", "guitarra");
// SaludaAlumno("Fernando", 38, "Valencia", "entrenar", "escribir", "leer");
// SaludaAlumno("Mario", 31, "Valencia", "patinar");

///////////////////////////////////////////////////

///////////////////////////////////////////////////

// const IngredientesPizza = (...pizza) => {

//     pizza.map(item => console.log(item));

// };

// IngredientesPizza("Margarita", "tomate", "mozzarella", "oregano");
// IngredientesPizza("Cuatro Quesos", "tomate", "mozzarella", "cheddar", "queso azul", "queso de cabra");
// IngredientesPizza("Barbacoa", "tomate", "mozzarella", "salsa barbacoa", "bacon", "ternera");


///////////////////////////////////////////////////

///////////////////////////////////////////////////

//EXTENSIONES//

// const Pokemon = (nombre, tipo, ataque) => {


//     return({nombre,tipo,ataque});

// }

// Pokemon("Pikachu", "Electrico", "Rayo");

//DESESTRUCTURACIÓN//

//Desestructuramos de un Array//

// let series = ["One Piece", "Juego de Tronos", "Salvados por la campana", "Los 100", "Paquita Salas", "Berserk"]

// let [eterna, aburrida, clasica, pesada] = series;

// console.log(eterna);
// console.log(aburrida);
// console.log(clasica);
// console.log(pesada);

//Desestructuramos de un objeto//

// let juegos = {
//     ricos : "Monopoly",
//     batalladores : "Catan",
//     asesinos : "Gloomheaven"
// };

// let {ricos : primero, batalladores : segundo, asesinos : tercero} = juegos;

// console.log(primero, segundo, tercero);

//FOR OF // FOR IN//

// let bebidas = ["coca-cola", "monster", "tequila", "jaggermeister", "agua con gas", "cassalla", "aperol spritz"];

//For clásico//

// for(let i = 0; i < bebidas.length; i++){
//     console.log(bebidas(i));
// }

//For of //

// for(let vaso of bebidas){
//     console.log(vaso);
// }

// Proposición de ejercicio:
// Haz una función que sume números independientemente de la cantidad que se le pase como argumentos
// Pista: uso de For Of y uso de Rest

// const Sumar = (...numeros) => {
//     //El uso de los tres puntos en modalidad rest construye el array.
    
//     let suma = 0;

//     for (let numero of numeros) {
//         suma += numero;
//     } 
//     console.log(suma);
// };

// Sumar(666,2,47,-5);
// Sumar(2,5,7,8,25,456,124,789,951);

//For in //

// let apellidos = ["perez", "garcia", "gomez"];

// for (let index in apellidos) {

//     console.log('apellidos[' + index + '] = ' + apellidos[index]);
// }

//La gracia del for in es que puede ITERAR/RECORRER los OBJETOS de JS,
// cosa que no pueden hacer los 'for' clásicos ni los 'map'.

// let prendas = {

//     prenda1 : "jersey",
//     prenda2 : "jeans",
//     prenda3 : "bikini"
// };

// for(let elemento in prendas){
//     console.log(prendas[elemento]);
// };


////////////////////////////////////////////////////////////////

// TUTORÍA 1 SEMANA 2

////////////////////////////////////////////////////////////////

//Declaración de una función

/*
Declaramos todos los pasos que la función va a hacer para realizarse.
Esta declaración es previa a la ejecución, por lo tanto, declararla no implica
que se tenga que ejecutar a no ser que se llame de forma voluntaria
 */


 //Ejemplo multilinea
//  const Multiplicar = (parametro1, parametro2) => {

//     return parametro1 * parametro2;

//  };


// //Ejemplo en una línea
//  const Multiplicar = (parametro1, parametro2) => parametro1 * parametro2;




//  //Ejecución de la función

// let resultado = Multiplicar(3,5);

// console.log(resultado);


//FUNCIÓN QUE LLAMA A OTRA FUNCIÓN..........

//Declaro la función saludar
// const Saludar = (nombre) => console.log(`Hola ${nombre}`);

// //Declaro la función para pedir el nombre
// const PideNombre = () => {

//     let pedimos = prompt("Dime un nombre");

//     //Una vez tengo el nombre que me han dado por prompt, el siguiente paso es 
//     //llamar a una función denominada Saludar, dándole el nombre que recogí antes como argumento
//     Saludar(pedimos);
// };

// //Ejecuto la función que pide el nombre...ese es el primer paso
// PideNombre();

// let david = {

//     edad: 27,
//     ciudad: "Valencia",
//     hobbie: "Programar",
//     videoconsolas : ["Nintendo DS", "Nintendo 3DS", "Ps2", "Ps3", "Ps4"],
//     mascotas : {
//         mascota1 : "Vanitas",
//         mascota2 : "Onix"
//     }

// }

// console.log(david);

// //Repaso de For in...

// for(let elemento in david){
//     console.log(david[elemento]);
// }

//For in es la única herramienta que puede recorrer un objeto de JS.