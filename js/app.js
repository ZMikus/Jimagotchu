//---------------------------CLASSES

class Tamagotchi{
	constructor() {
		this.boredom = 0;
		this.hunger = 0;
		this.sleepiness = 0;
		this.age = 0;
	}
};

//-----------------------------GAME

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

				game.displayPics()

				game.gameOver()

				game.youWin()

				game.timer++
			}, 1000)
			
		}

	},
	increaseBoredom() {
		if((this.timer % 5 === 0) && (this.currentPet.boredom < 10)){
			this.currentPet.boredom +=5;
		}
		
	},
	decreaseBoredom(){
		if(this.currentPet.boredom >= 2){
			this.currentPet.boredom -=2;

		}
	},

	increaseHunger(){
		if((this.timer > 0) && (this.timer % 7 === 0) && (this.currentPet.hunger < 10)){
			this.currentPet.hunger += 7;
		}
	},
	decreaseHunger(){
		if(this.currentPet.hunger >= 2) {
			this.currentPet.hunger -=2;
		}
	},
	increaseSleepiness(){
		if((this.timer > 0) && (this.timer % 8 === 0) && (this.currentPet.sleepiness < 10)){
			this.currentPet.sleepiness += 8;
		}
	},
	decreaseSleepiness(){
		if(this.currentPet.sleepiness >= 3)
			this.currentPet.sleepiness -=3;
		},
	increaseAge(){
		if((this.timer > 0) && (this.timer % 7 === 0)){
			this.currentPet.age += 1
			game.lights = false;
		}
	},
	gameOver(){
		if(this.currentPet.boredom >= 10 || 
			this.currentPet.hunger >= 10 || 
			this.currentPet.sleepiness >= 10){
			//this.currentPet.age > 11){
			this.currentPet = null
			$('h1').text("You Didn't Keep Up..You Fail..").css("color", "red");
			$('#displayed-pic').attr('src',"https://i.imgur.com/viuje49.png");
			$('#instructions').text("you should know the shortcut from here..").css("color", "salmon")
		}

	},
	
	youWin(){
		if(this.currentPet.age > 12) {
			this.currentPet = null
			$('h1').text("YO! YOU PASSED!!").css("color", "salmon");
			$('#displayed-pic').attr('src',"https://i.imgur.com/NJkRCvQ.png")
		}
	},
	displayPics(){
		if(this.currentPet.boredom >= 5){
			$('#displayed-pic').attr('src',"https://i.imgur.com/DoVJpdX.png")	}

	 	if(this.currentPet.hunger >= 6) {
			$('#displayed-pic').attr('src',"https://i.imgur.com/UzTCR6P.png")	}

		if(this.currentPet.sleepiness > 7) {
			$('#displayed-pic').attr('src', "https://i.imgur.com/rkDxfGG.png")	}

	}
}

//--------------------------LISTENERS

$('#begin-btn').on('click', () => {
	const tamaName = $('#input-box').val()
	if(tamaName === "Jim"){
		$('h1').text(`Keep Up Wit ${tamaName}!!`); 
		game.startTimer()
	}
});

$('#play-btn').on('click', () => {
	game.decreaseBoredom()
});

$('#feed-btn').on('click', () => {
	game.decreaseHunger()
});
	
$('#sleep-btn').on('click', () => {
	if(game.lights === true) {
	game.decreaseSleepiness()
}});

$('#light-btn').on('click', () => {
	game.lights = true;
	console.log(game.lights);
});




