/* Write a function called 'transformGeekData' that transforms some set 
of data from one format to another. */

var arr = [
  [
    ["firstName", "Vasanth"],
    ["lastName", "Raja"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
];

function transformGeekData(geeksDescription){
  var descriptionArray = []
  for(let i = 0; i < geeksDescription.length;i++){
    let personDescription = geeksDescription[i]
    var obj = {}
    for(let j = 0;j < personDescription.length;j++){
      // console.log(personDescription[j])
      obj[personDescription[j][0]] = personDescription[j][1]
    }
    descriptionArray.push(obj)
  }
  return descriptionArray
  
}

let transformedData = transformGeekData(arr)
console.log(transformedData)