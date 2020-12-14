var securityQuestions = [
  {
  question: 'What was your first pet’s name?',
  expectedAnswer: 'FlufferNutter'
  },
  {
  question: 'What was the model year of your first car?',
  expectedAnswer: '1985'
  },
  {
  question: 'What city were you born in?',
  expectedAnswer: 'NYC'
  }
 ]

 /* I have a mock data of security Questions and Answers. You function should
  take the object and a pair of strings and should return if the quest is 
  present and if its valid answer */

  function chksecurityQuestions(securityQuestions,question,answer){
    for(let i = 0; i < securityQuestions.length;i++){
      let qaPair = (securityQuestions[i])
      
      if(qaPair['question'] === question && qaPair['expectedAnswer'] === answer){
        return true
      }
    }
    return false
  }

// var ques = 'What was your first pet’s name?';
// var ans  =  'FlufferNutter';
// var status = chksecurityQuestions(securityQuestions, ques, ans);
// console.log(status)

var ques = 'What was your first pet’s name?';
var ans  =  'DufferNutter';
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status)