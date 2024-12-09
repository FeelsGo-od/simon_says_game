const words = [
    "apple", "bottle", "car", "dream", "elephant", "forest", "giraffe", "hat", "ice", "jungle",
    "kite", "lamp", "mountain", "notebook", "ocean", "penguin", "quilt", "river", "stone", "tree",
    "umbrella", "vase", "whale", "xylophone", "yacht", "zebra", "airplane", "ball", "cat", "door",
    "energy", "flower", "guitar", "house", "island", "jacket", "key", "lion", "mirror", "night",
    "orange", "pencil", "queen", "rain", "star", "tiger", "unicorn", "violin", "window", "yellow",
    "zoo", "actor", "bird", "cloud", "desert", "engine", "fire", "garden", "hill", "idea", "jump",
    "kangaroo", "leaf", "moon", "nest", "owl", "picture", "quiet", "road", "sun", "towel", "under",
    "victory", "wind", "x-ray", "yogurt", "zipper", "angle", "bark", "coin", "dance", "earth", "fan",
    "grape", "hammer", "igloo", "jewel", "knife", "ladder", "map", "nail", "oak", "paint", "quicksand",
    "ring", "sock", "table", "ultra", "valley", "wolf", "xenon", "yawn", "zero", "ant", "bench", "cup",
    "dragon", "exit", "feather", "glove", "heart", "ink", "jeep", "kettle", "light", "mouse", "net",
    "octopus", "phone", "quiz", "rope", "shoe", "tent", "unit", "vapor", "whisker", "xenophobia", "year",
    "zinc", "arch", "biscuit", "circle", "diamond", "eraser", "flag", "goose", "helmet", "iceberg", "jelly",
    "kite", "leg", "motor", "noodle", "ostrich", "plate", "quartz", "ring", "sail", "train", "uncle", "village",
    "wave", "xylitol", "yarn", "zip", "angle", "beetle", "crown", "dart", "eel", "feast", "gate", "horn", "iron",
    "juice", "kangaroo", "leaf", "meter", "napkin", "oil", "pipe", "queen", "rabbit", "stove", "towel", "umbrella",
    "vault", "wheel", "xylophone", "yogurt", "zebra", "alarm", "bat", "chalk", "desk", "engine", "fish", "grain",
    "hose", "insect", "jar", "kite", "lock", "mask", "nose", "oven", "pan", "quote", "rose", "salt", "tree", "unit",
    "vase", "wall", "xylophone", "yawn", "zipper", "apple", "ball", "cat", "dice", "ear", "frog", "glass", "hat",
    "island", "juice", "key", "lamp", "mango", "net", "owl", "pear", "quill", "ring", "snake", "tent", "umbrella",
    "van", "wheel", "xylophone", "yellow", "zebra", "anchor", "beach", "clock", "dust", "egg", "frog", "gold",
    "helmet", "ivy", "jug", "kettle", "lizard", "monkey", "nest", "ocean", "pear", "quilt", "roof", "stone", "tree",
    "unicorn", "violet", "whale", "xylophone", "yacht", "zebra", "arrow", "bear", "carrot", "door", "elephant", "fan",
    "glove", "hand", "igloo", "jam", "kite", "lamp", "mop", "net", "onion", "pencil", "queen", "rope", "star", "tree",
    "up", "violet", "wolf", "xylophone", "yellow", "zoo", "acorn", "box", "cloud", "drum", "ear", "frog", "guitar",
    "hat", "ice", "jelly", "key", "lion", "moon", "nail", "owl", "pear", "queen", "rain", "sock", "tent", "umbrella",
    "vase", "wave", "x-ray", "yak", "zebra", "ant", "ball", "cup", "dolphin", "egg", "frog", "gate", "hat", "ice",
    "jump", "kangaroo", "leaf", "mop", "nest", "orange", "pear", "queen", "rock", "star", "train", "umbrella", "vase",
    "whale", "xylophone", "yak", "zebra", "anchor", "bat", "cat", "duck", "elephant", "fish", "goat", "hat", "island",
    "juice", "kite", "lion", "mountain", "nest", "octopus", "pen", "queen", "rabbit", "sun", "tiger", "umbrella",
    "van", "whale", "xylophone", "yogurt", "zebra", "arm", "bird", "carrot", "drum", "egg", "fish", "grape", "hat",
    "ice", "jam", "kite", "lamp", "mouse", "net", "owl", "pear", "queen", "rock", "star", "tree", "up", "vase", "whale",
    "xylophone", "yarn", "zebra", "apple", "balloon", "car", "door", "elephant", "frog", "giraffe", "hat", "island",
    "jacket", "key", "lamp", "monkey", "net", "orange", "pear", "quilt", "rose", "star", "tree", "umbrella", "vase",
    "whale", "xylophone", "yak", "zebra"
];


