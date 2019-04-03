//-----------------CLASSES

class Tamagotchi{
	constructor() {
		this.boredom = 0;
		this.hunger = 0;
		this.sleepiness = 0;
		this.age = 0;;
	}
};

//--------------------GAME

const game = {
	timer: 0,
	currentPet: null,
	gameOn: false,
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
				$('#age').text('Age: ' + game.currentPet.age)

				$('#timer').text('Timer: ' + game.timer)
				game.gameOver()
				game.timer++
			}, 1000)
		}

	},
	increaseBoredom() {
		if((this.timer > 0) && (this.timer % 5 === 0) && (this.currentPet.boredom < 10)){
			this.currentPet.boredom +=7;
		}
	},
	decreaseBoredom(){
		this.currentPet.boredom -=2;
	},

	increaseHunger(){
		if((this.timer > 0) && (this.timer % 7 === 0) && (this.currentPet.hunger < 10)){
			this.currentPet.hunger += 5;
		}
	},
	decreaseHunger(){
		this.currentPet.hunger -=2;
	},
	increaseSleepiness(){
		if((this.timer > 0) && (this.timer % 8 === 0) && (this.currentPet.sleepiness < 10)){
			this.currentPet.sleepiness += 8;
		}
	},
	decreaseSleepiness(){
		this.currentPet.sleepiness -=3;
		},
	increaseAge(){
		if((this.timer > 0) && (this.timer % 15 === 0)){
			this.currentPet.age += 1;
		}
	},
	gameOver(){
		if(this.currentPet.boredom >= 10 || 
			this.currentPet.hunger >= 10 || 
			this.currentPet.sleepiness >= 10 ||
			this.currentPet.age > 10){
			this.clearInterval("#timer")
		}
	}
}

//---------------LISTENERS

$('#begin-btn').on('click', () => {
	const tamaName = $('#input-box').val();
	$('h2').text(`${tamaName} is ALIVE! Keep it that way!!`); 
	game.startTimer()
});


$('#play-btn').on('click', () => {
	game.decreaseBoredom()
})

$('#feed-btn').on('click', () => {
	game.decreaseHunger()
})

$('#sleep-btn').on('click', () => {
	game.decreaseSleepiness()
})


