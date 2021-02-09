# Jeopardy Web app
## Description
This project is a web browser game that takes inspiration from the tv show  Jeopardy!

## Table of Contents
- [Description](#Description)
- [Install](#Install)
- [Features](#Features)
- [Built With](#Built-With])
- [Code organization](#Code-organization)
- [Design pattern used](#Design-pattern-used)
- [Tests](#Tests)
- [Links](#Links)
- [Design Documentation](#Design-Documentation)
    - [User Stories](#User-Stories)
    - [User Case](#User-Case)

- [Authors](#Author)
- [License](#License)

## Install
Download or fork the project and then open the index.html in a web brower to play the game.
## Features 
## Built With
Currently the project is using Javascript, HTML, CSS and flexbox.
## Code organization
The project follows the coding style guide provied by [AirBnb](https://github.com/airbnb/javascript).
## Design pattern used
OOP(object oriented programming) is the inital approach.
## Tests
## Links
## Design Documentation 


### User Stories

- "As a jeopardy player, I want to play a new game when it loads."

- "As a jeopardy player, I want to see my current score when playing the game so that I can see if I am winning or losing."

- "As a jeopardy player, I want to answer questions with different topics so that I am interested in playing the game."

- "As a jeopardy player, I want to see the answer if I don't get the question correct."

- "As a jeopardy player, I want to use my mouse or keyboard to play the game."

- "As a jeopardy player, I want to answer easy and difficult questions so that I have a challenge."

- "As a jeopardy player, I want to play on my tablet."

- "As a jeopardy player, I want to resize the game text so that I can read the game instructions easily." 

- "As a jeopardy player, I want to play against an opponent so that I feeling of compettion" 

### User Case

- Title: Play Game
- Primary Actor: Player
- Success Scenario:
    - Game asks the player to enter their name.
    - Player enters their name
    - Game displays UI
- Extensions: 
    -  If a player doesn't enter a name, make the player name "player 1."
----------------------------------------------------------------------
- Title: Choose Questions with difficulty level
- Primary Actor: Player
- Success Scenario:
    - Player picks the topic.
    - Player chooses a difficultly level.
    - Game displays question.
----------------------------------------------------------------------

- Title: Answer Question
- Primary Actor: Player
- Success Scenario:
    - Game displays the question with four different answers to choose from.
    - Game starts the timer for questions.
    - Player picks an answer.
- Extensions: 
    - If the player runs out of time, they loose the problem round.
    - If the player answers incorrectly, their score decrease.
- Precondition: 
    - Player has chosen the question category and difficultly level.
----------------------------------------------------------------------
- Title: Play New Game
- Primary Actor: Player
- Success Scenario:
    - Game asks the player if they want to play again.
    - Game displays UI
- Precondition: 
    - All game rounds have been answered.
----------------------------------------------------------------------


## Authors
William Leacy (Current Author).
## License
