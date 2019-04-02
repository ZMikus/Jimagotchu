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



//-----------------CLASSES
class Tamagotchi{
	createTama(hunger, sleepiness, boredom, age, alive) {
		const tamagotchi1 = new Tamagotchi 
			this.hunger = 0,
			this.sleepiness = 0,
			this.boredom = 0,
			this.age = 0,
			this.alive = null;
	}
};


//console.log(Tamagotchi);

const tamagotchi1 = new Tamagotchi(1, 1, 1, 0, true);

console.log(tamagotchi1);

//--------------------GAME

const game = {
	gameTimer()
	// makeTama(){
	// 	for(let i = 0; i <= this.tamagotchi; i++){
	// 		const tamagotchi = new Tamagotchi(i);
	// 		this.tamagotchi.push(tamagotchi)
	// 	}
	

	const feed = () => {

	}

	const sleep = () => {

	}

	const play = () => {

	}

	const gameOver = () => {
		
	}
}}

timer = () => {
	const sec = 59;
	const timer = setInterval(function() {
		document.getElementById('timerDisplay').innerHTML='00:'+sec;
		sec--;
		if (sec === 0) {
			clearInterval(timer);
		}
	}, 1000);
}



//---------------LISTENERS

//feed button

//play button

//name
