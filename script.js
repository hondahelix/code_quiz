// add hooks here
//startscreen hooks
var startScreen = document.querySelector("#startscreen");
var startButton = document.querySelector("#start-game");
//question hooks
var questionScreen = document.querySelector("#questions");
var Quizquestion = document.querySelector("#question-title");
var b = [document.querySelector("#button-1"),
        document.querySelector("#button-2"),
        document.querySelector("#button-3"),
        document.querySelector("#button-4")
    ];
var allQButtons = document.querySelector("#choices");
var answer = document.querySelector("#correctAnswer");
//end screen hooks
var endScreen = document.querySelector("#endscreen");
var finalScore = document.querySelector("#finalscore");
//global variables 
var time = document.querySelector(".navbar-text");
var score=0;
var timer =60;
var interval;
var current = 0;
var questions = [
    {
        title:"What is a possible value of a boolean?",
        choices: ["number","true","string","null"],
        answer: "true"
    },
    {
        title:"How do you declare a variable in JS?",
        choices: ["int","class","float","var"],
        answer: "var"
    },
    {
        title:"What method breaks a string into a array?",
        choices: ["split()","toString()","hungry()","cut()"],
        answer: "split()"
    },
    {
        title:"What is not a loop that JavaScript supports?",
        choices: ["for","circle","while","for/in"],
        answer: "circle"
    },
    {
        title:"What car brand is my last name?",
        choices: ["Toyota","Suzuki","Mitsubishi","Honda"],
        answer: "Honda"
    },

];

//hides screens
function hidescreen(screen) {
      screen.style.display = "none";
}
//sets the values of the buttons
function setQandA(QsetIndex){
    if (QsetIndex<questions.length){
        Quizquestion.value = questions[QsetIndex].title;
        Quizquestion.textContent = questions[QsetIndex].title;
        var c = questions[QsetIndex].choices;
        for(var i =0; i<c.length;i++){
            b[i].value=c[i];
            //console.log(b[i].value=c[i]);
            b[i].textContent=c[i];
            console.log(b[i].value);
        }
    }
    //if end of questions goes to endscreen
    else{
        hidescreen(questionScreen);
        score= score+timer;
        finalpage();
        timer =0;
        endScreen.style.display = "block";
    }
}

//the problem child
// got it to work by adding a event listener to each button
//checks to see if right answer
function runIt(){
    console.log("----------");
    console.log(this);
    console.log("----------");
    if(this.value==questions[current].answer && timer!==0){
        console.log("right");
        answer.textContent = "Right";
        score = score+5;
        current++;
    }
    else if(this.value!==questions[current].answer && timer!==0){
        console.log("wrong");
        timer = timer-10;
        time.value=timer;
        time.textContent=timer;
        //console.log(timer);
        answer.textContent = "Wrong";
        current++;
    } 
}
//timer
function startTimer(event){
    event.preventDefault();
    console.log("you hit play");
    interval= setInterval(function(){
        if(timer<=0){
            clearInterval(interval);
            time.textContent=0;
            hidescreen(questionScreen);
            endScreen.style.display = "block";
            finalpage();
        }
        else{
            timer--;
            time.value=timer;
            time.textContent = time.value;
            console.log(timer);
        }
    },1000);
}
function finalpage(){
    finalScore.value= score;
    finalScore.textContent="Your score is " + score +"!!!";
}
function save(){
    var initials="";
    initials = document.getElementById("initials").value;
    console.log(initials);
    localStorage.setItem("initials",initials);
    localStorage.setItem("score",score);
    window.location.href = "highscores.html";

}
//event listeners 
startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", function() {
    hidescreen(startScreen);
    questionScreen.style.display = "block";
});
startButton.addEventListener("click", function() {
    setQandA(current);
    hidescreen(startScreen);
    questionScreen.style.display = "block";
});
//at first had a check directly on the buttons on the html
//but got messed up now it works better but has a lot of event listeners 
allQButtons.addEventListener("click", function() {
    setQandA(current);
});
b[0].addEventListener("click", runIt); 
b[1].addEventListener("click", runIt);
b[2].addEventListener("click", runIt);
b[3].addEventListener("click", runIt);

//console.log("connected");