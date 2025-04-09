"use strict";
const quizData = {
    foodPersonalities: {
        onigiri: {
            name: "Onigiri",
            image: "images/onigiri.png"
        },
        sukiyaki: {
            name: "Sukiyaki",
            image: "images/sukiyaki.png"
        },
        bokChoy: {
            name: "Bok Choy",
            image: "images/bokchoy.png"
        },
        napaCabbage: {
            name: "Napa Cabbage",
            image: "images/napacabbage.png"
        },
        tonkatsu: {
            name: "Tonkatsu",
            image: "images/tonkatsu.png"
        },
        noodleSoup: {
            name: "Noodle Soup",
            image: "images/noodlesoup.png"
        },
        frenchFries: {
            name: "French Fries",
            image: "images/frenchfries.png"
        }
    },
    questions: [
        {
            question: "It's your day off. How do you spend it?",
            choices: [
                { text: "Relaxing at home with a good book or show", scores: { onigiri: 2, napaCabbage: 1, noodleSoup: 1 } },
                { text: "Inviting friends over for a gathering", scores: { sukiyaki: 2, tonkatsu: 1, frenchFries: 2 } },
                { text: "Going on an adventure or trying something new", scores: { bokChoy: 2, frenchFries: 1, sukiyaki: 1 } },
                { text: "Taking care of errands and organizing your space", scores: { napaCabbage: 2, onigiri: 1, bokChoy: 1 } }
            ]
        },
        {
            question: "How would your friends describe you?",
            choices: [
                { text: "Reliable and comforting", scores: { onigiri: 2, noodleSoup: 2, napaCabbage: 1 } },
                { text: "Energetic and fun-loving", scores: { frenchFries: 2, bokChoy: 1, sukiyaki: 1 } },
                { text: "Thoughtful and deep", scores: { tonkatsu: 2, noodleSoup: 1, napaCabbage: 1 } },
                { text: "Adaptable and easygoing", scores: { onigiri: 1, bokChoy: 2, frenchFries: 1 } }
            ]
        },
        {
            question: "When faced with a problem, you usually:",
            choices: [
                { text: "Break it down into manageable steps", scores: { napaCabbage: 2, bokChoy: 1, onigiri: 1 } },
                { text: "Talk it through with friends", scores: { sukiyaki: 2, noodleSoup: 1, frenchFries: 1 } },
                { text: "Trust your instincts and dive in", scores: { frenchFries: 2, tonkatsu: 1, bokChoy: 1 } },
                { text: "Take time to reflect before deciding", scores: { onigiri: 2, tonkatsu: 2, noodleSoup: 1 } }
            ]
        },
        {
            question: "What's your ideal weekend activity?",
            choices: [
                { text: "Cooking a special meal", scores: { sukiyaki: 2, tonkatsu: 1, noodleSoup: 2 } },
                { text: "Going out with friends", scores: { frenchFries: 2, bokChoy: 1, sukiyaki: 1 } },
                { text: "Spending time in nature", scores: { bokChoy: 2, napaCabbage: 2, onigiri: 1 } },
                { text: "Watching movies or playing games at home", scores: { onigiri: 2, tonkatsu: 1, noodleSoup: 1 } }
            ]
        },
        {
            question: "How do you recharge when you're feeling drained?",
            choices: [
                { text: "Alone time and self-care", scores: { onigiri: 2, napaCabbage: 1, tonkatsu: 1 } },
                { text: "Comfort food and a cozy atmosphere", scores: { noodleSoup: 2, sukiyaki: 1, frenchFries: 1 } },
                { text: "Light exercise or outdoor activity", scores: { bokChoy: 2, napaCabbage: 1, frenchFries: 1 } },
                { text: "Socializing with close friends", scores: { sukiyaki: 2, frenchFries: 2, tonkatsu: 1 } }
            ]
        },
        {
            question: "What's your approach to trying new things?",
            choices: [
                { text: "Cautious but open-minded", scores: { onigiri: 2, napaCabbage: 1, tonkatsu: 2 } },
                { text: "Enthusiastic and all-in", scores: { frenchFries: 2, bokChoy: 2, sukiyaki: 1 } },
                { text: "Depends on who I'm with", scores: { sukiyaki: 2, noodleSoup: 1, napaCabbage: 1 } },
                { text: "I like to research thoroughly first", scores: { napaCabbage: 2, bokChoy: 1, noodleSoup: 1 } }
            ]
        },
        {
            question: "In a group project, you typically:",
            choices: [
                { text: "Take the lead and organize everyone", scores: { tonkatsu: 2, bokChoy: 1, sukiyaki: 1 } },
                { text: "Support others and help where needed", scores: { noodleSoup: 2, napaCabbage: 2, onigiri: 1 } },
                { text: "Bring creative ideas to the table", scores: { frenchFries: 2, bokChoy: 2, sukiyaki: 1 } },
                { text: "Make sure everything gets done correctly", scores: { onigiri: 2, napaCabbage: 1, tonkatsu: 1 } }
            ]
        },
        {
            question: "What's your ideal weather?",
            choices: [
                { text: "Warm and sunny", scores: { frenchFries: 2, bokChoy: 1, sukiyaki: 1 } },
                { text: "Cool and crisp", scores: { onigiri: 2, napaCabbage: 2, bokChoy: 1 } },
                { text: "Cozy rainy day", scores: { noodleSoup: 2, tonkatsu: 1, sukiyaki: 1 } },
                { text: "Snowy winter wonderland", scores: { tonkatsu: 2, noodleSoup: 1, napaCabbage: 1 } }
            ]
        },
        {
            question: "How do you handle unexpected changes?",
            choices: [
                { text: "Go with the flow - change is exciting!", scores: { frenchFries: 2, bokChoy: 2, sukiyaki: 1 } },
                { text: "Adapt after taking a moment to process", scores: { onigiri: 2, napaCabbage: 1, noodleSoup: 1 } },
                { text: "Look for ways to make the best of it with others", scores: { sukiyaki: 2, noodleSoup: 1, frenchFries: 1 } },
                { text: "Try to find a way back to the original plan", scores: { tonkatsu: 2, onigiri: 1, napaCabbage: 1 } }
            ]
        },
        {
            question: "What do you value most in relationships?",
            choices: [
                { text: "Loyalty and reliability", scores: { onigiri: 2, tonkatsu: 2, napaCabbage: 1 } },
                { text: "Fun and excitement", scores: { frenchFries: 2, bokChoy: 1, sukiyaki: 1 } },
                { text: "Deep conversations and understanding", scores: { noodleSoup: 2, tonkatsu: 1, napaCabbage: 2 } },
                { text: "Growth and new experiences together", scores: { bokChoy: 2, sukiyaki: 2, frenchFries: 1 } }
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
    if (questionNumber && questionText && choicesContainer) {
        questionNumber.textContent = `Question ${currentQuestion + 1}/${quizData.questions.length}`;
        questionText.textContent = questionData.question;
        choicesContainer.innerHTML = '';
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
    if (gameContainer && resultContainer && resultTitle && resultImage) {
        gameContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        resultTitle.textContent = `You are ${foodResult.name}!`;
        resultImage.style.backgroundImage = `url('${foodResult.image}')`;
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