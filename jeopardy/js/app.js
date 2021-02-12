/* eslint-disable max-classes-per-file */
class Model {
  constructor(){
    this.players = [
      {
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
      readyForFinalQuestion: true,
      gameEndedInTie: false,
      winner: "",
      
    }

    this.gameRoundOneQuestions = [{
      gameQuestionCategory: 'Food',
      gameQuestionSet: [{
        question: 'his country in Europe consumes more spicy Mexican food than any other',
        answer: 'What is Norway',
        questionValue: '10',
        category: 'Food',
        questionIsAnswered: false,
      },
      {
        question: 'This country does Rioja Wine come from',
        answer: 'What is Spain',
        questionValue: '20',
        category: 'Food',
        questionIsAnswered: false,
      },
      {
        question: 'This is the fruit that contains the most calories',
        answer: 'What is Avocado pear',
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
        answer: 'What is Greece',
        questionValue: '50',
        category: 'Food',
        questionIsAnswered: false,
      },],
    },
    {
        gameQuestionCategory: 'Science',
        gameQuestionSet: [{
            question: 'This process involves heating an ore to obtain a meta',
            answer: 'What is Smelting',
            questionValue: '10',
            category: 'Science',
            questionIsAnswered: false,
            questionAnsweredCorrectly: null,
          },
          {
            question: 'This hazardous substance is euphemistically referred to as "mineral fiber',
            answer: 'What is Asbestos',
            questionValue: '20',
            category: 'Science',
            questionIsAnswered: false,
          },
          {
            question: 'This method of underwater detection is short for "sound navigation and ranging"',
            answer: 'What is Sonar',
            questionValue: '30',
            category: 'Science',
            questionIsAnswered: false,
          },
          {
            question: 'This sugar found in fruit is known by what name',
            answer: 'What is Fructose',
            questionValue: '40',
            category: 'Science',
            questionIsAnswered: false,
          },
          {
            question: 'This unit of electrical power is equal to one joule per second',
            answer: ' What is Watt',
            questionValue: '50',
            category: 'Science',
            questionIsAnswered: false,
          },],
        },
    {
        gameQuestionCategory: 'Animals',
        gameQuestionSet: [{
            question: 'This type of mammals fly using echolocation',
            answer: 'What is Bat',
            questionValue: '10',
            category: 'Animals',
            questionIsAnswered: false,
          },
          {
            question: 'This type of animal is the symbol of medicine',
            answer: 'What is Snake',
            questionValue: '20',
            category: 'Animals',
            questionIsAnswered: false,
          },
          {
            question: 'This animals make a sound called nuzzing',
            answer: 'Waht is Camel',
            questionValue: '30',
            category: 'Animals',
            questionIsAnswered: false,
          },
          {
            question: 'This animal has rectangular pupils',
            answer: 'What is Goat',
            questionValue: '40',
            category: 'Animals',
            questionIsAnswered: false,
          },
          {
            question: 'This animal appears first in the dictionary',
            answer: 'What is Aardvark',
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
            answer: 'What is Silicon',
            questionValue: '10',
            category: 'Computers',
            questionIsAnswered: false,
          },
          {
            question: 'This first computer used for weather research was named what',
            answer: 'What is MANIAC',
            questionValue: '20',
            category: 'Computers',
            questionIsAnswered: false,
          },
          {
            question: 'This personal computer became a video production system with the addition of New Teks Video Toaster',
            answer: 'What is Amiga',
            questionValue: '30',
            category: 'Computers',
            questionIsAnswered: false,
          },
          {
            question: 'This display commonly found in notebook and laptop computers',
            answer: 'What is Liquid Crystal Display',
            questionValue: '40',
            category: 'Computers',
            questionIsAnswered: false,
          },
          {
            question: 'This computer language is an acronym of the name of the worlds first computer programme',
            answer: 'What is ADA',
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
            answer: 'What is Sony Playstation',
            questionValue: '10',
            category: 'Video Games',
            questionIsAnswered: false,
          },
          {
            question: 'This video game made the character Master Chief famous',
            answer: 'What is Halo',
            questionValue: '20',
            category: 'Video Games',
            questionIsAnswered: false,
          },
          {
            question: 'This video game made the Golden Gun famous?',
            answer: 'Music-question-set-B',
            questionValue: '30',
            category: 'Video Games',
            questionIsAnswered: false,
          },
          {
            question: 'This character is Sega mascot',
            answer: 'What is Goldeneye',
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
            answer: 'Who is Paul McCartney',
            questionValue: '10',
            category: 'Music',
            questionIsAnswered: false,
          },
          {
            question: 'This group wrote the songs for the movie Saturday Night Fever',
            answer: 'Who is Bee Gees',
            questionValue: '20',
            category: 'Music',
            questionIsAnswered: false,
          },
          {
            question: 'This British group got its name from the title of a 1950 Muddy Waters song',
            answer: 'Who is Rolling Stones',
            questionValue: '30',
            category: 'Music',
            questionIsAnswered: false,
          },
          {
            question: 'This rock group only beardless member is Frank Beard',
            answer: 'Who is ZZ Top',
            questionValue: '40',
            category: 'Music',
            questionIsAnswered: false,
          },
          {
            question: 'Music: Tusk was a best-selling album for this band',
            answer: 'Who is Fleetwood Mac',
            questionValue: '50',
            category: 'Music',
            questionIsAnswered: false,
          },
        ],
    },

    ];
    this.finalQuestionSet = [      {
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
    },];

    this.incorrectAnswers = ['test','test','test','test','test','test','test','test','test'];

  }

        // create a list of all categoires avaible to play
        generateListOfAllCategoires() {
          for (const question of this.listOfGameQuestions) {
            if (this.fullListOfquestionCategoires.includes(question.category)) {} else {
              this.fullListOfquestionCategoires.push(question.category);
            }
          }
        }

        moveToNextStageIfRoundIsFinished() {
          console.log('moveToNextStageIfRoundIsFinished');
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
          console.log('checkIfGameRoundQuestionsAreAnswered');
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
          console.log('updateGameStage');
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
          console.log(questionAnswered);
        }

        bindFinalQuestionsFinished(callback) {
          this.onFinalQuestionsFinished = callback;
        }

        bindonAFinalQuestionAnswered(callback) {
          this.onAFinalQuestionAnswered = callback;
        }

        checkIfGameIsOver() {
          if (checkIfGameRoundQuestionsAreAnswered(this.finalQuestionSet === true)) {
            //callback
            this.onFinalQuestionsFinished();
          } else {
            this.onAFinalQuestionAnswered();
          }

        }
        /**
         * 
         * 
         */

        bindQuestionAnswered(callback) {
          this.onQuestionAnswered = callback;
        }
        checkIfAnsweredIsCorrect(correctAnswer, answerChoosen) {
          console.log(correctAnswer);
          console.log(answerChoosen);
          if (answerChoosen.answer === correctAnswer) {
            console.log("correct");
            this.currentPlayer.playerScore = this.currentPlayer.playerScore + parseInt(answerChoosen.questionValue, 10);
            answerChoosen.questionAnsweredCorrectly = "correct";
          } else {
            this.currentPlayer.playerScore = this.currentPlayer.playerScore - parseInt(answerChoosen.questionValue, 10);
            answerChoosen.questionAnsweredCorrectly = "incorrect";
            console.log("incorrect");
          }
          this.updateAnsweredQuestion(answerChoosen);
          this.onQuestionAnswered(answerChoosen);
        }

        checkIfFinalQuestionAnsweredIsCorrect(correctAnswer, answerChoosen) {
          console.log(correctAnswer);
          console.log(answerChoosen);
          if (answerChoosen.answer === correctAnswer) {
            console.log("correct");
            this.currentPlayer.playerScore = this.currentPlayer.playerScore + parseInt(answerChoosen.questionValue, 10);
            answerChoosen.questionAnsweredCorrectly = "correct";
          } else {
            this.currentPlayer.playerScore = this.currentPlayer.playerScore - parseInt(answerChoosen.questionValue, 10);
            answerChoosen.questionAnsweredCorrectly = "incorrect";
            console.log("incorrect");
          }
          this.updateAnsweredQuestion(answerChoosen);
          this.onFinalQuestionsFinished();
        }
        updateCurrentPlayer() {
          console.log(this.currentPlayer);
          if (this.currentPlayer === this.players[0]) {
            this.currentPlayer = this.players[1];
            console.log(this.currentPlayer);
          } else {
            this.currentPlayer = this.players[0];
            console.log(this.currentPlayer);
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
         * 
         * 
         */
        displayWelconeScreen(handler) {
          const $welcomeScreen = $('<div>');
          $welcomeScreen.addClass('modal-container');
          const $welcomeTitle = $('<h1>').text('Jeopardy!');
          const $nextButton = $('<button>').text('Play Game').attr('id', 'confirm-player-name-input-button');
          $($nextButton).on('click', function () {
            handler()
          });
          $(this.gameContainer).append($welcomeScreen);
          $welcomeScreen.append($welcomeTitle);
          $welcomeScreen.append($nextButton);
        }

        /**
         * 
         * 
         */
        displayMainGameScoreBoard(players, gameState, currentPlayer) {
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

            const $playerAvatar = $('<div>');
            $playerAvatar.addClass('player-avatar').html('&#x1F600');

            const $playerNamePlayerScoreContainer = $('<div>');
            $playerNamePlayerScoreContainer.addClass('player-name-player-score-container');

            const $playerNameContainer = $('<p>');
            $playerNameContainer.text(players[i].playerName);

            const $playerScoreContainer = $('<p>');
            $playerScoreContainer.text('$' + players[i].playerScore);
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
         * 
         * 
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
              $button.addClass('catagory-score-value-button').text(gameQuestionSet[i].gameQuestionSet[j].questionValue);
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
          $finalQuestionbutton.addClass('final-round-question-button').text('Final Question');

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
         * 
         * 
         */
        displayGameQuestion(questionChoosenObject, incorrectAnswerSet, updateAnswerhandler, checkCorrectAnswerHandler) {
          //     console.log(incorrectAnswerSet.size());
          //  console.log(typeof(incorrectAnswerSet))


          const $choosenQuestionContainer = $('<div>');
          $choosenQuestionContainer.addClass('question-modal-container');

          $('#mainGameContainer').append($choosenQuestionContainer);

          const $choosenQuestionHeadingContainer = $('<div>');
          $choosenQuestionHeadingContainer.addClass('question-heading-container');

          $($choosenQuestionContainer).append($choosenQuestionHeadingContainer);

          const $questionsCatagory = $('<p>').text(questionChoosenObject.category);
          const $questionsValue = $('<p>').text('$' + questionChoosenObject.questionValue);

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
          $answeredPrompt.text(questionChoosenObject.questionAnsweredCorrectly);
          $($choosenQuestionContainer).append($answeredPrompt);

          const $backToJeopardyBoardButton = $('<button>');
          $backToJeopardyBoardButton.text('Back to Board');
          // TODO set listener
          $backToJeopardyBoardButton.on('click', function () {
            updateAnswerhandler(questionChoosenObject)
          });
          $($choosenQuestionContainer).append($backToJeopardyBoardButton);
        }

        /**
         * 
         * 
         */
        displayEndGameScreen(players, gameState) {
          const $endGameScreenContainer = $('<div>');
          $endGameScreenContainer.addClass('end-screen-container');
          $('#mainGameContainer').append($endGameScreenContainer)

          const $playerFinalScoreTextContainer = $('<p>');
          if (gameState.gameEndedInTie === true) {
            $playerFinalScoreTextContainer.text(`Tie game`);
          } else {
            $playerFinalScoreTextContainer.text(`${gameState.winner} is the Winner!`);
          }

          $($endGameScreenContainer).append($playerFinalScoreTextContainer)

          const $finalScoreTextContainer = $('<p>');
          $finalScoreTextContainer.text(`Final Score`);
          $($endGameScreenContainer).append($finalScoreTextContainer)
          for (let i = 0; i < players.length; i++) {
            const $playerScoreContainer = $('<p>');
            $playerScoreContainer.text(`${players[i].playerName}: $${players[i].playerScore} `);
            $($finalScoreTextContainer).append($playerScoreContainer);
          }
        }

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
          // this.view.displayWelconeScreen(this.handlePlayerNameInput);

          // this.view.displayWelconeScreen(this.handlePlayerNameInput);
          //  this.view.displayGameQuestion(this.handleAnsweredQuestion);
          //  this.view.displayGameQuestion(this.handleAnsweredQuestion);

          this.model.bindQuestionAnswered(this.onQuestionAnswered);
          this.model.bindFinalQuestionsFinished(this.onFinalQuestionFinished);
          this.model.bindonAFinalQuestionAnswered(this.onAFinalQuestionAnswered);
          // this.view.displayGameQuestion = this.view.displayGameQuestion.bind(this);
          // this.handlePromtCorrectAnswer =  this.handlePromtCorrectAnswer.bind(this);



          this.start()
        }

        onAFinalQuestionAnswered = () => {

          this.view.clearDisplay();
          this.view.displayMainGameScoreBoard(this.model.players, this.model.gameState, this.model.currentPlayer.playerName);
          this.view.displayGameQuestion(this.model.finalQuestionSet[1], this.model.incorrectAnswers, this.handleCheckIfGameIsOver, this.handleCheckIfAnswerIsCorrect);

        }

        onQuestionAnswered = (choosenCatagoryScore) => {


          this.view.clearDisplay();
          this.view.displayMainGameScoreBoard(this.model.players, this.model.gameState, this.model.currentPlayer.playerName);
          this.view.displayGameQuestion(choosenCatagoryScore, this.model.incorrectAnswers, this.handleAnsweredQuestion, this.handleCheckIfAnswerIsCorrect);

        }

        onFinalQuestionsFinished = () => {
          this.view.clearDisplay();
          this.view.displayEndGameScreen(this.model.players, this.model.gameState);
        }


        start = () => {
          this.view.displayWelconeScreen(this.handleSetupMainGameArea);
        }
        /**
         * 
         * 
         */
        handleUpdatePlayerName = (text) => {
          this.model.updatePlayerName(text);
          this.view.displayMainGameScoreBoard(this.model.players, this.model.gameState, this.model.currentPlayer.playerName);
          this.view.displayMainGameScreen(this.model.gameRoundOneQuestions, this.handleChoosenCatagoryScore, this.handleFinalQuestion);
        }

        /**
         * 
         * 
         */
        handleSetupMainGameArea = () => {
          this.view.clearDisplay();
          this.view.displayMainGameScoreBoard(this.model.players, this.model.gameState, this.model.currentPlayer.playerName);
          this.view.displayMainGameScreen(this.model.gameRoundOneQuestions, this.handleChoosenCatagoryScore, this.model.gameState, this.handleFinalQuestion);
        }

        /**
         * 
         * 
         */
        handleFinalQuestion = () => {
          console.log("Final question");
          this.view.clearDisplay();
          this.view.displayMainGameScoreBoard(this.model.players, this.model.gameState, this.model.currentPlayer.playerName);
          this.view.displayGameQuestion(this.model.finalQuestionSet[0], this.model.incorrectAnswers, this.handleCheckIfGameIsOver, this.handleCheckIfAnswerIsCorrect);
        }



        handleCheckIfFinalAnswerISCorrect = (correctAnswerObj, answerChoosen) => {
          console.log(answerChoosen);
          this.model.checkIfFinalQuestionAnsweredIsCorrect(answerChoosen, correctAnswerObj);
        }
        handleCheckIfGameIsOver = () => {
          console.log("hcecking if game is over");
          this.model.checkIfGameIsOver();
        }


        /**
         * 
         * 
         */
        handleAnsweredQuestion = (questionAnswered) => {
          console.log(questionAnswered);
          this.model.updateAnsweredQuestion(questionAnswered);
          this.model.updateCurrentPlayer();
          this.model.moveToNextStageIfRoundIsFinished();
          this.view.clearDisplay();
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
          this.view.clearDisplay();
          this.view.displayMainGameScoreBoard(this.model.players, this.model.gameState, this.model.currentPlayer.playerName, this.model.finalQuestionSet);
          this.view.displayGameQuestion(choosenCatagoryScore, this.model.incorrectAnswers, this.handleAnsweredQuestion, this.handleCheckIfAnswerIsCorrect);
          console.log(choosenCatagoryScore);
        }
      }

      const jeopardyGame = new Controller(new Model(), new View());
