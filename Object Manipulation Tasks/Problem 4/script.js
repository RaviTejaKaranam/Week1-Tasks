var arr = ['GUVI', 'I', 'am', 'Geek'];

/* Write a function ‘transformFirstAndLast’ that takes in an array, 
  and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value. */

function transformFirstAndLast(guviGeekDescription){
  
  return {
    [guviGeekDescription[0]] : guviGeekDescription[guviGeekDescription.length - 1]
  }
}
transformFirstAndLast(arr)
const guviGeek = transformFirstAndLast(arr)
console.log(guviGeek)