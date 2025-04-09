// Define TypeScript interfaces
interface FoodPersonality {
    name: string;
    description: string;
    image: string;
}

interface Choice {
    text: string;
    scores: Record<string, number>;
}

interface Question {
    question: string;
    image?: string;
    choices: Choice[];
}

interface QuizData {
    foodPersonalities: Record<string, FoodPersonality>;
    questions: Question[];
}

interface Scores {
    onigiri: number;
    sukiyaki: number;
    bokChoy: number;
    napaCabbage: number;
    tonkatsu: number;
    noodleSoup: number;
    frenchFries: number;
}

// Data for the food personality quiz
const quizData: QuizData = {
    foodPersonalities: {
        onigiri: {
            name: "Onigiri",
            description: "You're simple but satisfying! People find comfort in your reliable nature. You're adaptable and can fit into any situation, bringing a sense of home wherever you go.",
            image: "images/onigiri.png"
        },
        sukiyaki: {
            name: "Sukiyaki",
            description: "Warm, social, and bringing people together! You create harmony in groups and know how to make everyone feel included. Your rich personality has many layers that keep people coming back.",
            image: "images/sukiyaki.png"
        },
        bokChoy: {
            name: "Bok Choy",
            description: "Fresh and crisp! You're straightforward, honest, and bring a refreshing perspective to any situation. You stand strong in your values while remaining flexible when needed.",
            image: "images/bokchoy.png"
        },
        napaCabbage: {
            name: "Napa Cabbage",
            description: "Versatile and nurturing! You adapt well to different situations while maintaining your unique character. You provide support to those around you and have hidden depths.",
            image: "images/napacabbage.png"
        },
        tonkatsu: {
            name: "Tonkatsu",
            description: "Crispy on the outside, tender on the inside! While you may seem tough at first, you're actually quite sensitive. You appreciate tradition and bring comfort to those close to you.",
            image: "images/tonkatsu.png"
        },
        noodleSoup: {
            name: "Noodle Soup",
            description: "Comforting and complex! You have many elements to your personality that work together beautifully. People seek you out when they need warming up or cheering up.",
            image: "images/noodlesoup.png"
        },
        frenchFries: {
            name: "French Fries",
            description: "Universally loved! You're social, fun, and always the life of the party. You know how to make people smile and bring a golden energy to any gathering.",
            image: "images/frenchfries.png"
        }
    },

    questions: [
        {
            question: "It's your day off. How do you spend it?",
            image: "images/day_off.png",
            choices: [
                { text: "Relaxing at home with a good book or show", scores: { onigiri: 2, napaCabbage: 1, noodleSoup: 1 } },
                { text: "Inviting friends over for a gathering", scores: { sukiyaki: 2, tonkatsu: 1, frenchFries: 2 } },
                { text: "Going on an adventure or trying something new", scores: { bokChoy: 2, frenchFries: 1, sukiyaki: 1 } },
                { text: "Taking care of errands and organizing your space", scores: { napaCabbage: 2, onigiri: 1, bokChoy: 1 } }
            ]
        },
        {
            question: "How would your friends describe you?",
            image: "images/friends_describe.png",
            choices: [
                { text: "Reliable and comforting", scores: { onigiri: 2, noodleSoup: 2, napaCabbage: 1 } },
                { text: "Energetic and fun-loving", scores: { frenchFries: 2, bokChoy: 1, sukiyaki: 1 } },
                { text: "Thoughtful and deep", scores: { tonkatsu: 2, noodleSoup: 1, napaCabbage: 1 } },
                { text: "Adaptable and easygoing", scores: { onigiri: 1, bokChoy: 2, frenchFries: 1 } }
            ]
        },
        {
            question: "When faced with a problem, you usually:",
            image: "images/problem_solving.png",
            choices: [
                { text: "Break it down into manageable steps", scores: { napaCabbage: 2, bokChoy: 1, onigiri: 1 } },
                { text: "Talk it through with friends", scores: { sukiyaki: 2, noodleSoup: 1, frenchFries: 1 } },
                { text: "Trust your instincts and dive in", scores: { frenchFries: 2, tonkatsu: 1, bokChoy: 1 } },
                { text: "Take time to reflect before deciding", scores: { onigiri: 2, tonkatsu: 2, noodleSoup: 1 } }
            ]
        },
        {
            question: "What's your ideal weekend activity?",
            image: "images/weekend_activity.png",
            choices: [
                { text: "Cooking a special meal", scores: { sukiyaki: 2, tonkatsu: 1, noodleSoup: 2 } },
                { text: "Going out with friends", scores: { frenchFries: 2, bokChoy: 1, sukiyaki: 1 } },
                { text: "Spending time in nature", scores: { bokChoy: 2, napaCabbage: 2, onigiri: 1 } },
                { text: "Watching movies or playing games at home", scores: { onigiri: 2, tonkatsu: 1, noodleSoup: 1 } }
            ]
        },
        {
            question: "How do you recharge when you're feeling drained?",
            image: "images/recharge.png",
            choices: [
                { text: "Alone time and self-care", scores: { onigiri: 2, napaCabbage: 1, tonkatsu: 1 } },
                { text: "Comfort food and a cozy atmosphere", scores: { noodleSoup: 2, sukiyaki: 1, frenchFries: 1 } },
                { text: "Light exercise or outdoor activity", scores: { bokChoy: 2, napaCabbage: 1, frenchFries: 1 } },
                { text: "Socializing with close friends", scores: { sukiyaki: 2, frenchFries: 2, tonkatsu: 1 } }
            ]
        },
        {
            question: "What's your approach to trying new things?",
            image: "images/trying_new_things.png",
            choices: [
                { text: "Cautious but open-minded", scores: { onigiri: 2, napaCabbage: 1, tonkatsu: 2 } },
                { text: "Enthusiastic and all-in", scores: { frenchFries: 2, bokChoy: 2, sukiyaki: 1 } },
                { text: "Depends on who I'm with", scores: { sukiyaki: 2, noodleSoup: 1, napaCabbage: 1 } },
                { text: "I like to research thoroughly first", scores: { napaCabbage: 2, bokChoy: 1, noodleSoup: 1 } }
            ]
        },
        {
            question: "In a group project, you typically:",
            image: "images/group_project.png",
            choices: [
                { text: "Take the lead and organize everyone", scores: { tonkatsu: 2, bokChoy: 1, sukiyaki: 1 } },
                { text: "Support others and help where needed", scores: { noodleSoup: 2, napaCabbage: 2, onigiri: 1 } },
                { text: "Bring creative ideas to the table", scores: { frenchFries: 2, bokChoy: 2, sukiyaki: 1 } },
                { text: "Make sure everything gets done correctly", scores: { onigiri: 2, napaCabbage: 1, tonkatsu: 1 } }
            ]
        },
        {
            question: "What's your ideal weather?",
            image: "images/weather.png",
            choices: [
                { text: "Warm and sunny", scores: { frenchFries: 2, bokChoy: 1, sukiyaki: 1 } },
                { text: "Cool and crisp", scores: { onigiri: 2, napaCabbage: 2, bokChoy: 1 } },
                { text: "Cozy rainy day", scores: { noodleSoup: 2, tonkatsu: 1, sukiyaki: 1 } },
                { text: "Snowy winter wonderland", scores: { tonkatsu: 2, noodleSoup: 1, napaCabbage: 1 } }
            ]
        },
        {
            question: "How do you handle unexpected changes?",
            image: "images/unexpected_changes.png",
            choices: [
                { text: "Go with the flow - change is exciting!", scores: { frenchFries: 2, bokChoy: 2, sukiyaki: 1 } },
                { text: "Adapt after taking a moment to process", scores: { onigiri: 2, napaCabbage: 1, noodleSoup: 1 } },
                { text: "Look for ways to make the best of it with others", scores: { sukiyaki: 2, noodleSoup: 1, frenchFries: 1 } },
                { text: "Try to find a way back to the original plan", scores: { tonkatsu: 2, onigiri: 1, napaCabbage: 1 } }
            ]
        },
        {
            question: "What do you value most in relationships?",
            image: "images/relationships.png",
            choices: [
                { text: "Loyalty and reliability", scores: { onigiri: 2, tonkatsu: 2, napaCabbage: 1 } },
                { text: "Fun and excitement", scores: { frenchFries: 2, bokChoy: 1, sukiyaki: 1 } },
                { text: "Deep conversations and understanding", scores: { noodleSoup: 2, tonkatsu: 1, napaCabbage: 2 } },
                { text: "Growth and new experiences together", scores: { bokChoy: 2, sukiyaki: 2, frenchFries: 1 } }
            ]
        },
        {
            question: "At a food market with many options, you're drawn to:",
            image: "images/food_market.png",
            choices: [
                { text: "Classic comfort foods that remind you of home", scores: { onigiri: 2, noodleSoup: 2, tonkatsu: 1 } },
                { text: "Exotic dishes you've never tried before", scores: { bokChoy: 2, frenchFries: 1, sukiyaki: 1 } },
                { text: "Shareable platters to enjoy with friends", scores: { sukiyaki: 2, frenchFries: 2, napaCabbage: 1 } },
                { text: "Carefully crafted artisanal foods", scores: { tonkatsu: 2, napaCabbage: 1, noodleSoup: 1 } }
            ]
        },
        {
            question: "If you were a meal, you'd want to be one that:",
            image: "images/meal_choices.png",
            choices: [
                { text: "Brings comfort and feels like home", scores: { onigiri: 3, noodleSoup: 2, napaCabbage: 1 } },
                { text: "Brings people together to share and connect", scores: { sukiyaki: 3, frenchFries: 1, noodleSoup: 1 } },
                { text: "Is bold, exciting and full of flavor", scores: { bokChoy: 3, frenchFries: 2, tonkatsu: 1 } },
                { text: "Is thoughtfully crafted with care", scores: { tonkatsu: 3, napaCabbage: 2, onigiri: 1 } },
                { text: "Is versatile and adaptable", scores: { napaCabbage: 3, onigiri: 1, bokChoy: 1 } },
                { text: "Makes everyone happy and lifts the mood", scores: { frenchFries: 3, sukiyaki: 1, bokChoy: 1 } },
                { text: "Has depth and complexity", scores: { noodleSoup: 3, tonkatsu: 1, sukiyaki: 1 } }
            ]
        }
    ]
};

