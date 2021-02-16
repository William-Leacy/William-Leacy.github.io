/* eslint-disable max-classes-per-file */
class Model {
  constructor() {
    this.players = [{
        playerId: "1",
        playerName: 'player 1',
        playerScore: 0,
      },
      {
        playerId: "2",
        playerName: 'player 2',
        playerScore: 0,
      }
    ];
    this.currentPlayer = this.players[0];

    this.roundNumber = 1;
    this.gameState = {
      gameRound: 1,
      allcurrentRoundQuestionsAnswered: false,
      readyForFinalQuestion: false,
      gameEndedInTie: false,
      winner: "",

    }

    this.gameRoundOneQuestions = [{
        gameQuestionCategory: 'Food',
        gameQuestionSet: [{
            question: 'This country in Europe consumes more spicy Mexican food than any other',
            answer: 'What is Norway?',
            questionValue: '10',
            category: 'Food',
            questionIsAnswered: false,
          },
          {
            question: 'This country does Rioja Wine come from',
            answer: 'What is Spain?',
            questionValue: '20',
            category: 'Food',
            questionIsAnswered: false,
          },
          {
            question: 'This is the fruit that contains the most calories',
            answer: 'What is Avocado pear?',
            questionValue: '30',
            category: 'Food',
            questionIsAnswered: false,
          },
          {
            question: ' This food has a name which means on a skewer',
            answer: 'What is Kebab',
            questionValue: '40',
            category: 'Food',
            questionIsAnswered: false,
          },
          {
            question: 'This country makes the dish Mousakka',
            answer: 'What is Greece?',
            questionValue: '50',
            category: 'Food',
            questionIsAnswered: false,
          },
        ],
      },
      {
        gameQuestionCategory: 'Science',
        gameQuestionSet: [{
            question: 'This process involves heating an ore to obtain a meta',
            answer: 'What is Smelting?',
            questionValue: '10',
            category: 'Science',
            questionIsAnswered: false,
            questionAnsweredCorrectly: null,
          },
          {
            question: 'This hazardous substance is euphemistically referred to as "mineral fiber',
            answer: 'What is Asbestos?',
            questionValue: '20',
            category: 'Science',
            questionIsAnswered: false,
          },
          {
            question: 'This method of underwater detection is short for "sound navigation and ranging"',
            answer: 'What is Sonar?',
            questionValue: '30',
            category: 'Science',
            questionIsAnswered: false,
          },
          {
            question: 'This sugar found in fruit is known by what name',
            answer: 'What is Fructose?',
            questionValue: '40',
            category: 'Science',
            questionIsAnswered: false,
          },
          {
            question: 'This unit of electrical power is equal to one joule per second',
            answer: ' What is Watt?',
            questionValue: '50',
            category: 'Science',
            questionIsAnswered: false,
          },
        ],
      },
      {
        gameQuestionCategory: 'Animals',
        gameQuestionSet: [{
            question: 'This type of mammals fly using echolocation',
            answer: 'What is Bat?',
            questionValue: '10',
            category: 'Animals',
            questionIsAnswered: false,
          },
          {
            question: 'This type of animal is the symbol of medicine',
            answer: 'What is Snake?',
            questionValue: '20',
            category: 'Animals',
            questionIsAnswered: false,
          },
          {
            question: 'This animals make a sound called nuzzing',
            answer: 'Waht is Camel?',
            questionValue: '30',
            category: 'Animals',
            questionIsAnswered: false,
          },
          {
            question: 'This animal has rectangular pupils',
            answer: 'What is Goat?',
            questionValue: '40',
            category: 'Animals',
            questionIsAnswered: false,
          },
          {
            question: 'This animal appears first in the dictionary',
            answer: 'What is Aardvark?',
            questionValue: '50',
            category: 'Animals',
            questionIsAnswered: false,
          },

        ],

      },
      {
        gameQuestionCategory: 'Computers',
        gameQuestionSet: [{
            question: 'This common element is used in the manufacture of computer chips',
            answer: 'What is Silicon?',
            questionValue: '10',
            category: 'Computers',
            questionIsAnswered: false,
          },
          {
            question: 'This first computer used for weather research was named what',
            answer: 'What is MANIAC?',
            questionValue: '20',
            category: 'Computers',
            questionIsAnswered: false,
          },
          {
            question: 'This personal computer became a video production system with the addition of New Teks Video Toaster',
            answer: 'What is Amiga?',
            questionValue: '30',
            category: 'Computers',
            questionIsAnswered: false,
          },
          {
            question: 'This display commonly found in notebook and laptop computers',
            answer: 'What is Liquid Crystal Display?',
            questionValue: '40',
            category: 'Computers',
            questionIsAnswered: false,
          },
          {
            question: 'This computer language is an acronym of the name of the worlds first computer programme',
            answer: 'What is ADA?',
            questionValue: '50',
            category: 'Computers',
            questionIsAnswered: false,
          },

        ],

      },
      {
        gameQuestionCategory: 'Video Games',
        gameQuestionSet: [{
            question: 'Gran Turismo is exclusive to this video game console',
            answer: 'What is Sony Playstation?',
            questionValue: '10',
            category: 'Video Games',
            questionIsAnswered: false,
          },
          {
            question: 'This video game made the character Master Chief famous',
            answer: 'What is Halo?',
            questionValue: '20',
            category: 'Video Games',
            questionIsAnswered: false,
          },
          {
            question: 'This video game made the Golden Gun famous?',
            answer: 'What is Goldeneye?',
            questionValue: '30',
            category: 'Video Games',
            questionIsAnswered: false,
          },
          {
            question: 'This character is Sega mascot',
            answer: 'What is Sonic?',
            questionValue: '40',
            category: 'Video Games',
            questionIsAnswered: false,
          },
          {
            question: 'This game made popular the phrase "Do a barrel roll',
            answer: 'What is Star Fox 64',
            questionValue: '50',
            category: 'Video Games',
            questionIsAnswered: false,
          },
        ],
      },
      {
        gameQuestionCategory: 'Music',
        gameQuestionSet: [{
            question: 'Live and let die is a song by this artist',
            answer: 'Who is Paul McCartney?',
            questionValue: '10',
            category: 'Music',
            questionIsAnswered: false,
          },
          {
            question: 'This group wrote the songs for the movie Saturday Night Fever',
            answer: 'Who is Bee Gees?',
            questionValue: '20',
            category: 'Music',
            questionIsAnswered: false,
          },
          {
            question: 'This British group got its name from the title of a 1950 Muddy Waters song',
            answer: 'Who is Rolling Stones?',
            questionValue: '30',
            category: 'Music',
            questionIsAnswered: false,
          },
          {
            question: 'This rock group only beardless member is Frank Beard',
            answer: 'Who is ZZ Top?',
            questionValue: '40',
            category: 'Music',
            questionIsAnswered: false,
          },
          {
            question: 'Music: Tusk was a best-selling album for this band',
            answer: 'Who is Fleetwood Mac?',
            questionValue: '50',
            category: 'Music',
            questionIsAnswered: false,
          },
        ],
      },

    ];
    this.finalQuestionSet = [{
        question: 'Science-question-text-set-A',
        answer: 'Science-question-set-A',
        questionValue: '40',
        category: 'Science',
        questionIsAnswered: true,
        questionAnsweredCorrectly: null,
      },
      {
        question: 'Science-question-text-set-A',
        answer: 'Science-question-set-A',
        questionValue: '50',
        category: 'Science',
        questionIsAnswered: true,
        questionAnsweredCorrectly: null,
      },
    ];

    this.incorrectAnswers = [
      'What is oAuth?',
      'What is curl?',
      'What is JSON?',
      'What is Xbox?',
      'What is Nintendo?',
      'What is Mario Kart?',
      'What is Streets OF Rage?',
      'what is Python?',
      'What is JavaScript?',
      'What is CPU?',
      'What is Amstrad?',
      'Who is AC/DC?',
      'Who is Aerosmith?',
      'Who is Alanis Morissette?',
      'Who is Billy Joel?',
      'Who is Black Sabbath?',
      'Who is Bob Dylan?',
      'Who is Bruce Springsteen?',
      'Who is Dire Straits?',
      'Who is David Bowie?',
      'Who is Eric Clapton?',
      'What is pear?',
      'What is Apple?',
      'What is France?',
      'What is Uk?',
    ];
  }

