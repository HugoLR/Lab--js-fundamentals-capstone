
/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention
 *
 */

 // ++ YOUR CODE HERE

 // function toCamelCase(string) {
 //
 //   //convertir el string en lista para separar las palabras
 //   var newString = string.split(" ");
 //   var newArray = [];
 //
 //   //iterar la lista de palabras
 //   for(var i = 1; i < newString.length; i++) {
 //     if()
 //      var letter = newString[i][0];
 //      newArray.push(letter.toUpperCase());
 //   }
 //   return newArray.join("");
 // }

 function toCamelCase(string) {

   //convertir el string en lista para separar las palabras
   var newString = string.split(" ");
   var newArray = [];

   //iterar la lista de palabras
   for(var i = 1; i < newString.length; i++) {
      newString[i] = newString[i].toLowerCase();
      newString[i] = newString[i].replace(newString[i], newString[i][0].toUpperCase() + newString[i].slice(1))
   }
   return newString.join("");
 }

//formar array de palbras en String
//iterar sobre el array
// cada palabra convertirla en minúscula
//reemplazar primera letra de la palabra por mayúscula






// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-04');
  console.log('%cFunction: toCamelCase', 'background-color: green; color: white')
console.groupEnd();

/* ----------------------- TEST-1  ----------------------- */
// Expected Outputs:
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert( toCamelCase("fetch records") === 'fetchRecords' )
console.assert( toCamelCase("create table row") === 'createTableRow' )
console.assert( toCamelCase("convert to HTML") === 'convertToHtml' )
console.assert( toCamelCase("get user account ID") === 'getUserAccountId' )


/* ------------------------------------------------------ */
/* ----------------------- END  ----------------------- */
console.log('\n\n');
