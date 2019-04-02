	// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi


	// Instatiate your Tomagotchi

// Display a character of your choice on the screen to represent your pet

// Display the following metrics for your pet:

	// Hunger (1-10 scale)

	// Sleepiness (1-10 scale)

	// Boredom (1-10 scale)

	// Age

// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
	//eat
	//sleep button
	//play

// Add the ability to name your pet.

// Style the page.

// Increase your pet's age every x minutes

// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.

// You pet should die if Hunger, Boredom, or Sleepiness hits 10.

// Morph your pet at certain ages.

// Animate your pet across the screen while it's alive.



// //-----------------CLASSES
// class Tamagotchi{
// 	createTama(hunger, sleepiness, boredom, age, alive) {
// 		const tamagotchi1 = new Tamagotchi 
// 			this.hunger = 0,
// 			this.sleepiness = 0,
// 			this.boredom = 0,
// 			this.age = 0,
// 			this.alive = null;
// 	}
// };


// //console.log(Tamagotchi);

// const tamagotchi1 = new Tamagotchi(1, 1, 1, 0, true);

// console.log(tamagotchi1);

// //--------------------GAME

// const game = {
// 	gameTimer()
// 	// makeTama(){
// 	// 	for(let i = 0; i <= this.tamagotchi; i++){
// 	// 		const tamagotchi = new Tamagotchi(i);
// 	// 		this.tamagotchi.push(tamagotchi)
// 	// 	}
	

// 	const feed = () => {

// 	}

// 	const sleep = () => {

// 	}

// 	const play = () => {

// 	}

// 	const gameOver = () => {
		
// 	}
// }}

// timer = () => {
// 	const sec = 59;
// 	const timer = setInterval(function() {
// 		document.getElementById('timerDisplay').innerHTML='00:'+sec;
// 		sec--;
// 		if (sec === 0) {
// 			clearInterval(timer);
// 		}
// 	}, 1000);
// }



//---------------LISTENERS

// //feed button

// //play button

// //name

// //---------------USER STORY
// //Page load : NAME PET PROMPT w/ BEGIN BUTTON
// 	//User Prompted to Name Tamagachi
// 		//display the desired Name with vitals & timer

// 	//BEGIN button starts timer


// //TIMER

// const game = {
// 	let timer setInterval()
// 		//BEGIN button on name prompt starts timer
// 	name = [] //input NAME from start prompt
// 		//prompt function to input name and start timers

// 	let bordem = b
// 		bordemIncrease(){
// 		//timer function that increases b by 7 every 5 seconds
// 			//timer starts on click of BEGIN BUTTON in prompt
// 		//play button, on click decreases b by 3
// 		$('.playButton').on('click', () => {
// 			return b = (b - 3)
// 		})
		
// 		// if b >= 10 TAMAGOTCHI DIES/GAME OVER()	

// 		}

// 	let hunger = h
// 		hungerIncrease(){
// 		//timer function that increases h by 5 every 10 seconds
// 			//timer starts on click of BEGIN BUTTON in prompt
// 		//feed button, on click decreases h by 3
// 		$('.feedButton').on('click', () => {
// 			return h = (h - 3)
// 		})
// 		// if h >= 10 TAMAGOTCHI DIES/GAME OVER()		
// 	}

// 	let sleepiness = s
// 		sleepinessIncrease(){
// 		//time function that increases sleepiness by 8 every 20 seconds
// 			//timer starts on click of BEGIN BUTTON in prompt
// 		//sleep button on click decreases s by 4
// 		$('.sleepButton').on('click', () => {
// 			return s = (s - 4)
// 		})
// 		// if s >= 10 TAMAGOTCHI DIES/GAME OVER()	
// 	}

// 	let age = a
// 		ageIncrease(){
// 		//time function that increases age by 1 every 30 seconds
// 			//timer starts on click of BEGIN BUTTON in prompt
// 		// if a > 10 TAMAGOTCHI DIES/GAME OVER
// 	}
// 	//display GAME OVER function when b, h, s, >= 10 || a = 11
// }

