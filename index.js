// Your code here
function saturdayFun(play="roller-skate"){
  return(`This Saturday, I want to ${play}!`);
}
function mondayWork(work="go to the office"){
  return(`This Monday, I will ${work}.`)
}
function wrapAdjective(string="*"){
  return function(gift="special"){
    return `You are ${string}${gift}${string}!`
  }

}
let Calculator= {
  add: function (a,b) {return a+b},
  subtract: function (a,b) {return a-b},
  multiply: function (a,b) {return a*b},
  divide:function(a,b) {return a/b},

  }
function actionApplyer(integer,array){
  let theNumber=integer

    for (let i = 0; i < array.length; i++ ){
   theNumber = array[i](theNumber)
  }
  return theNumber
}
