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
var counter=0;
timer =60;
var interval;

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
    }

];
setQandA(0);
//hides screens
function hidescreen(screen) {
      screen.style.display = "none";
  }

function setQandA(QsetIndex){
    Quizquestion.textContent = questions[QsetIndex].title;
    var c = questions[QsetIndex].choices;
    for(var i =0; i<c.length;i++){
        b[i].value=c[i];
        //console.log(b[i].value=c[i]);
        b[i].textContent=c[i];
        //console.log(b[i].value);
    }
    //maybe return array that I need if its only relative
    return ;
}

function answerchecker(){
    for(var i=0; i<questions.length;i++){
        checkIfAnswer(objButton,i)
    }
}
//the problem child
function reply_click(objButton){
    for(var i=0; i<questions.length;i++){
        setQandA(i);
        //------------------
        console.log(i);
        if(objButton.value==questions[i].answer && timer!==0){
            //console.log("rigth");
            answer.textContent = "Right";
        }
        else if(objButton.value!==questions[i].answer && timer!==0){
            //console.log("wrong");
            //for some reson it double clicks so -5 is doubled so -10
            timer = timer-5;
            time.value=timer;
            time.textContent=timer;
            answer.textContent = "Wrong";
        }
    }
}
// function reply_click(clicked_id){
//     for(var questionStuff=0; questionStuff<questions.length;questionStuff++){
//             //setQandA(questionStuff);
//         Quizquestion.textContent = questions[questionStuff].title
//         var c = questions[questionStuff].choices;
//         for(var i =0; i<c.length;i++){
//             b[i].value=c[i];
//              //console.log(b[i].value=c[i]);
//             b[i].textContent=c[i];
//             var s = JSON.stringify(clicked_id)
//             console.log(s);
//             if(s=="button-1"&& questions[questionStuff].choices[0]==questions[questionStuff].answer && timer!==0){
//                 answer.textContent = "Right";
//             }
//             if(s=="button-2"&& questions[questionStuff].choices[1]==questions[questionStuff].answer && timer!==0){
//                 answer.textContent = "Right";
//             }
//             if(s=="button-3"&& questions[questionStuff].choices[2]==questions[questionStuff].answer && timer!==0){
//                 answer.textContent = "Right";
//             }
//             if(s=="button-4"&& questions[questionStuff].choices[3]==questions[questionStuff].answer && timer!==0){
//                 answer.textContent = "Right";
//             }
//             else{
//                 timer = timer-5;
//                 time.value=timer;
//                 time.textContent=timer;
//                 answer.textContent = "Wrong";
//             }
//         }
//     }
// }


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
            console.log("timer is working");
        }
    },1000);
  }


startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", function() {
    hidescreen(startScreen);
    questionScreen.style.display = "block";
});
//I think this is causing a double click but cant get buttonObj if null
setQandA(0);
console.log(b[0].value);
console.log("connected");