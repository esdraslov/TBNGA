# The best number-guessing AI v1 (TBNGA-1)

The best number-guessing AI (TBNGA) is NOT a machine learning algorithm, but an algorithm that uses random, min, max and etc to guess any number between min and max. Using a bit of math it's possible to guess a number with a high probability of success. also made of javascript and originally designed in python

## How to use (method NGAI.guess)

1. Set the min and max values for the number. (param 1 and param 2)
2. Set the number of guesses you want the AI to make. (param 3)
3. Set the number to be guessed
4. Run the code.
5. The AI will guess the number and you will be able to see the guesses it makes.

### Example

```javascript
let NGAI = require("NGAI")

NGAI.guess(1, 100, 10, 10)
```

## WebSite (https://esdraslov.github.io/TBNGA)

the website is a simple web page that allows you to play the game using the AI. The game is quite simple, you choose a difficulty for the AI, put a number, and limit how many guesses the AI can make.

You can check the code of the website here: https://github.com/esdraslov/TBNGA or in the own website