  // create a list of all categoires avaible to play
  // generateListOfAllCategoires() {
  //   for (const question of this.listOfGameQuestions) {
  //     if (this.fullListOfquestionCategoires.includes(question.category)) {} else {
  //       this.fullListOfquestionCategoires.push(question.category);
  //     }
  //   }
  // }

  moveToNextStageIfRoundIsFinished() {
    if (this.gameState.gameRound === 1) {
      if (this.checkIfGameRoundQuestionsAreAnswered(this.gameRoundOneQuestions) === true) {
        this.updateGameStage();
      }
    } else if (this.gameState.gameRound === 2) {
      if (this.checkIfGameRoundQuestionsAreAnswered(this.gameRoundTwoQuestions) === true) {
        this.updateGameStage();
      }
    }
  }

  checkIfGameRoundQuestionsAreAnswered(setOfgameRoundQuestions) {
    let questionAreAnswered = [];
    // check if questions are answered
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        questionAreAnswered.push(setOfgameRoundQuestions[i].gameQuestionSet[j].questionIsAnswered);
      }
    }
    if (questionAreAnswered.includes(false)) {
      return false;
    } else {
      return true;
    }
  }

  updateGameStage() {
    if (this.gameState.readyForFinalQuestion === false) {
      this.gameState.readyForFinalQuestion = true;
    }
  }
  /**
   * 
   * 
   */
  updateAnsweredQuestion(questionAnswered) {
    questionAnswered.questionIsAnswered = true;
  }
  /**
   * bindQuestionAnswered() 
   * this callback was to alert that both final round qustions are finished
   * 
   */

  bindFinalQuestionsFinished(callback) {
    this.onFinalQuestionsFinished = callback;
  }
  /**
   * bindQuestionAnswered() 
   * this callback was to alert that a final round question was answers and with the crontller should swith to
   * next player
   * 
   */

  bindonAFinalQuestionAnswered(callback) {
    this.onAFinalQuestionAnswered = callback;
  }

  // checkIfGameIsOver() {
  //   if (checkIfGameRoundQuestionsAreAnswered(this.finalQuestionSet === true)) {
  //     //callback
  //     this.onFinalQuestionsFinished();
  //   } else {
  //     this.onAFinalQuestionAnswered();
  //   }

  // }
  /**
   * bindQuestionAnswered() this callback method is for broacasting to the Crontoller 
   * that a question was answered and the view should be updated to display if it was correct
   * 
   */

  bindQuestionAnswered(callback) {
    this.onQuestionAnswered = callback;
  }
  checkIfAnsweredIsCorrect(correctAnswer, answerChoosen) {
    if (answerChoosen.answer === correctAnswer) {
      this.currentPlayer.playerScore = this.currentPlayer.playerScore + parseInt(answerChoosen.questionValue, 10);
      answerChoosen.questionAnsweredCorrectly = "correct";
    } else {
      this.currentPlayer.playerScore = this.currentPlayer.playerScore - parseInt(answerChoosen.questionValue, 10);
      answerChoosen.questionAnsweredCorrectly = "incorrect";
    }
    this.updateAnsweredQuestion(answerChoosen);
    this.onQuestionAnswered(answerChoosen);
  }

  // checkIfFinalQuestionAnsweredIsCorrect(correctAnswer, answerChoosen) {
  //   if (answerChoosen.answer === correctAnswer) {
  //     console.log("correct");
  //     this.currentPlayer.playerScore = this.currentPlayer.playerScore + parseInt(answerChoosen.questionValue, 10);
  //     answerChoosen.questionAnsweredCorrectly = "correct";
  //   } else {
  //     this.currentPlayer.playerScore = this.currentPlayer.playerScore - parseInt(answerChoosen.questionValue, 10);
  //     answerChoosen.questionAnsweredCorrectly = "incorrect";
  //   }
  //   this.updateAnsweredQuestion(answerChoosen);
  //   this.onFinalQuestionsFinished();
  // }
  // Switch players turn
  updateCurrentPlayer() {
    if (this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1];
    } else {
      this.currentPlayer = this.players[0];
    }
  }
  /**
   * upDateGameOutCome()
   * At the moment this function is invoked from the cronoller when a question is answered
   * 
   */

  upDateGameOutCome() {
    if (this.players[0].playerScore == this.players[1].playerScore) {
      this.gameState.gameEndedInTie = true;
    } else if (this.players[0].playerScore > this.players[1].playerScore) {
      this.gameState.winner = this.players[0].playerName;
      this.gameState.gameEndedInTie = false;
    } else {
      this.gameState.winner = this.players[1].playerName;
      this.gameState.gameEndedInTie = false;
    }
  }

  //   /**
  //    * 
  //    * 
  //    */
  //   generateListOfRandomIncorrectAnswers() {
  //     const answersInUse = [];
  //     for (let i = 0; i < this.gameRoundOneQuestions.length; i++) {
  //       for (let j = 0; j < this.gameRoundOneQuestions[i].gameQuestionSet.length; j++) {
  //         answersInUse.push(this.gameRoundOneQuestions[i].gameQuestionSet[j].answer);
  //       }
  //     }
  //     for (const question of this.listOfGameQuestions) {
  //       if (answersInUse.includes(question.answer)) {} else {
  //         this.incorrectAnswers.push(question.answer);
  //       }
  //     }
  //   }
}

