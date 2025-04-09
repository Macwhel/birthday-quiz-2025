# Food Personality Quiz

A fun quiz to discover which food matches your personality!

## Try It Out

You can take the quiz here: [https://macwhel.github.io/birthday-quiz-2025](https://macwhel.github.io/birthday-quiz-2025)

## About

This food personality quiz features 10 questions to determine which food you are:

- Onigiri
- Sukiyaki
- Bok Choy
- Napa Cabbage
- Tonkatsu
- Noodle Soup
- French Fries

## Customizing the Quiz

### Changing the Food Types

Edit the `foodPersonalities` object in `src/foodQuiz.ts`. Each food has:
- Name (displayed in results)
- Description (personality traits)
- Image path

### Modifying Questions

Edit the `questions` array in `src/foodQuiz.ts`. Each question has:
- A question text
- Four choices with text and corresponding scores

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Make changes to the TypeScript files
4. Compile TypeScript: `npm run build`
5. Test locally by opening `index.html` in a browser
6. Deploy to GitHub Pages: `npm run deploy`