$(document).ready(function(){
var magic8Ball = {};
magic8Ball.possibleAnswers=["It's in the stars", "Not Likely", "Never", "Not in a million years", "Absolutely", "Only if you really wish for it", "Only time will tell", "Unsure, try asking again", "It's beyond my knowledge", "No", "Yes"];
$("#answer").hide();

//Defines the method
magic8Ball.askQuestion = function(question) {
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").fadeIn(2000);
	var randomNumber = Math.random();
	var randomNumberForAnswers = randomNumber * this.possibleAnswers.length;
	var randomIndex = Math.floor(randomNumberForAnswers);
	var answer = this.possibleAnswers[randomIndex];

	//console.log(question);
	//console.log(answer);
	$("#answer").text( answer );
};

var onClick = function(){
	$("#answer").hide();
 	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout(
		function () {
			var question = prompt("Type any yes or no question");
			magic8Ball.askQuestion(question);

		}, 500);
	$("#8ball").effect("shake");
};

$("#questionButton").click(onClick);
//magic8Ball.askQuestion("Will I be president?");
});