class View {
  constructor() {
    this.gameContainer = document.querySelector('#game-screen');

  }

  /**
   * displayMainGameScoreBoard()
   * This is the first screen for the app to display. Is is invoked from the controller as a paramater from
   * the crontroller itselt to the handler for "starting game" displaying this view.
   * Its pasing a handler to move on to the next screen.
   */
  displayWelconeScreen(handler) {
    const $welcomeScreen = $('<div>');
    $welcomeScreen.addClass('modal-container');
    const $welcomeTitle = $('<h1>').text('Jeopardy!');
    const $nextButton = $('<button>').text('Play Game').attr('id', 'confirm-player-name-input-button');
    $nextButton.addClass('playgame-button');
    $($nextButton).on('click', function () {
      handler()
    });
    $(this.gameContainer).append($welcomeScreen);
    $welcomeScreen.append($welcomeTitle);
    $welcomeScreen.append($nextButton);
  }

  /**
   * displayMainGameScoreBoard()
   * This method display the players score name icon. It also displays the round number and a status bar
   * for which players turn it is.
   */
  displayMainGameScoreBoard(players, gameState, currentPlayer) {
    this.clearDisplay();
    const $mainGameScreenContainer = $('<div>');
    $mainGameScreenContainer.attr('id', 'mainGameContainer');
    $mainGameScreenContainer.addClass('main-game-container');

    const $gameInfromationContainer = $('<div>');
    $gameInfromationContainer.addClass('game-information-container');
    $(this.gameContainer).append($mainGameScreenContainer);
    $mainGameScreenContainer.append($gameInfromationContainer);

    for (let i = 0; i < 2; i++) {
      const $playerInformation = $('<div>');
      $playerInformation.addClass('player-information');

      const $playerAvatar = $('<img>');
      $playerAvatar.addClass('player-avatar')
      $playerAvatar.attr('src', '/Users/imac/personal-repository/jeopardy/jeopardy/images/noun_User_3670112.svg');

      const $playerNamePlayerScoreContainer = $('<div>');
      $playerNamePlayerScoreContainer.addClass('player-name-player-score-container');

      const $playerNameContainer = $('<p>');
      $playerNameContainer.text(players[i].playerName);

      const $playerScoreContainer = $('<p>');
      $playerScoreContainer.text(`Score: $${ players[i].playerScore}`);
      $gameInfromationContainer.append($playerInformation);
      $playerInformation.append($playerAvatar);
      $playerInformation.append($playerNamePlayerScoreContainer);
      $playerNamePlayerScoreContainer.append($playerNameContainer);
      $playerNamePlayerScoreContainer.append($playerScoreContainer);

    }

    const $roundNumberContainer = $('<div>');
    $roundNumberContainer.addClass('game-round-container').text("Round " + gameState.gameRound);


    const $gameStatusContainer = $('<div>');
    $gameStatusContainer.addClass('game-status-container').text(`${currentPlayer}'s Turn!`);

    $($mainGameScreenContainer).append($roundNumberContainer);
    $($mainGameScreenContainer).append($gameStatusContainer);

  }

