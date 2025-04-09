// Define TypeScript interfaces
interface FoodPersonality {
    name: string;
    description: string;
    image: string;
}

interface Choice {
    nextState: number;
    scores: Record<string, number>;
}

interface Question {
    text: string;
    image?: string;
    choices: Record<string, Choice>;
}

interface GameData {
    [key: string]: Question;
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

// Food Personality Quiz with exactly 10 questions per path
const quizData: GameData = {
    // Question 1 - Starting point for all paths
    "1": {
        text: "It's a beautiful day in Food Town. How do you spend it?",
        image: "images/food_town.png",
        choices: {
            "Relaxing at home with a good book": {
                nextState: 2,
                scores: { onigiri: 2, napaCabbage: 1, noodleSoup: 1 }
            },
            "Inviting friends over for a gathering": {
                nextState: 3,
                scores: { sukiyaki: 2, tonkatsu: 1, frenchFries: 2 }
            },
            "Going on an adventure outdoors": {
                nextState: 4,
                scores: { bokChoy: 2, frenchFries: 1, sukiyaki: 1 }
            },
            "Organizing your space and running errands": {
                nextState: 5,
                scores: { napaCabbage: 2, onigiri: 1, tonkatsu: 1 }
            }
        }
    },

    // PATH A: Home Relaxation Path (Questions 2-10)
    // Question 2A
    "2": {
        text: "While relaxing at home, you hear a knock at the door. It's your neighbor asking for help with something. What do you do?",
        image: "images/neighbor_door.png",
        choices: {
            "Drop everything to help them out": {
                nextState: 101,
                scores: { noodleSoup: 2, napaCabbage: 1, sukiyaki: 1 }
            },
            "Politely explain you need some alone time but offer to help later": {
                nextState: 102,
                scores: { onigiri: 2, tonkatsu: 1, napaCabbage: 1 }
            },
            "Invite them in and turn your quiet day into a social one": {
                nextState: 103,
                scores: { frenchFries: 2, sukiyaki: 1, bokChoy: 1 }
            }
        }
    },
    // Question 3A
    "101": {
        text: "After helping your neighbor, they're so grateful they invite you to join them for dinner. You:",
        image: "images/dinner_invite.png",
        choices: {
            "Accept gratefully - it's nice to connect": {
                nextState: 104,
                scores: { sukiyaki: 2, noodleSoup: 1, frenchFries: 1 }
            },
            "Politely decline - you still want some alone time": {
                nextState: 105,
                scores: { onigiri: 2, tonkatsu: 1, napaCabbage: 1 }
            }
        }
    },
    // Question 3A (alternate)
    "102": {
        text: "Back to your quiet time! How do you spend the rest of your day?",
        image: "images/quiet_time.png",
        choices: {
            "Cooking something special just for yourself": {
                nextState: 106,
                scores: { tonkatsu: 2, noodleSoup: 1, onigiri: 1 }
            },
            "Getting lost in a book or favorite show": {
                nextState: 107,
                scores: { onigiri: 2, napaCabbage: 1, noodleSoup: 1 }
            },
            "Working on a creative project": {
                nextState: 108,
                scores: { bokChoy: 2, frenchFries: 1, tonkatsu: 1 }
            }
        }
    },
    // Question 3A (alternate 2)
    "103": {
        text: "Your impromptu gathering is going well! What kind of host are you?",
        image: "images/gathering.png",
        choices: {
            "Making sure your neighbor feels comfortable": {
                nextState: 109,
                scores: { noodleSoup: 2, napaCabbage: 1, sukiyaki: 1 }
            },
            "Keeping the conversation flowing with interesting topics": {
                nextState: 110,
                scores: { frenchFries: 2, bokChoy: 1, sukiyaki: 1 }
            }
        }
    },
    // Question 4A
    "104": {
        text: "At your neighbor's dinner, you discover they're an amazing cook! What do you appreciate most about the meal?",
        image: "images/dinner_table.png",
        choices: {
            "The thoughtful presentation and attention to detail": {
                nextState: 111,
                scores: { tonkatsu: 2, napaCabbage: 1, onigiri: 1 }
            },
            "The bold, unique flavors they've created": {
                nextState: 111,
                scores: { bokChoy: 2, frenchFries: 1, sukiyaki: 1 }
            },
            "The warm, comforting feeling of sharing food together": {
                nextState: 111,
                scores: { noodleSoup: 2, sukiyaki: 1, napaCabbage: 1 }
            }
        }
    },
    // Questions 5-10 for Path A continue...
    "111": {
        text: "Your neighbor asks about your favorite foods. What do you tell them you enjoy most?",
        image: "images/food_conversation.png",
        choices: {
            "Simple, comforting classics that remind you of home": {
                nextState: 112,
                scores: { onigiri: 2, noodleSoup: 1, tonkatsu: 1 }
            },
            "Adventurous dishes with unexpected flavor combinations": {
                nextState: 112,
                scores: { bokChoy: 2, frenchFries: 1, sukiyaki: 1 }
            },
            "Shareable food that brings people together": {
                nextState: 112,
                scores: { sukiyaki: 2, frenchFries: 1, napaCabbage: 1 }
            }
        }
    },
    // Continue with questions 6-10 for Path A...

    // PATH B: Social Gathering Path (Questions 2-10)
    // Question 2B
    "3": {
        text: "Your gathering is going well! What kind of host are you?",
        image: "images/gathering.png",
        choices: {
            "Making sure everyone has food and drinks": {
                nextState: 201,
                scores: { noodleSoup: 2, sukiyaki: 1, napaCabbage: 1 }
            },
            "Keeping everyone entertained with games and jokes": {
                nextState: 202,
                scores: { frenchFries: 2, bokChoy: 1, sukiyaki: 1 }
            },
            "Creating thoughtful conversations between guests": {
                nextState: 203,
                scores: { tonkatsu: 2, onigiri: 1, napaCabbage: 1 }
            }
        }
    },
    // Question 3B
    "201": {
        text: "Oh no! One of your guests accidentally spills their drink. How do you react?",
        image: "images/spill.png",
        choices: {
            "Immediately help clean up with a reassuring smile": {
                nextState: 204,
                scores: { noodleSoup: 2, napaCabbage: 1, sukiyaki: 1 }
            },
            "Make a joke to ease their embarrassment": {
                nextState: 204,
                scores: { frenchFries: 2, bokChoy: 1, sukiyaki: 1 }
            }
        }
    },
    // Continue with questions 4-10 for Path B...

    // PATH C: Outdoor Adventure Path (Questions 2-10)
    // Question 2C
    "4": {
        text: "During your outdoor adventure, you discover a hidden path. Do you:",
        image: "images/hidden_path.png",
        choices: {
            "Follow it eagerly to see where it leads": {
                nextState: 301,
                scores: { bokChoy: 2, frenchFries: 1, sukiyaki: 1 }
            },
            "Take a quick look but stick to the main trail": {
                nextState: 302,
                scores: { tonkatsu: 2, onigiri: 1, napaCabbage: 1 }
            },
            "Take a photo and share this discovery with friends later": {
                nextState: 303,
                scores: { sukiyaki: 2, frenchFries: 1, bokChoy: 1 }
            }
        }
    },
    // Question 3C
    "301": {
        text: "The hidden path leads to a magical food forest! You find yourself surrounded by incredible edible plants and trees. What do you do?",
        image: "images/food_forest.png",
        choices: {
            "Explore every inch of this amazing place": {
                nextState: 304,
                scores: { bokChoy: 2, frenchFries: 1, sukiyaki: 1 }
            },
            "Find a peaceful spot to sit and enjoy the atmosphere": {
                nextState: 304,
                scores: { onigiri: 2, noodleSoup: 1, napaCabbage: 1 }
            },
            "Gather some unique foods to share with friends later": {
                nextState: 304,
                scores: { sukiyaki: 2, noodleSoup: 1, frenchFries: 1 }
            }
        }
    },
    // Continue with questions 4-10 for Path C...

    // PATH D: Organizing Path (Questions 2-10)
    // Question 2D
    "5": {
        text: "While organizing, you find an old keepsake that brings back memories. What do you do?",
        image: "images/keepsake.png",
        choices: {
            "Take a break to reminisce about the past": {
                nextState: 401,
                scores: { noodleSoup: 2, onigiri: 1, tonkatsu: 1 }
            },
            "Find a special place to display it": {
                nextState: 402,
                scores: { napaCabbage: 2, tonkatsu: 1, noodleSoup: 1 }
            },
            "Message a friend about the memory": {
                nextState: 403,
                scores: { sukiyaki: 2, frenchFries: 1, bokChoy: 1 }
            }
        }
    },
    // Continue with questions 3-10 for Path D...

    // Final question - each path has exactly 10 questions
    "112": {
        text: "Last question! If you could be any meal, you'd want to be one that:",
        image: "images/final_question.png",
        choices: {
            "Brings comfort and feels like home": {
                nextState: 0,
                scores: { onigiri: 3, noodleSoup: 2, napaCabbage: 1 }
            },
            "Brings people together to share and connect": {
                nextState: 0,
                scores: { sukiyaki: 3, frenchFries: 1, noodleSoup: 1 }
            },
            "Is bold, exciting and full of flavor": {
                nextState: 0,
                scores: { bokChoy: 3, frenchFries: 2, tonkatsu: 1 }
            },
            "Is thoughtfully crafted with care and precision": {
                nextState: 0,
                scores: { tonkatsu: 3, napaCabbage: 2, onigiri: 1 }
            },
            "Is versatile and can adapt to any situation": {
                nextState: 0,
                scores: { napaCabbage: 3, onigiri: 1, bokChoy: 1 }
            },
            "Makes everyone happy and lifts the mood": {
                nextState: 0,
                scores: { frenchFries: 3, sukiyaki: 1, bokChoy: 1 }
            },
            "Has depth and complexity that keeps people interested": {
                nextState: 0,
                scores: { noodleSoup: 3, tonkatsu: 1, sukiyaki: 1 }
            }
        }
    }

    // Add more questions for each path to make exactly 10 questions per path
    // Note: This is a partial implementation showing the structure
    // You'll need to fill in all paths to ensure each one has exactly 10 questions
};

// Definitions of food personality types
const foodPersonalities: Record<string, FoodPersonality> = {
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
};

// Variables to track quiz state
let currentState: number = 1;
let questionCount: number = 1;
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

