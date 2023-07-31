/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

  var arreglo = Object.entries(objeto);
  return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

// Solucion de chatGPT
//    var countObj = {};

//    for (var i = 0; i < string.length; i++) {
//      var char = string[i].toLowerCase();
//      if (/[a-z]/.test(char)) {
//        countObj[char] = (countObj[char] || 0) + 1;
//      }
//    }
 
//    return countObj;

   // Solucion de la clase 

   var objeto = {};
   for (var i =0; i<string.length; i++){
      var letter = string[i];

      if (objeto[letter]){
         objeto[letter] = objeto[letter]+1;
      } else {objeto[letter]=1}
   }
   return objeto;

}



function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   // solucion mia
   var mayus = string.match(/[A-Z]/g);
   var minus = string.match(/[a-z]/g);

   var orden = mayus+minus;
   return orden.split(',').join('');

   // Solucion clase 
   // var mayus='';
   // var minus='';

   // for(var i =0; i<string.length;i++){
   //    if(string[i]===string[i].toUpperCase()){
   //       mayus = mayus+string[i];
   //    } else minus = minus+string[i];
   // } return mayus+minus;


}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   // solucion chatGPT
//    var palabras = frase.split(" ");
//   var fraseInvertida = palabras.map(invertirPalabra).join(" ");
//   return fraseInvertida;
// }

// function invertirPalabra(palabra) {
//   return palabra.split("").reverse().join("");

//   Solucion HENRY

var palabras = frase.split(' ');

for (var i=0; i<palabras.length; i++){
   var palabraInvertida = palabras[i].split('').reverse().join('');
   palabras[i]= palabraInvertida
} return palabras.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   // var string = numero.toString();
   // var arreglo = string.split('');
   // var reverse = arreglo.reverse();
   // var string2 = reverse.join('');
   // var invertido = parseInt(string2);

   var darVuelta = numero.toString().split('').reverse().join('');
   var invertido = parseInt(darVuelta);

   
   if (numero === invertido) {
      return 'Es capicua';
   } else return 'No es capicua';
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var sinLetras = []
   var paraBorrar = string.split('');
   for (var i = 0; i<paraBorrar.length; i++){
      if (paraBorrar[i] != 'a' && paraBorrar[i] != 'b' && paraBorrar[i] != 'c') {
         sinLetras.push(paraBorrar[i]);
      }
   } return sinLetras.join('');
   
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   return arrayOfStrings.sort((a, b)=> a.length - b.length);
   
   

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var comunes = [];
   for (var i = 0; i<array1.length; i++){
      if (array2. includes(array1[i]) === true){
         comunes.push(array1[i]);
      } 
   } return comunes;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
