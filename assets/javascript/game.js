//webpage loads
	//instructions
	//random number displayed
		//create random number
		//display random number
	//crystals displayed
		//create random numbers
		//link random numbers to crystals
	//tracker for user's current score
	//scoreboard with wins and losses displays but is empty
		//comparing tracker with random number
			//if it equals random number, game ends and wins increase
			//if it goes over random number, game ends and losses increase
			//if it is under random number, game continues


//user will click on crystals until they either reach the random number or go over it

var currentScore=0;
var losses
var wins
var randomNumber = Math.floor(Math.random() * 100) + 1;

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
console.log(gems[0].src);
console.log(gems[0]);


	
//calculate random numbers for crystals
	for(var i = 0; i < gems.length; i++){
		gems[i].value=Math.floor(Math.random() * 12) + 1;
		
		//gems[i].value=Math.floor(Math.random() * 12) + 1;
	};




console.log(randomNumber);
//function to render the crystals on the page
function renderCrystals(){

for(var i=0; i < gems.length; i++){
	
	//var imageCrystal=$("<img>").addClass("crystalImage");
	var imageCrystal=$("<img>").addClass("crystalImage");	
	imageCrystal.attr("src", gems[i].src);
	imageCrystal.attr("value", gems[i].value);
	console.log(gems[i].value);

	//var imageCrystal=gems[i].src
	$("#jewel").append(imageCrystal);
	console.log(imageCrystal);
};
}



//console.log(gems[0].src);
/*function renderCrystals(){
gems[0]=$("<img>").attr({
	src: "assets/images/blue.png",
	alt: "blue",
	class: "crystalImage"
});
$("#jewel").append(gems[0]);

gems[1]=$("<img>").attr({
	src: "assets/images/pink.png",
	alt: "pink",
	class: "crystalImage"
});
$("#jewel").append(gems[1]);

gems[2]=$("<img>").attr({
	src: "assets/images/green.png",
	alt: "green",
	class: "crystalImage"
});
$("#jewel").append(gems[2]);

gems[3]=$("<img>").attr({
	src: "assets/images/orange.png",
	alt: "orange",
	class: "crystalImage"
});
$("#jewel").append(gems[3]);
};
*/


//on-click events//
//when crystal is clicked, add the points to the current score AND compare current score to random number;



console.log(gems[0].value);
//gems[0].value=crystalNumber();




$("#randomNumber").text(randomNumber);


renderCrystals();

$(".crystalImage").on("click", function() {
	alert("working!" + $(this).attr("value"));
	currentScore=currentScore + parseInt(($(this).attr("value")));
	console.log(currentScore);
	$("#currentScore").text(currentScore);
	

});