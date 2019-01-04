/**
 *  merge()
 *
 *  Write a function called `merge()` that takes two objects and
 *  returns a new object with their combined properties & values.
 *
 *  If the two objects have the same property, make sure that you
 *  return the property-values from the object in the 2nd argument.
 *
**/



// ++ YOUR CODE HERE
// function merge(object1, object2) {
//   //crear arrays con las llaves de los objetos
//   var keyObject1 = Object.keys(object1);
//   var keyObject2 = Object.keys(object2);
//
//   //creamos nuestro nuevo objeto
//   var newObject = {};
//
//   //Iteramos para evaluar las llaves de los dos objetos que nos dieron de parámetro
//   for(var i = 0; i < keyObject1.length; i++) {
//     for(var j= 0; j < keyObject2.length; j++) {
//       // newObject[keyObject1[i]] = object1[keyObject1[i]];
//       newObject[keyObject2[j]] = object2[keyObject2[j]];
//       if (keyObject1[i] === keyObject2[j]) {
//         newObject[keyObject2[j]] = object2[keyObject2[j]];
//       } else if (keyObject1[i] !== keyObject2[j]) {
//         newObject[keyObject1[i]] = object1[keyObject1[i]];
//       }
//     }
//   }
//   return newObject;
// }
function merge(obj1, obj2) {

  var obj = {};
  for (var key in obj1) {
    obj[key] = obj1[key];
  }
  for (var key in obj2) {
    obj[key] = obj2[key];
  }
  return obj
}
//declarar la variable objeto
//iterar sobre el primer objeto
//


// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-10');
  console.log('%cFunction: merge', 'background-color: green; color: white')
console.groupEnd();

/* ----------------------- TEST-1  ----------------------- */
// merge(obj1, obj2)
//  should return:
//   {
//     accountActive: true,
//     age: 33,
//     balance: 38832,
//     id: 6288,
//     name: "Shaman Tilroy"
//    }
/* ------------------------------------------------------ */
console.log('TEST-1');

var obj1 = {name: "Shaman Tilroy", age: 33, id: 6288}
var obj2 = {id: 6288, balance: 38832, accountActive: true }

var merged = merge(obj1, obj2)

console.assert(merged.name === "Shaman Tilroy")
console.assert(merged.age === 33)
console.assert(merged.id === 6288)
console.assert(merged.balance === 38832)
console.assert(merged.accountActive === true)



/* ----------------------- TEST-2  ----------------------- */
// merge(obj3, obj4)
//  should return:
// {
//   album: "Wishy Washy",
//   ​artist: "The Riverboat",
//   quantity: 10,
//   released: 1980,
//   title: "How to Wear a Bowtie"
// }
/* ------------------------------------------------------ */
console.log('TEST-2');


var obj3 = {title: "How to Wear a Bowtie", artist: "Showtime",  released: 1984}
var obj4 = {artist: "The Riverboat", released: 1980, album: "Wishy Washy", quantity: 10 }

var merged2 = merge(obj3, obj4)
console.log(merged2);

console.assert( merged2.artist === "The Riverboat" )
console.assert( merged2.released === 1980 )
console.assert( merged2.title === "How to Wear a Bowtie")
console.assert( merged2.quantity === 10 )
