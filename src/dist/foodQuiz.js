"use strict";
const quizData = {
    foodPersonalities: {
        onigiri: {
            name: "Onigiri",
            description: "Comforting and reliable on the surface, but with surprising depth! You might seem simple at first, but there's much more to you than meets the eye. Practical and unpretentious, you find value in the little things.",
            image: "images/onigiri.png"
        },
        sukiyaki: {
            name: "Sukiyaki",
            description: "Bold and social, with a warm and inviting presence! You bring people together and aren't afraid to make a statement. Your vibrant personality can be intense, and while you might come with a bit of complexity, you're always worth the investment.",
            image: "images/sukiyaki.png"
        },
        bokChoy: {
            name: "Bok Choy",
            description: "The ultimate supportive friend! Always there for others, forgiving, and incredibly adaptable. You get along with everyone and can fit into any situation with grace and ease. Your flexibility is your greatest strength.",
            image: "images/bokchoy.png"
        },
        napaCabbage: {
            name: "Napa Cabbage",
            description: "Quietly introspective with hidden depths! You might blend into the background, but those who take the time to know you discover a rich, complex personality. Slightly awkward but independently minded, you can also shine in social settings when you choose to.",
            image: "images/napacabbage.png"
        },
        tonkatsu: {
            name: "Tonkatsu",
            description: "Bold and unapologetic! You make a big impression and aren't afraid to stand out. Popular but polarizing, you have a strong presence that can be overwhelming to some but magnetic to others. You're not afraid of being a bit extra.",
            image: "images/tonkatsu.png"
        },
        noodleSoup: {
            name: "Noodle Soup",
            description: "The ultimate comforter with a varied personality! Soothing and empathetic, you're the go-to person for support and warmth. Reliable and comforting, you have many layers that help others feel understood and cared for.",
            image: "images/noodlesoup.png"
        },
        frenchFries: {
            name: "French Fries",
            description: "Pure, reliable, and universally appealing! Simple yet satisfying, you're the friend everyone loves. Popular and straightforward, you bring joy and comfort in the most uncomplicated way possible.",
            image: "images/frenchfries.png"
        }
    },
    questions: [
        {
            question: "You're in a project group and one person is being annoying and rude to someone else. Do you",
            choices: [
                { text: "Tell them to stop", scores: { bokChoy: 2, noodleSoup: 1, napaCabbage: 1 } },
                { text: "Be passive aggressive towards them", scores: { tonkatsu: 1, frenchFries: 1 } },
                { text: "Don't do anything and rant about them later to your friends", scores: { sukiyaki: 1, frenchFries: 1 } },
                { text: "Tell yourself that it's okay", scores: { onigiri: 2, noodleSoup: 1 } }
            ]
        },
        {
            question: "You walk into a store in order to look around, but you can't find something. Do you",
            choices: [
                { text: "Ask an employee for help", scores: { sukiyaki: 2, frenchFries: 1 } },
                { text: "Look for it yourself", scores: { napaCabbage: 2, onigiri: 1, tonkatsu: 1 } }
            ]
        },
        {
            question: "You're looking at blind boxes, and an employee begins talking to you. Do you",
            choices: [
                { text: "Chat with them", scores: { sukiyaki: 2, frenchFries: 2 } },
                { text: "Shut down the conversation and continue looking", scores: { tonkatsu: 2, onigiri: 1 } },
                { text: "Shut down the conversation and discreetly leave", scores: { napaCabbage: 2, bokChoy: 1 } },
                { text: "Walk to a separate part of the store", scores: { noodleSoup: 2, onigiri: 1 } }
            ]
        },
        {
            question: "At a restaurant, what would you most like to order out of these?",
            choices: [
                { text: "Vegetable Napoleon", scores: { bokChoy: 2, napaCabbage: 1 } },
                { text: "Pizza", scores: { frenchFries: 2, sukiyaki: 1 } },
                { text: "Grilled Chicken", scores: { tonkatsu: 2, onigiri: 1 } },
                { text: "Curry udon", scores: { noodleSoup: 2, sukiyaki: 1 } },
                { text: "Scallops", scores: { napaCabbage: 2, tonkatsu: 1 } },
                { text: "Fried rice", scores: { sukiyaki: 2, frenchFries: 1 } }
            ]
        },
        {
            question: "What do you want to do on the weekend",
            choices: [
                { text: "Go out and party!", scores: { frenchFries: 2, sukiyaki: 1 } },
                { text: "Treat yourself to a good meal", scores: { tonkatsu: 2, noodleSoup: 1 } },
                { text: "Hang out with some friends", scores: { sukiyaki: 2, bokChoy: 1 } },
                { text: "Stay at home and recharge", scores: { onigiri: 2, noodleSoup: 1 } },
                { text: "Run errands and get a head start on the week", scores: { napaCabbage: 2, bokChoy: 1 } }
            ]
        },
        {
            question: "For your friends, are you most known as",
            choices: [
                { text: "The outgoing one", scores: { frenchFries: 2, sukiyaki: 1 } },
                { text: "The supportive and empathetic one", scores: { noodleSoup: 2, bokChoy: 1 } },
                { text: "The invisible one", scores: { napaCabbage: 2, onigiri: 1 } },
                { text: "The innocent one", scores: { onigiri: 2, noodleSoup: 1 } }
            ]
        },
        {
            question: "Your top love language",
            choices: [
                { text: "Words of Affirmation", scores: { sukiyaki: 2, noodleSoup: 1 } },
                { text: "Quality Time", scores: { frenchFries: 2, bokChoy: 1 } },
                { text: "Acts of Service", scores: { napaCabbage: 2, onigiri: 1 } },
                { text: "Receiving Gifts", scores: { tonkatsu: 2, frenchFries: 1 } },
                { text: "Physical Touch", scores: { sukiyaki: 2, noodleSoup: 1 } }
            ]
        },
        {
            question: "What's your favorite part of food?",
            choices: [
                { text: "Bold flavors", scores: { tonkatsu: 2, sukiyaki: 1 } },
                { text: "Aftertaste", scores: { noodleSoup: 2, napaCabbage: 1 } },
                { text: "Interesting textures", scores: { bokChoy: 2, onigiri: 1 } },
                { text: "Appearances", scores: { frenchFries: 2, tonkatsu: 1 } },
                { text: "Complex flavors", scores: { sukiyaki: 2, noodleSoup: 1 } }
            ]
        },
        {
            question: "In a group project, are you usually the",
            choices: [
                { text: "Team carry", scores: { tonkatsu: 2, sukiyaki: 1 } },
                { text: "Slacker", scores: { napaCabbage: 1, frenchFries: 1 } },
                { text: "Non communicator but pumps out work", scores: { onigiri: 2, noodleSoup: 1 } },
                { text: "Organizer/Leader", scores: { bokChoy: 2, napaCabbage: 1 } }
            ]
        },
        {
            question: "Favorite exercise",
            choices: [
                { text: "Walking", scores: { onigiri: 2, napaCabbage: 1 } },
                { text: "Running", scores: { bokChoy: 2, frenchFries: 1 } },
                { text: "Lifting", scores: { tonkatsu: 2, sukiyaki: 1 } },
                { text: "Gymming", scores: { frenchFries: 2, sukiyaki: 1 } },
                { text: "Biking", scores: { noodleSoup: 2, bokChoy: 1 } },
                { text: "Uhhhh sleep?", scores: { noodleSoup: 2, onigiri: 1 } }
            ]
        },
        {
            question: "How many stuffed animals do you have",
            choices: [
                { text: "None", scores: { tonkatsu: 2, frenchFries: 1 } },
                { text: "There's a few", scores: { onigiri: 2, napaCabbage: 1 } },
                { text: "There's several", scores: { noodleSoup: 2, sukiyaki: 1 } },
                { text: "Bout a dozen", scores: { bokChoy: 2, onigiri: 1 } },
                { text: "A lot…", scores: { sukiyaki: 2, noodleSoup: 1 } }
            ]
        },
        {
            question: "Quick! Don't think. Just pick your favorite:",
            choices: [
                { text: "Sleeping", scores: { noodleSoup: 2, onigiri: 1 } },
                { text: "Vegetables", scores: { bokChoy: 2, napaCabbage: 1 } },
                { text: "Money", scores: { tonkatsu: 2, frenchFries: 1 } },
                { text: "Socializing", scores: { sukiyaki: 2, frenchFries: 1 } },
                { text: "Alone time", scores: { onigiri: 2, napaCabbage: 1 } }
            ]
        }
    ]
};
let currentQuestion = 0;
let scores = {
    onigiri: 0,
    sukiyaki: 0,
    bokChoy: 0,
    napaCabbage: 0,
    tonkatsu: 0,
    noodleSoup: 0,
    frenchFries: 0
};
function startQuiz() {
    const homeScreen = document.getElementById('home-screen');
    const gameContainer = document.getElementById('game-container');
    if (homeScreen && gameContainer) {
        homeScreen.style.display = 'none';
        gameContainer.style.display = 'block';
    }
    scores = {
        onigiri: 0,
        sukiyaki: 0,
        bokChoy: 0,
        napaCabbage: 0,
        tonkatsu: 0,
        noodleSoup: 0,
        frenchFries: 0
    };
    currentQuestion = 0;
    loadQuestion();
}
function loadQuestion() {
    const questionData = quizData.questions[currentQuestion];
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const choicesContainer = document.getElementById('choices');
    const storyImage = document.getElementById('story-image');
    if (questionNumber && questionText && choicesContainer && storyImage) {
        questionNumber.textContent = `Question ${currentQuestion + 1}/${quizData.questions.length}`;
        questionText.textContent = questionData.question;
        choicesContainer.innerHTML = '';
        if (questionData.image && storyImage instanceof HTMLImageElement) {
            storyImage.src = questionData.image;
        }
        questionData.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choice.text;
            button.onclick = () => selectAnswer(index);
            choicesContainer.appendChild(button);
        });
    }
}
function selectAnswer(choiceIndex) {
    const selectedChoice = quizData.questions[currentQuestion].choices[choiceIndex];
    for (const [food, points] of Object.entries(selectedChoice.scores)) {
        scores[food] += points;
    }
    currentQuestion++;
    if (currentQuestion < quizData.questions.length) {
        loadQuestion();
    }
    else {
        showResult();
    }
}
function showResult() {
    let maxScore = 0;
    let resultFood = '';
    for (const [food, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultFood = food;
        }
    }
    const foodResult = quizData.foodPersonalities[resultFood];
    const gameContainer = document.getElementById('game-container');
    const resultContainer = document.getElementById('result-container');
    const resultTitle = document.getElementById('result-title');
    const resultImage = document.getElementById('result-image');
    const resultDescription = document.getElementById('result-description');
    if (gameContainer && resultContainer && resultTitle && resultImage && resultDescription) {
        gameContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        resultTitle.textContent = `You are ${foodResult.name}!`;
        resultImage.style.backgroundImage = `url('${foodResult.image}')`;
        resultDescription.textContent = foodResult.description;
    }
    console.log('Final Scores:', scores);
}
function restartQuiz() {
    const resultContainer = document.getElementById('result-container');
    if (resultContainer) {
        resultContainer.style.display = 'none';
    }
    startQuiz();
}
window.startQuiz = startQuiz;
window.restartQuiz = restartQuiz;
window.onload = function () {
};
//# sourceMappingURL=foodQuiz.js.map