const timeButtons = document.getElementById("time-buttons");
let gameMemory = [];
let randomIndex = '';
let interval;
let gameDuration = 30;

function getRandIndex() {
    return Math.floor(Math.random() * words.length);
}

// *** START A GAME ***

// Set Time Of Gameplay
timeButtons.addEventListener('click', (e) => {
    if(e.target.type === 'button') {
        gameDuration = e.target.id;
        if (!e.target.classList.contains('active')) {
            timeButtons.querySelectorAll('button').forEach((button) => {
                if(button.classList.contains('active')) {
                    button.classList.remove('active');
                }
            })
            e.target.classList.add('active');
        }
        // check if game is in process
        if (interval) {
            startGame();
        }
    }
});

const startGame = () => {
    clearInterval(interval);

    if (words.length <= 1) {
        simon_word.textContent = 'You played enough for this time(you used all words) ;)'
        simon_input.style.display = 'none';
        simon_submit.style.display = 'none';
        users_points.textContent = '1000000';
        countdown.textContent = '';
        return;
    }

    setTimeout(() => {
    // configure game
    playground.style.background = '#fff';
    simon_input.style.display = 'block';
    simon_submit.style.display = 'block';

    // generate new random word
    randomIndex = getRandIndex();
    simon_word.textContent = words[randomIndex];
    }, 1000)

    interval = setInterval(() => {
        if (gameDuration <= 0) {
            countdown.textContent = "Time's over";
            simon_input.style.display = 'none';
            simon_submit.style.display = 'none';
            simon_word.textContent = "Play again.";
            clearInterval(interval);
        } else if (simon_word.textContent == 'You lose, try again!' || words.length <= 1) {
            clearInterval(interval);
            countdown.textContent = "";
        } else {
            countdown.textContent = `${gameDuration}...`;
            gameDuration--;
        }
    }, 1000)
}

play_btn.addEventListener('click', () => {
    startGame();
})

function gameEngine() {
    if (words.length <= 1) {
        simon_word.textContent = 'You played enough for this time(you used all words) ;)'
        simon_input.style.display = 'none';
        simon_submit.style.display = 'none';
        users_points.textContent = '1000000';
        countdown.textContent = '';
        return;
    }

    // save new word to current game's memory / delete from main words array
    gameMemory.push(words[randomIndex]);
    words.splice(randomIndex, 1);
    if (simon_input.value.replace(/\s/g, '').toLowerCase() !== gameMemory.toString()) {
        simon_word.textContent = 'You lose, try again!';
        simon_input.style.display = 'none';
        simon_submit.style.display = 'none';
        play_btn.textContent = 'Play again';
        simon_input.value = '';
        gameMemory = [];
        return false;
    }

    // add points
    let newAmount = +users_points.innerHTML + 10;
    users_points.innerHTML = newAmount;

    // show next word
    randomIndex = getRandIndex();
    simon_word.textContent = words[randomIndex];

    // configure context
    simon_input.value = '';
}

simon_submit.addEventListener('click', () => {
    gameEngine();
})

simon_input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter' && !e.shiftKey) {
        gameEngine();
    }
})