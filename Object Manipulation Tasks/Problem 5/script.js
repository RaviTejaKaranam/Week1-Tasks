/* Write a function “fromListToObject' which takes in an array of arrays,
 and returns an object with each pair of elements in the array as a key-value
  pair. */

  var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
  function fromListToObject(carDescrptionArray){
    let obj = {}
    for(let i = 0;i < array.length;i++){
      let key = array[i][0]
      let value = array[i][1]
      obj[key] = value
    }
    return obj
  }

  const returnedObject = fromListToObject(array)
  console.log(returnedObject)