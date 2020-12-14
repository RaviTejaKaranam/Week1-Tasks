var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
/*Write a function called “convertObjectToList” which converts an object 
literal into an array of arrays. */

function convertObjectToList(role){
  let listOfKeyValuePairs = []
  for(let i in role){
    listOfKeyValuePairs.push([i,role[i]])
  }
  return listOfKeyValuePairs
}

const listConvertedObject = convertObjectToList(obj)
console.log(listConvertedObject)