  /**
   * displayMainGameScreen()
   *  This method display the jeopard quesion board and sets a lisnter to each value in the catagory 
   * it also takes in the final quesiton button handelr which was to open up the final game round.
   */
  displayMainGameScreen(gameQuestionSet, choosenCatagoryScoreHandler, gameState, finalQuestionHandler) {

    const $jeopardBoardContainer = $('<div>');
    $jeopardBoardContainer.addClass('jeopardy-board');
    $('#mainGameContainer').append($jeopardBoardContainer);

    const $jeopardBoardQuestionsContainer = $('<div>');
    $jeopardBoardQuestionsContainer.addClass('jeopardy-questions-board');
    $($jeopardBoardContainer).append($jeopardBoardQuestionsContainer);

    for (let i = 0; i < 6; i++) {
      const $catagorycolumnContainer = $('<div>');
      $catagorycolumnContainer.addClass('catagory-container');
      $jeopardBoardQuestionsContainer.append($catagorycolumnContainer);
      const $catagoryNameContainer = $('<div>');
      $catagoryNameContainer.addClass('catagory-name').text(gameQuestionSet[i].gameQuestionCategory);
      $catagorycolumnContainer.append($catagoryNameContainer);
      const $catagoryListOfScoresContainer = $('<div>');
      $catagoryListOfScoresContainer.addClass('catagory-list-of-scores-conatiner');
      $catagorycolumnContainer.append($catagoryListOfScoresContainer);

      for (let j = 0; j < 5; j++) {
        const $button = $('<div>');
        // set text for button from array
        $button.addClass('catagory-score-value-button').text(`$ ${gameQuestionSet[i].gameQuestionSet[j].questionValue}`);
        // if check if button was used from dont set the listener and hide text with css
        if (gameQuestionSet[i].gameQuestionSet[j].questionIsAnswered === false) {
          // set listner on each button 
          $($button).on('click', function () {
            choosenCatagoryScoreHandler(gameQuestionSet[i].gameQuestionSet[j])
          });
        } else {
          $button.css("color", "red");
        }
        $catagoryListOfScoresContainer.append($button);
      }
    }

    const $finalQuestionbutton = $('<button>');
    $finalQuestionbutton.addClass('final-round-question-button').text('Check Winner');

    if (gameState.readyForFinalQuestion === true) {
      $($finalQuestionbutton).on('click', function () {
        //promt for final question
        finalQuestionHandler();
      });
      $($jeopardBoardContainer).append($finalQuestionbutton);
    } else {
      $($jeopardBoardContainer).append($finalQuestionbutton);
    }

  }

