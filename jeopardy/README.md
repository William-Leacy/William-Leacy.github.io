# Jeopardy Web app
## Description
This project is a web browser game that takes inspiration from the tv show  Jeopardy!

## Links
Game is avaiable at:
https://william-leacy.github.io/jeopardy/

## Table of Contents
- [Description](#Description)
- [Links](#Links)
- [Install](#Install)
- [Features](#Features)
- [Built With](#Built-With])
- [Code organization](#Code-organization)
- [Design pattern used](#Design-pattern-used)
- [References](#Tests)
- [Tests](#Tests)
- [Design Documentation](#Design-Documentation)
    - [User Stories](#User-Stories)
    - [User Case](#User-Case)

- [Authors](#Author)
- [License](#License)

## Install
Download or fork the project and then open the index.html in a web brower to play the game.
## Features 
The game is very basic, It allows for two player to answers question in stages. Once all the catagory quesiton are answered 
the players can answer the final round questions
## Built With
Currently the project is using Javascript, HTML, CSS and flexbox.
## Code organization
The project trys to follow the coding style guide provied by [AirBnb](https://github.com/airbnb/javascript).
Eslint was the linting tool to help with this.
## Design pattern used
*Note* The apporach and design of this game was inspired by the sources in References section.
I have also mentioned in the app.js file where the inpriation helps the most.

/*
* This jeopardy app was inspired by the boilerplate code created by Tania Rascia
* Reference is below.
* The main inspiration from the reference was the use arrow function in the controller which prevents the need to manually bind all events 
* The second most inpiration from the reference was the style of call backs to create a observer Behavioral pattern that the controller uses
* when wathcing the model for updates.
*/

The Design pattern follows a MVC(Model View Controller) Obeserver pattern which monitors updates from the model for game state and questions 
used in the game. All game logic is contained in the model. The view uses jQuery to build a UI on the DOM and assings event Listeners to the appropriate
element. The event from these elements is handled by the controller and sends the input update to the model for logic processing. Any updates in the model 
is mentioned by the models and the controller watches to see what these updates are to alert the View what to diaplay.
## References

GAMMA, E., HELM, R., JOHNSON, R. E., & VLISSIDES, J. (1995). Design patterns: elements of reusable object-oriented software. Reading, Mass, Addison-Wesley.

Addy Osmani (2012). Learning JavaScript Design Patterns. Reading, Mass, O'Reilly Media, Inc.

/*
* Author: Tania Rascia
* Date: July 30, 2019
* Title of program: Build a Simple MVC App From Scratch in JavaScript
* Type: (source code)
* publisher: (https://www.taniarascia.com/javascript-mvc-todo-app/)
*
* Single line Referecne: Tania Rascia (July 30, 2019) Build a Simple MVC App From Scratch in JavaScript[Source code]. https://www.taniarascia.com/javascript-mvc-todo-app/.
*/


Game Question 

/*
* Author: web.archive.org
* Date: Febuary 12, 2021
* Title of program: Build a Simple MVC App From Scratch in JavaScript
* Type: (raw)
* publisher: (https://web.archive.org/web/20150418125146/http://www.irc-wiki.org/Trivia_science)
* Content is available under the Creative Commons Attribution-ShareAlike License.
* 
*/

Game player icon

/*
* Author: Gajah Mada Studio, ID 
* Date: Febuary 12, 2021
* Type: (svg)
* publisher: (https://thenounproject.com/term/user/3670112/)
* Content is available under the Creative Commons Attribution-ShareAlike License.
* 
*/






## Tests

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
