// add hooks here
var startScreen = document.querySelector("#startscreen");
var startButton = document.querySelector("#start-game");
var questionScreen = document.querySelector("#questions");
var endscreen = document.querySelector("#endscreen");
console.log(startScreen.button);

var questions = [
    {
        title:"what is my name?",
        choices: ["","","Faran",""],
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

console.log("connected");