  /**
   * displayGameQuestion()
   * This method display the question view that the player has choosen 
   * Is paramaters are the question choosen from the main game area, a list of fake answers and two handlers
   * updateAnswerhandler send a input to the model to update the question as answered
   * checkCorrectAnswerHandler sends input to check is the passed answers choosen from this view is teh correct answer
   */
  displayGameQuestion(questionChoosenObject, incorrectAnswerSet, updateAnswerhandler, checkCorrectAnswerHandler) {

    const $choosenQuestionContainer = $('<div>');
    $choosenQuestionContainer.addClass('question-modal-container');

    $('#mainGameContainer').append($choosenQuestionContainer);

    const $choosenQuestionHeadingContainer = $('<div>');
    $choosenQuestionHeadingContainer.addClass('question-heading-container');

    $($choosenQuestionContainer).append($choosenQuestionHeadingContainer);

    const $questionsCatagory = $('<p>').text(` Catagory : ${questionChoosenObject.category}`);
    const $questionsValue = $('<p>').text(`Value: $${ questionChoosenObject.questionValue}`);

    $($choosenQuestionHeadingContainer).append($questionsCatagory);
    $($choosenQuestionHeadingContainer).append($questionsValue);

    const $questionTextContainer = $('<div>');
    $questionTextContainer.addClass('question-container');
    $($choosenQuestionContainer).append($questionTextContainer);

    const $questionText = $('<p>');
    $($questionTextContainer).append($questionText).text(questionChoosenObject.question);

    const $listOfAnswersContainer = $('<div>');
    $listOfAnswersContainer.addClass('list-of-questions-answers-container');

    // randomly set where the answer will be in the question set
    const $answerPlacement = Math.floor(Math.random() * 4);
    $($choosenQuestionContainer).append($listOfAnswersContainer);
    for (let i = 0; i < 4; i++) {
      const $answerContainer = $('<div>');
      $answerContainer.addClass('answer-container');

      const $answerNumber = $('<div>');
      $answerNumber.addClass('answer-number').text(i + 1);
      const $answerButton = $('<button>');
      $answerButton.addClass('answer-button');


      if ($answerPlacement === i) {
        $answerButton.addClass('question-answer-button').text(questionChoosenObject.answer);
        if (questionChoosenObject.questionAnsweredCorrectly == 'correct') {
          $answerButton.css({
            "background-color": "green"
          });

        }
      } else {

        let randomAnswer = incorrectAnswerSet[Math.floor(Math.random() * incorrectAnswerSet.length)];
        $answerButton.text(randomAnswer);
      }
      $($listOfAnswersContainer).append($answerContainer);
      $($answerContainer).append($answerNumber);
      $($answerContainer).append($answerButton);
      if (questionChoosenObject.questionAnsweredCorrectly == 'correct' || questionChoosenObject.questionAnsweredCorrectly == 'incorrect') {
        $answerButton.css({
          "background-color": "red"
        });
        $('.question-answer-button').css({
          "background-color": "green"
        });
      } else {
        $answerButton.on('click', function () {
          checkCorrectAnswerHandler(questionChoosenObject, $answerButton.text())
        });
      }
      $($listOfAnswersContainer).append($answerContainer);
      $($answerContainer).append($answerNumber);
      $($answerContainer).append($answerButton);


    }
    const $answeredPrompt = $('<div>');
    $answeredPrompt.addClass('answer-prompt-container').text(questionChoosenObject.questionAnsweredCorrectly);
    $($choosenQuestionContainer).append($answeredPrompt);

    const $backToJeopardyBoardButton = $('<button>');
    $backToJeopardyBoardButton.addClass('back-to-jeopardy-board-button').text('Back to Board');
    // TODO set listener
    $backToJeopardyBoardButton.on('click', function () {
      updateAnswerhandler(questionChoosenObject)
    });
    $($choosenQuestionContainer).append($backToJeopardyBoardButton);
  }

