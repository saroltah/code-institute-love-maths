// wait for dom finish loading before running the game
//get the button elements and add event listener to them

document.addEventListener("DOMContentLoaded", function(){
  let buttons=document.getElementsByTagName("button");

  for(let button of buttons) {
      button.addEventListener("click", function()
      {
        if (this .getAttribute("data-type")==="submit"){
          alert("You clicked Submit");
        }else{alert(`you clicked ${gameType}`)

        }
      })
  }
})
// this refers to the button that was clicked, it gets attribute, if it is submit, it has the function. 
function runGame(){
//random number between 1 and 25, math.floor egész számmá kerekíti, +1 hogy ne nulláról induljon, hanem 1ről
let num1=Math.floor(Math.random()*25)+1;
let num2=Math.floor(Math.random()*25)+1;
}
function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

}
function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){

}