var object = {name: 'RajiniKanth', age: 33, hasPets : false};

/* Write a function called “printAllValues” which returns an newArray
 of all the input object’s values. */

 function printAllValues(person){
   let valueArray = []
   for(let i in person){
     valueArray.push(person[i])
   }
   return valueArray
 }

 const valuesInObject = printAllValues(object)
 console.log(valuesInObject) 