  /**
   * displayEndGameScreen()
   * This Method display the game over screen 
   * GameState object from the model contains the values for if teh game was a tie or who is the winning player
   * the players objects is an array of the players objects in the game
   */
  displayEndGameScreen(players, gameState) {
    const $endGameScreenContainer = $('<div>');
    $endGameScreenContainer.addClass('end-screen-container');
    $('#mainGameContainer').append($endGameScreenContainer);
    const $playerFinalScoreTextContainer = $('<p>');
    if (gameState.gameEndedInTie === true) {
      $playerFinalScoreTextContainer.text(`Tie game`);
    } else {
      $playerFinalScoreTextContainer.text(`${gameState.winner} is the Winner!`);
    }

    $($endGameScreenContainer).append($playerFinalScoreTextContainer);

    const $finalScoreTextContainer = $('<p>');
    $finalScoreTextContainer.text(`Final Score`);
    $($endGameScreenContainer).append($finalScoreTextContainer);
    for (let i = 0; i < players.length; i++) {
      const $playerScoreContainer = $('<p>');
      $playerScoreContainer.text(`${players[i].playerName}: $${players[i].playerScore} `);
      $($finalScoreTextContainer).append($playerScoreContainer);
    }
  }
  /**
   * clearDisplay()
   * This Method  first emptys the child node because when append the container back 
   * it would keep the child nodes from the last assingment in the other views.
   * 
   */
  clearDisplay() {
    $('#game-screen').empty();
    $('#game-screen').remove();
    $('#mainGameContainer').remove();
    $('body').append(this.gameContainer);
  }
}

