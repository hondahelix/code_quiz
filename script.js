// add hooks here
var startScreen = document.querySelector("#startscreen");
var startButton = document.querySelector("#start-game");

var questionScreen = document.querySelector("#questions");
var Quizquestion = document.querySelector("#question-title");
var b = [document.querySelector("#button-1"),
        document.querySelector("#button-2"),
        document.querySelector("#button-3"),
        document.querySelector("#button-4"),];

var endscreen = document.querySelector("#endscreen");
console.log(b);

var questions = [
    {
        title:"what is my name?",
        choices: ["Jon","Bob","Faran","Joe"],
        answer: "Faran"
    },
];

//hides screens
function hidescreen(screen) {
    if (screen.style.display === "none") {
      screen.style.display = "block";
    } else {
      screen.style.display = "none";
    }
  }

function setQandA(QsetIndex){
    Quizquestion.textContent = questions[QsetIndex].title
    var c = questions[QsetIndex].choices;
    for(var i =0; i<c.length;i++){
        b[i].value=c[i];
        b[i].textContent=c[i];
        console.log(b[i].value);
    }
}

function checkIfRight(){
    
}


startButton.addEventListener("click", function() {
    hidescreen(startScreen);
    questionScreen.style.display = "block";
});
questionScreen.addEventListener("click", function() {
    //hidescreen(questionScreenn);
});
endscreen.addEventListener("click", function() {
    hidescreen(endscreen);
});

setQandA(0)
console.log(b[0].value);

console.log("connected");