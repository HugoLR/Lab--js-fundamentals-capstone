/**
*  encodeUrl()
*
*  Write a function to create valid url-encoded URL's from a normal string.
*
*  For example, the string 'you are cool!'
*  would be encoded in a URL as: 'you%20are%20cool%21'
*
*  the string '50% of $100'
*  would be encoded in a URL as: '50%25%20of%20%24100'
*
*  Here is an encoding chart for special characters.
*
*  space - %20
*  ! - %21
*  " - %22
*  $ - %24
*  % - %25
*  ' - %27
*
**/


// ++ YOUR CODE HERE

function encodeUrl(string) {

  //creamos un array para evaluar cada palabra y espacio del string
  var newString = string.split("");

  //iteramos los elementos del nuevo array
  for (var i = 0; i < newString.length; i++) {

    //evaluamos cada parámetro con los caracters especiales
    if (newString[i] === " ") {
      newString[i] = "%20";
    } else if (newString[i] === "!") {
      newString[i] = "%21";
    } else if (newString[i] === '"') {
      newString[i] = "%22";
    } else if (newString[i] === "$") {
      newString[i] = "%24";
    } else if (newString[i] === "%") {
      newString[i] = "%25";
    } else if (newString[i] === "'") {
      newString[i] = "%27";
    }
  }
  //retornamos la funcion covertida en string
  return newString.join("");
}




// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-06');
  console.log('%cFunction: encodeUrl', 'background-color: green; color: white')
console.groupEnd();

/* ----------------------- TEST-1  ----------------------- */
// Expected Outputs
/* ------------------------------------------------------ */
console.log('TEST-1');
var encodedURL1 = encodeUrl('this is great')
var encodedURL2 = encodeUrl('she said "there is no need for violence!"')
var encodedURL3 = encodeUrl("i'm all about the $")
var encodedURL4 = encodeUrl("20% of $100")

console.assert(encodedURL1 === 'this%20is%20great')
console.assert(encodedURL2 === 'she%20said%20%22there%20is%20no%20need%20for%20violence%21%22')
console.assert(encodedURL3 === "i%27m%20all%20about%20the%20%24")
console.assert(encodedURL4 === "20%25%20of%20%24100")

/* ------------------------------------------------------ */
/* ----------------------- END  ----------------------- */
console.log('\n\n');