//INCREASE VALUES:

	//every 05 seconds: boredom value ---> increases by 7
	//every 10 seconds: hunger ---> increases by 5
	//every 20 seconds: sleepiness ---> increases by 8
	//every 30 seconds: age++ 
		//at age 11, Tamagochi dies - - - user restarts from beginning

//If any variable of the Tamagatchi  > 10 OR Age = 11 ---> Tamagotchi dies/GAME OVER
	

//BUTTONS :
	//on click, PLAY button decreases play value by 3
	//on click, FEED button decreases hunger value by 3
	//on click, SLEEP button decreases sleepiness by 4




//********************REBUILD********************************

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
		const pet1 = new Tamagotchi()
		this.currentPet = pet1 
		setInterval(function() {
			game.increaseBoredom()
			game.increaseHunger()
			game.increaseSleepiness()
			game.increaseAge()

			console.log(game.currentPet, ' This is the pet boredom log');
			game.timer++
		}, 1000)
	},
	// name = $('#input-box').val() //input NAME from start prompt
	increaseBoredom() {
		if(this.timer % 5 === 0){
			this.currentPet.boredom +=7;
		}
	},
	decreaseBoredom(){
		this.currentPet.boredom -=3;
	},

	increaseHunger(){
		if(this.timer % 7 === 0){
			this.currentPet.hunger += 5;
		}
	},
	decreaseHunger(){
		this.currentPet.hunger -=3;
	},
	increaseSleepiness(){
		if(this.timer % 8 === 0){
			this.currentPet.sleepiness += 8;
		}
	},
	decreaseSleepiness(){
		this.currentPet.sleepiness -=4;
		},
	increaseAge(){
		if(this.timer % 30 === 0){
			this.currentPet.age += 1;
		}
	}

}
//-----------------------------
// 	let timer = setInterval(updatetimer, 1000)
// 	const updateClock() {
// 		//BEGIN button on name prompt starts timer
// 	}
// 	let bordem = b
// 		bordemIncrease(){
// 		//timer function that increases b by 7 every 5 seconds
// 			//timer starts on click of BEGIN BUTTON in prompt
// 		//play button, on click decreases b by 3
// 		// $('.playButton').on('click', () => {
// 		// 	return b = (b - 3)
// 		})
		
// 		// if b >= 10 TAMAGOTCHI DIES/GAME OVER()	

// 		}

// 	let hunger = h
// 		hungerIncrease(){
// 		//timer function that increases h by 5 every 10 seconds
// 			//timer starts on click of BEGIN BUTTON in prompt
// 		//feed button, on click decreases h by 3
// 		$('.feedButton').on('click', () => {
// 			return h = (h - 3)
// 		})
// 		// if h >= 10 TAMAGOTCHI DIES/GAME OVER()		
// 	}

// 	let sleepiness = s
// 		sleepinessIncrease(){
// 		//time function that increases sleepiness by 8 every 20 seconds
// 			//timer starts on click of BEGIN BUTTON in prompt
// 		//sleep button on click decreases s by 4
// 		$('.sleepButton').on('click', () => {
// 			return s = (s - 4)
// 		})
// 		// if s >= 10 TAMAGOTCHI DIES/GAME OVER()	
// 	}

// 	let age = a
// 		ageIncrease(){
// 		//time function that increases age by 1 every 30 seconds
// 			//timer starts on click of BEGIN BUTTON in prompt
// 		// if a > 10 TAMAGOTCHI DIES/GAME OVER
// 	}
// 	//display GAME OVER function when b, h, s, >= 10 || a = 11
// }

//---------------LISTENERS


//
$('#begin-btn').on('click', () => {
	const tamaName = $('#input-box').val();
	$('h2').text(`${tamaName} IS ALIVE! GAME ON!!`); 
	game.startTimer(), game.gameOn = false
});


$('#play-btn').on('click', () => {
	//console.log("play button works");
	game.currentPet.decreaseBoredom
})

$('#feed-btn').on('click', () => {
	console.log("feed button works");
	game.currentPet.decreaseHunger
})

$('#sleep-btn').on('click', () => {
	console.log("sleep button works");
	game.currentPet.decreaseSleepiness
})


