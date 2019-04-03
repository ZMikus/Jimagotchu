//-----------------CLASSES

class Tamagotchi{
	constructor() {
		this.boredom = 0;
		this.hunger = 0;
		this.sleepiness = 0;
		this.age = 0;
	}
};

//--------------------GAME

const game = {
	timer: 0,
	currentPet: null,
	gameOn: false,
	lights: false,
	startTimer() {
		if (this.gameOn === false) {
			const pet1 = new Tamagotchi()
			this.currentPet = pet1 
			setInterval(function() {
				game.gameOn = true

				game.increaseBoredom()
				$('#boredom').text('Boredom: ' + game.currentPet.boredom)

				game.increaseHunger()
				$('#hunger').text('Hunger: ' + game.currentPet.hunger)

				game.increaseSleepiness()
				$('#sleepiness').text('Sleepiness: ' + game.currentPet.sleepiness)

				game.increaseAge()
				$('#age').text('Weeks: ' + game.currentPet.age)

				$('#timer').text('Days You Kept Up: ' + game.timer)

				game.gameOver()

				game.youWin()

				game.timer++
			}, 1000)
			
		}

	},
	increaseBoredom() {
		if((this.timer % 5 === 0) && (this.currentPet.boredom < 10)){
			this.currentPet.boredom +=7;
		}
	},
	decreaseBoredom(){
		if(this.currentPet.boredom >= 0){
		this.currentPet.boredom -=2;}
	},

	increaseHunger(){
		if((this.timer > 0) && (this.timer % 7 === 0) && (this.currentPet.hunger < 10)){
			this.currentPet.hunger += 5;
		}
	},
	decreaseHunger(){
		if(this.currentPet.hunger >= 0)
		this.currentPet.hunger -=2;
	},
	increaseSleepiness(){
		if((this.timer > 0) && (this.timer % 8 === 0) && (this.currentPet.sleepiness < 10)){
			this.currentPet.sleepiness += 8;
		}
	},
	decreaseSleepiness(){
		if(this.currentPet.sleepiness >= 0)
		this.currentPet.sleepiness -=3;
		},
	increaseAge(){
		if((this.timer > 0) && (this.timer % 7 === 0)){
			this.currentPet.age += 1;
		}
	},
	gameOver(){
		if(this.currentPet.boredom >= 10 || 
			this.currentPet.hunger >= 10 || 
			this.currentPet.sleepiness >= 10){
			//this.currentPet.age > 11){
			this.currentPet = null
			$('h1').text("You Didn't Keep Up..You Fail..").css("color", "red");
		}

	},
	
	youWin(){
		if(this.currentPet.age > 12) {
			this.currentPet = null
			$('h1').text("YOU PASSED!!").css("color", "green");

		}
	},
}



	// lightsOut(){
	
	// 	console.log(this.lightsOut);
	// 	}
	

//---------------LISTENERS

$('#begin-btn').on('click', () => {
	const tamaName = $('#input-box').val();
	$('h1').text(`Keep Up Wit ${tamaName}!!`); 
	game.startTimer()
});


$('#play-btn').on('click', () => {
	game.decreaseBoredom()
});

$('#feed-btn').on('click', () => {
	game.decreaseHunger()
});
	

$('#sleep-btn').on('click', () => {
	if(game.lights = true)
	game.decreaseSleepiness()
			
	});
$('#lights-out').on('click', game.lights = true)




