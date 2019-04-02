//-----------------CLASSES
class Tamagotchi{
	constructor() {
		this.boredom = 1;
		this.hunger = 1;
		this.sleepiness = 1;
		this.age = 0;
		this.alive = null;
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
				game.increaseSleepiness()
				game.increaseAge()

				console.log(game.currentPet, ' This is the pet boredom log');
				game.timer++
			}, 1000)
		}
	},
	increaseBoredom() {
		if((this.timer > 0) && (this.timer % 5 === 0)){
			this.currentPet.boredom +=7;
		}
	},
	decreaseBoredom(){
		this.currentPet.boredom -=2;
	},

	increaseHunger(){
		if((this.timer > 0) && (this.timer % 7 === 0)){
			this.currentPet.hunger += 5;
		}
	},
	decreaseHunger(){
		this.currentPet.hunger -=2;
	},
	increaseSleepiness(){
		if((this.timer > 0) && (this.timer % 8 === 0)){
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


