$(document).ready(function(){


var currentScore=0;
var losses=0;
var wins=0;
var randomNumber = Math.floor(Math.random() * 100) + 1;
$("#randomNumber").text(randomNumber);

var gems = [ 
	{
		id:"blue",	
		value: 0,
		src: "assets/images/blue.png",
		alt: "blue"
	},
	
	{
		id: "pink",	
		value: 0,
		src: "assets/images/pink.png",
		alt: "pink"
	},

	{	id: "green",	
		value: 0,
		src: "assets/images/green.png",
		alt: "green"

	},

	{	id: "orange",	
		value: 0,
		src: "assets/images/orange.png",
		alt: "orange"
	}
];


restartGame();
//renderCrystals();

function restartGame(){
	alert("hi");
	$("#currentScore").empty();
	currentScore=0;
	
	$("#randomNumber").empty();
	randomNumber = Math.floor(Math.random() * 100) + 1;
	$("#randomNumber").text(randomNumber);
	$("#jewel").empty();

	renderCrystals();

		
}



function renderCrystals(){
			for(var i = 0; i < gems.length; i++){
		gems[i].value=Math.floor(Math.random() * 12) + 1;		
	
	}


for(var i=0; i < gems.length; i++){

	//var imageCrystal=$("<img>").addClass("crystalImage");
	var imageCrystal=$("<img>").addClass("crystalImage");	
	imageCrystal.attr("src", gems[i].src);
	imageCrystal.attr("value", gems[i].value);
	console.log(gems[i].value);
	console.log(imageCrystal);

	//var imageCrystal=gems[i].src
	$("#jewel").append(imageCrystal);
	console.log(imageCrystal);
	
}
}





function checkWin(){
	if(currentScore >  randomNumber){
		alert("You lost");
		losses++;
		console.log(losses);		
		restartGame();
		//renderCrystals();
	} if(currentScore==randomNumber){
		alert("you win");
		wins++;	
		console.log(wins);	
		restartGame();
		//renderCrystals();
	} 
}



$(".crystalImage").on("click", function() {
	
	currentScore=currentScore + parseInt(($(this).attr("value")));
	$("#currentScore").text(currentScore);
	console.log(currentScore);
	
	checkWin();
})

});

//try getting rid of restart game function and just set variables etc as they should be in if statments