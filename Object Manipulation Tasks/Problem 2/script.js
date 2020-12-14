var object = {name: 'RajiniKanth', age: 33, hasPets : false};

/* Write a function called “printAllKeys” which returns an newArray
 of all the input object’s keys. */

 function printAllKeys(person){
   let keyArray = []
   for(let i in person){
     keyArray.push(i)
   }
   return keyArray
 }

 const keysInObject = printAllKeys(object)
 console.log(keysInObject) 