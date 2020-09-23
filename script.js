// add hooks here
var startScreen = document.querySelector("#startscreen");
var startButton = document.querySelector("#start-game");

var questionScreen = document.querySelector("#questions");
var Quizquestion = document.querySelector("#question-title");
var b = [document.querySelector("#button-1"),
        document.querySelector("#button-2"),
        document.querySelector("#button-3"),
        document.querySelector("#button-4")
    ];
var answer = document.querySelector("#correctAnswer");

var endScreen = document.querySelector("#endscreen");

var time = document.querySelector(".navbar-text");
var RightAnswercounter=0;
var timer =60;
var interval;
var current = 0;
var questions = [
    {
        title:"what is my name?",
        choices: ["Jon","Bob","Faran","Joe"],
        answer: "Faran"
    },
    {
        title:"yoyoyo",
        choices: ["a","e","z","o"],
        answer: "z"
    },
    {
        title:"why is this so difficult",
        choices: ["new","tired","hungry","stressed"],
        answer: "tired"
    },

];
//setQandA(0);
//hides screens
function hidescreen(screen) {
      screen.style.display = "none";
  }

function setQandA(QsetIndex){
    if (QsetIndex<questions.length){
        Quizquestion.textContent = questions[QsetIndex].title;
        var c = questions[QsetIndex].choices;
        for(var i =0; i<c.length;i++){
            b[i].value=c[i];
            //console.log(b[i].value=c[i]);
            b[i].textContent=c[i];
            console.log(b[i].value);
        }
    }
    else{
        hidescreen(questionScreen);
        time.textContent =0;
        endScreen.style.display = "block";
    }
    //maybe return array that I need if its only relative
    return b;
}

function answerchecker(){
    for(var i=0; i<questions.length;i++){
        checkIfAnswer(objButton,i)
    }
}
//the problem child
//maybe add event listner to each button?
//got to work by having current index of answer as a global not a for loop
function reply_click(objButton){
        setQandA(current);
        console.log("----------");
        console.log(b[0].value);
        console.log("----------");
        //------------------
        //console.log(i);
        if(objButton.value==questions[current].answer && timer!==0){
            console.log("rigth");
            answer.textContent = "Right";
            current++;
        }
        else if(objButton.value!==questions[current].answer && timer!==0){
            console.log("wrong");
            //for some reson it double clicks so -5 is doubled so -10
            //doing this ceacuse runs through every time for every thing in problems object
            timer = timer-10;
            time.value=timer;
            time.textContent=timer;
            console.log(timer);
            answer.textContent = "Wrong";
            current++;
        }
}


function startTimer(event) {
    event.preventDefault();
    console.log("you hit play");
    interval= setInterval(function(){
        if(timer<=0){
            clearInterval(interval);
            time.textContent=0;
            hidescreen(questionScreen);
            endScreen.style.display = "block";
        }
        else{
            timer--;
            time.value=timer;
            time.textContent = time.value;
            console.log(timer);
        }
    },1000);
  }



startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", function() {
    hidescreen(startScreen);
    questionScreen.style.display = "block";
});
//I think this is causing a double click but cant get buttonObj if null
setQandA(current);
//console.log(b[0].value);
console.log("connected");