    // Reset scores and question count
    scores = {
        onigiri: 0,
        sukiyaki: 0,
        bokChoy: 0,
        napaCabbage: 0,
        tonkatsu: 0,
        noodleSoup: 0,
        frenchFries: 0
    };
    currentState = 1;
    questionCount = 1;
    renderState(currentState);
}

// Function to render the current state
function renderState(state: number): void {
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const choicesContainer = document.getElementById('choices');
    const questionData = quizData[state.toString()];

    if (!questionData) {
        console.error(`No question data found for state ${state}`);
        return;
    }

    if (questionNumber && questionText && choicesContainer) {
        // Show question numbers (1-10) for better user experience
        questionNumber.style.display = 'block';
        questionNumber.textContent = `Question ${questionCount}/10`;
        questionText.textContent = questionData.text;
        choicesContainer.innerHTML = '';

        // Create buttons for each choice
        for (const [choiceText, choiceData] of Object.entries(questionData.choices)) {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choiceText;
            button.onclick = () => selectAnswer(choiceText, choiceData);
            choicesContainer.appendChild(button);
        }
    }

    // Update image if available
    if (questionData.image) {
        const storyImage = document.getElementById('story-image');
        if (storyImage && storyImage instanceof HTMLImageElement) {
            const img = new Image();
            img.src = questionData.image;
            img.onload = () => {
                if (storyImage instanceof HTMLImageElement) {
                    storyImage.src = img.src;
                }
            };
        }
    }
}

// Function to handle answer selection
function selectAnswer(choiceText: string, choiceData: Choice): void {
    // Update scores based on the choice
    for (const [food, points] of Object.entries(choiceData.scores)) {
        scores[food as keyof Scores] += points;
    }

    // Move to next state
    currentState = choiceData.nextState;

    // Increment question counter unless we're at the end
    if (currentState !== 0) {
        questionCount++;
    }

    if (currentState === 0) {
        showResult();
    } else {
        renderState(currentState);
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

    const foodResult = foodPersonalities[resultFood];

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
    // Replace with this line if you want the quiz to start automatically
    // startQuiz();
};