/*
 * This jeopardy app was inspired by the boilerplate code created by Tania Rascia
 * Reference is below.
 * The main inspiration from the reference was the use arrow function in the controller which prevents the need to manually bind all events 
 * The second most inpiration from the reference was the style of call backs to create a observer Behavioral pattern that the controller uses
 * when wathcing the model for updates.
 */

/*
 * Author: Tania Rascia
 * Date: July 30, 2019
 * Title of program: Build a Simple MVC App From Scratch in JavaScript
 * Type: (source code)
 * publisher: (https://www.taniarascia.com/javascript-mvc-todo-app/)
 *
 * Single line Referecne: Tania Rascia (July 30, 2019) Build a Simple MVC App From Scratch in JavaScript[Source code]. https://www.taniarascia.com/javascript-mvc-todo-app/.
 */

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    // binding the callbacks from the model 
    // Controller is obsereving these method form the model for an update about change in the model
    this.model.bindQuestionAnswered(this.onQuestionAnswered);
    this.model.bindFinalQuestionsFinished(this.onFinalQuestionFinished);
    this.model.bindonAFinalQuestionAnswered(this.onAFinalQuestionAnswered);
    this.start()
  }

  /**
   * start() 
   *  This function starts the display of the game and passed a hanndle let updates the display to
   *  main game area
   */
  start = () => {
    this.view.displayWelconeScreen(this.handleSetupMainGameArea);
  }

  /**
   * 
   * 
   */
  // handleUpdatePlayerName = (text) => {
  //   this.model.updatePlayerName(text);
  //   this.view.displayMainGameScoreBoard(this.model.players, this.model.gameState, this.model.currentPlayer.playerName);
  //   this.view.displayMainGameScreen(this.model.gameRoundOneQuestions, this.handleChoosenCatagoryScore, this.handleFinalQuestion);
  // }

  /**
   * handleSetupMainGameArea 
   * This handler populates the DOM with players score board and the cataogies columns for the players to choose from
   */
  handleSetupMainGameArea = () => {
    this.view.displayMainGameScoreBoard(this.model.players, this.model.gameState, this.model.currentPlayer.playerName);
    this.view.displayMainGameScreen(this.model.gameRoundOneQuestions, this.handleChoosenCatagoryScore, this.model.gameState, this.handleFinalQuestion);
  }

  /**
   * onQuestionAnswered
   *  This fucntion is a observer for when a player answers a question it will update the view to diplay if teh question was correct and
   *  change the color of the answers
   */
  onQuestionAnswered = (choosenCatagoryScore) => {
    this.model.upDateGameOutCome();
    this.view.displayMainGameScoreBoard(this.model.players, this.model.gameState, this.model.currentPlayer.playerName);
    this.view.displayGameQuestion(choosenCatagoryScore, this.model.incorrectAnswers, this.handleAnsweredQuestion, this.handleCheckIfAnswerIsCorrect);

  }

  /**
   * handleFinalQuestion()
   * Changed this function to present end game screen whith is onFinalQuestionsFinished handlers job
   */
  handleFinalQuestion = () => {

    this.view.displayMainGameScoreBoard(this.model.players, this.model.gameState, this.model.currentPlayer.playerName);
    this.onFinalQuestionsFinished();
    // this.view.displayMainGameScoreBoard(this.model.players, this.model.gameState, this.model.currentPlayer.playerName);
    // this.view.displayGameQuestion(this.model.finalQuestionSet[0], this.model.incorrectAnswers, this.handleCheckIfGameIsOver, this.handleCheckIfAnswerIsCorrect);
  }

  /**
   * 
   * 
   */

  handleCheckIfFinalAnswerISCorrect = (correctAnswerObj, answerChoosen) => {
    this.model.checkIfFinalQuestionAnsweredIsCorrect(answerChoosen, correctAnswerObj);
  }
  /**
   * 
   * 
   */
  handleCheckIfGameIsOver = () => {
    this.model.checkIfGameIsOver();
  }

  /**
   * handleAnsweredQuestion()
   * When a user pressed back to the board button after answering a question this handler is tells model to update
   * player turn and update that the question was answer so its updated in teh main game area as red and without a listner
   */
  handleAnsweredQuestion = (questionAnswered) => {
    console.log(questionAnswered);
    this.model.updateAnsweredQuestion(questionAnswered);
    this.model.updateCurrentPlayer();
    this.model.moveToNextStageIfRoundIsFinished();
    this.view.displayMainGameScoreBoard(this.model.players, this.model.gameState, this.model.currentPlayer.playerName);
    this.view.displayMainGameScreen(this.model.gameRoundOneQuestions, this.handleChoosenCatagoryScore, this.model.gameState, this.handleFinalQuestion);
  }

  /**
   * 
   * 
   */
  handleCheckIfAnswerIsCorrect = (correctAnswerObj, answerChoosen) => {
    console.log(answerChoosen);
    this.model.checkIfAnsweredIsCorrect(answerChoosen, correctAnswerObj);
  }

  /**
   * 
   * 
   */
  handleChoosenCatagoryScore = (choosenCatagoryScore) => {
    this.view.displayMainGameScoreBoard(this.model.players, this.model.gameState, this.model.currentPlayer.playerName, this.model.finalQuestionSet);
    this.view.displayGameQuestion(choosenCatagoryScore, this.model.incorrectAnswers, this.handleAnsweredQuestion, this.handleCheckIfAnswerIsCorrect);
    console.log(choosenCatagoryScore);
  }
  /**
   * 
   * 
   */
  // onAFinalQuestionAnswered = () => {
  //   this.view.displayMainGameScoreBoard(this.model.players, this.model.gameState, this.model.currentPlayer.playerName);
  //   this.view.displayGameQuestion(this.model.finalQuestionSet[1], this.model.incorrectAnswers, this.handleCheckIfGameIsOver, this.handleCheckIfAnswerIsCorrect);

  // }

  /**
   * 
   * 
   */
  onFinalQuestionsFinished = () => {
    this.view.displayEndGameScreen(this.model.players, this.model.gameState);
  }
}

const jeopardyGame = new Controller(new Model(), new View());
