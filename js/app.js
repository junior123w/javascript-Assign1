// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
const synth = window.speechSynthesis;
const speak = document.getElementById('speak');
const random = document.querySelectorAll('.random');
const generate = document.getElementById('generate');
const reset = document.getElementById('reset');
const textContainer = document.getElementById('textContainer');

let nouns = ['A car', 'The cat', 'The tree', 'A book', ' A chair'];
let noun=['goat','monkey','cow','fish','bug'];
let verbs = ['jumped', 'ran', 'sang', 'danced', 'wrote'];
let adjectives = ['a beautiful', 'a happy', 'a exciting', 'a tall', 'a delicious'];
let places = ['at a park', 'at a beach', 'in the mountains', 'at a library', 'inside the restaurant'];

let story = [];

/* Functions
-------------------------------------------------- */
function getRandomWord(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function generateStory() {
	story = [
		getRandomWord(nouns),
		getRandomWord(verbs),
		getRandomWord(adjectives),
		getRandomWord(noun),
		getRandomWord(places)
	];
	displayStory();
}

function displayStory() {
	textContainer.textContent = story.join(' ');
}

function speakNow(string) {
	const utterThis = new SpeechSynthesisUtterance(string);
	synth.speak(utterThis);
}


/* Event Listeners
-------------------------------------------------- */


random.forEach(function (button, index) {
	button.addEventListener('click', function () {
		let randomWord = '';

		switch (index) {
			case 0:
				randomWord = getRandomWord(nouns);
				break;
			case 1:
				randomWord = getRandomWord(verbs);
				break;
			case 2:
				randomWord = getRandomWord(adjectives);
				break;
			case 3:
				randomWord = getRandomWord(nouns);
				break;
			case 4:
				randomWord = getRandomWord(places);
				break;
			default:
				break;
		}

		story[index] = randomWord;
		displayStory();
	});
});

generate.addEventListener('click', generateStory);

reset.addEventListener('click', function () {
	story = [];
	displayStory();
});

// The click event handler for the button that speaks the text contained in the above var textToSpeak
speak.addEventListener('click', function () {
	speakNow(textContainer.textContent);
});