// Variables to track quiz state
let currentQuestion: number = 0;
let scores: Scores = {
    onigiri: 0,
    sukiyaki: 0,
    bokChoy: 0,
    napaCabbage: 0,
    tonkatsu: 0,
    noodleSoup: 0,
    frenchFries: 0
};

// Function to start the quiz
function startQuiz(): void {
    const homeScreen = document.getElementById('home-screen');
    const gameContainer = document.getElementById('game-container');

    if (homeScreen && gameContainer) {
        homeScreen.style.display = 'none';
        gameContainer.style.display = 'block';
    }

    // Reset scores
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

// Function to load a question
function loadQuestion(): void {
    const questionData = quizData.questions[currentQuestion];
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const choicesContainer = document.getElementById('choices');
    const storyImage = document.getElementById('story-image');

    if (questionNumber && questionText && choicesContainer && storyImage) {
        questionNumber.textContent = `Question ${currentQuestion + 1}/${quizData.questions.length}`;
        questionText.textContent = questionData.question;
        choicesContainer.innerHTML = '';

        // Load image if available
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

// Function to handle answer selection
function selectAnswer(choiceIndex: number): void {
    const selectedChoice = quizData.questions[currentQuestion].choices[choiceIndex];

    // Update scores
    for (const [food, points] of Object.entries(selectedChoice.scores)) {
        scores[food as keyof Scores] += points;
    }

    // Move to next question or show results
    currentQuestion++;
    if (currentQuestion < quizData.questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to show quiz result
function showResult(): void {
    // Find the food with the highest score
    let maxScore = 0;
    let resultFood = '';

    for (const [food, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultFood = food;
        }
    }

    const foodResult = quizData.foodPersonalities[resultFood];

    // Display result
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

    // For debugging - show all scores in console
    console.log('Final Scores:', scores);
}

// Function to restart the quiz
function restartQuiz(): void {
    const resultContainer = document.getElementById('result-container');

    if (resultContainer) {
        resultContainer.style.display = 'none';
    }

    startQuiz();
}

// Expose functions to window for HTML access
(window as any).startQuiz = startQuiz;
(window as any).restartQuiz = restartQuiz;

// Initialize when the page loads
window.onload = function () {
    // You could add any additional initialization here
};