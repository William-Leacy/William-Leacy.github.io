/* eslint-disable max-classes-per-file */
class Model {
  constructor() {
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
      gameQuestionCategory: 'Science',
      gameQuestionSet: [{
        question: 'Science-question-text-set-D',
        answer: 'Science-question-set-D',
        questionValue: '10',
        category: 'Science',
        questionIsAnswered: false,
        questionAnsweredCorrectly: null,
      },
      {
        question: 'Science-question-text-set-B',
        answer: 'Science-question-set-B',
        questionValue: '20',
        category: 'Science',
        questionIsAnswered: true,
      },
      {
        question: 'Science-question-text-set-B',
        answer: 'Science-question-set-B',
        questionValue: '30',
        category: 'Science',
        questionIsAnswered: true,
      },
      {
        question: 'Science-question-text-set-A',
        answer: 'Science-question-set-A',
        questionValue: '40',
        category: 'Science',
        questionIsAnswered: true,
      },
      {
        question: 'Science-question-text-set-A',
        answer: 'Science-question-set-A',
        questionValue: '50',
        category: 'Science',
        questionIsAnswered: true,
      },

      ],

    },
    {
      gameQuestionCategory: 'Films',
      gameQuestionSet: [{
        question: 'Films-question-text-set-D',
        answer: 'Films-question-set-D',
        questionValue: '10',
        category: 'Films',
        questionIsAnswered: true,
      },
      {
        question: 'Films-question-text-set-B',
        answer: 'Films-question-set-B',
        questionValue: '20',
        category: 'Films',
        questionIsAnswered: true,
      },
      {
        question: 'Films-question-text-set-B',
        answer: 'Films-question-set-B',
        questionValue: '30',
        category: 'Films',
        questionIsAnswered: true,
      },
      {
        question: 'Films-question-text-set-A',
        answer: 'Films-question-set-A',
        questionValue: '40',
        category: 'Films',
        questionIsAnswered: true,
      },
      {
        question: 'Films-question-text-set-A',
        answer: 'Films-question-set-A',
        questionValue: '50',
        category: 'Films',
        questionIsAnswered: true,
      },

      ],

    },
    {
      gameQuestionCategory: 'Culture',
      gameQuestionSet: [{
        question: 'Culture-question-text-set-D',
        answer: 'Culture-question-set-D',
        questionValue: '10',
        category: 'Culture',
        questionIsAnswered: true,
      },
      {
        question: 'Culture-question-text-set-B',
        answer: 'Culture-question-set-B',
        questionValue: '20',
        category: 'Culture',
        questionIsAnswered: true,
      },
      {
        question: 'Culture-question-text-set-B',
        answer: 'Culture-question-set-B',
        questionValue: '30',
        category: 'Culture',
        questionIsAnswered: true,
      },
      {
        question: 'Culture-question-text-set-A',
        answer: 'Culture-question-set-A',
        questionValue: '40',
        category: 'Culture',
        questionIsAnswered: true,
      },
      {
        question: 'Culture-question-text-set-A',
        answer: 'Culture-question-set-A',
        questionValue: '50',
        category: 'Culture',
        questionIsAnswered: true,
      },

      ],

    },
    {
      gameQuestionCategory: 'General Knowledge',
      gameQuestionSet: [{
        question: 'General Knowledge-question-text-set-D',
        answer: 'General Knowledge-question-set-D',
        questionValue: '10',
        category: 'General Knowledge',
        questionIsAnswered: true,
      },
      {
        question: 'General Knowledge-question-text-set-B',
        answer: 'General Knowledge-question-set-B',
        questionValue: '20',
        category: 'General Knowledge',
        questionIsAnswered: true,
      },
      {
        question: 'General Knowledge-question-text-set-B',
        answer: 'General Knowledge-question-set-B',
        questionValue: '30',
        category: 'General Knowledge',
        questionIsAnswered: true,
      },
      {
        question: 'General Knowledge-question-text-set-A',
        answer: 'General Knowledge-question-set-A',
        questionValue: '40',
        category: 'General Knowledge',
        questionIsAnswered: true,
      },
      {
        question: 'General Knowledge-question-text-set-A',
        answer: 'General Knowledge-question-set-A',
        questionValue: '50',
        category: 'General Knowledge',
        questionIsAnswered: true,
      },

      ],

    },
    {
      gameQuestionCategory: 'Music',
      gameQuestionSet: [{
        question: 'Music-question-text-set-D',
        answer: 'Music-question-set-D',
        questionValue: '10',
        category: 'Music',
        questionIsAnswered: true,
      },
      {
        question: 'Music-question-text-set-B',
        answer: 'Music-question-set-B',
        questionValue: '20',
        category: 'Music',
        questionIsAnswered: true,
      },
      {
        question: 'Music-question-text-set-B',
        answer: 'Music-question-set-B',
        questionValue: '30',
        category: 'Music',
        questionIsAnswered: true,
      },
      {
        question: 'Music-question-text-set-A',
        answer: 'Music-question-set-A',
        questionValue: '40',
        category: 'Music',
        questionIsAnswered: true,
      },
      {
        question: 'Music-question-text-set-A',
        answer: 'Music-question-set-A',
        questionValue: '50',
        category: 'Music',
        questionIsAnswered: true,
      },
      ],
    },
    {
      gameQuestionCategory: 'Music',
      gameQuestionSet: [{
        question: 'Music-question-text-set-D',
        answer: 'Music-question-set-D',
        questionValue: '10',
        category: 'Music',
        questionIsAnswered: true,
      },
      {
        question: 'Music-question-text-set-B',
        answer: 'Music-question-set-B',
        questionValue: '20',
        category: 'Music',
        questionIsAnswered: true,
      },
      {
        question: 'Music-question-text-set-B',
        answer: 'Music-question-set-B',
        questionValue: '30',
        category: 'Music',
        questionIsAnswered: true,
      },
      {
        question: 'Music-question-text-set-A',
        answer: 'Music-question-set-A',
        questionValue: '40',
        category: 'Music',
        questionIsAnswered: true,
      },
      {
        question: 'Music-question-text-set-A',
        answer: 'Music-question-set-A',
        questionValue: '50',
        category: 'Music',
        questionIsAnswered: true,
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
      if (this.fullListOfquestionCategoires.includes(question.category)) {
      } else {
        this.fullListOfquestionCategoires.push(question.category);
      }
    }
  }

/**
 * 
 * 
 */
  randomGenrateRoundCategories() {
    // store list of all categoires in an array for splicing
    const categoires = this.fullListOfquestionCategoires;
    for (let i = 0; i < 6; i++) {
      const randomCategory = categoires[Math.floor(Math.random() * categoires.length)];
      this.gameRoundCategories.push(randomCategory);
      categoires.splice(categoires.indexOf(randomCategory), 1);
    }
  }


  moveToNextStageIfRoundIsFinished() {
    console.log('moveToNextStageIfRoundIsFinished');
    if(this.gameState.gameRound === 1){
      if(this.checkIfGameRoundQuestionsAreAnswered(this.gameRoundOneQuestions) === true) {
        this.updateGameStage();
      }
    }else if(this.gameState.gameRound === 2){
      if(this.checkIfGameRoundQuestionsAreAnswered(this.gameRoundTwoQuestions) === true) {
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

    updateGameStage(){
    console.log('updateGameStage');
    if (this.gameState.readyForFinalQuestion === false) {
      this.gameState.readyForFinalQuestion = true;
    } 
  }


/**
 * 
 * 
 */
  updatePlayerName(playerChoosenName) {
    this.playerName = playerChoosenName;
  }

/**
 * 
 * 
 */
  updateAnsweredQuestion(questionAnswered){
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
  if(checkIfGameRoundQuestionsAreAnswered(this.finalQuestionSet === true)){
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
    if(answerChoosen.answer === correctAnswer){
      console.log("correct");
      this.currentPlayer.playerScore = this.currentPlayer.playerScore + parseInt(answerChoosen.questionValue, 10);
      answerChoosen.questionAnsweredCorrectly = "correct";
    } else {
      this.currentPlayer.playerScore = this.currentPlayer.playerScore -  parseInt(answerChoosen.questionValue, 10);
      answerChoosen.questionAnsweredCorrectly = "incorrect";
      console.log("incorrect");
    }
    this.updateAnsweredQuestion(answerChoosen);
    this.onQuestionAnswered(answerChoosen);
  }

  checkIfFinalQuestionAnsweredIsCorrect(correctAnswer, answerChoosen) {
    console.log(correctAnswer);
    console.log(answerChoosen);
    if(answerChoosen.answer === correctAnswer){
      console.log("correct");
      this.currentPlayer.playerScore = this.currentPlayer.playerScore + parseInt(answerChoosen.questionValue, 10);
      answerChoosen.questionAnsweredCorrectly = "correct";
    } else {
      this.currentPlayer.playerScore = this.currentPlayer.playerScore -  parseInt(answerChoosen.questionValue, 10);
      answerChoosen.questionAnsweredCorrectly = "incorrect";
      console.log("incorrect");
    }
    this.updateAnsweredQuestion(answerChoosen);
    this.onFinalQuestionsFinished();
  }
  updateCurrentPlayer() {
    console.log(this.currentPlayer);
    if(this.currentPlayer === this.players[0]){
      this.currentPlayer = this.players[1];
      console.log(this.currentPlayer);
    } else {
      this.currentPlayer = this.players[0];
      console.log(this.currentPlayer);
    }
  }

/**
 * 
 * 
 */
  generateListOfRandomIncorrectAnswers() {
    const answersInUse = [];
    for (let i = 0; i < this.gameRoundOneQuestions.length; i++) {
      for (let j = 0; j < this.gameRoundOneQuestions[i].gameQuestionSet.length; j++) {
        answersInUse.push(this.gameRoundOneQuestions[i].gameQuestionSet[j].answer);
      }
    }
    for (const question of this.listOfGameQuestions) {
      if (answersInUse.includes(question.answer)) {} else {
        this.incorrectAnswers.push(question.answer);
      }
    }
  }
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
    $($nextButton).on('click',function(){handler()});
    $(this.gameContainer).append($welcomeScreen);
    $welcomeScreen.append($welcomeTitle);
    $welcomeScreen.append($nextButton);
  }

/**
 * 
 * 
 */
  displayMainGameScoreBoard(players,gameState, currentPlayer) {
    const $mainGameScreenContainer = $('<div>');
    $mainGameScreenContainer.attr('id','mainGameContainer');
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
        if(gameQuestionSet[i].gameQuestionSet[j].questionIsAnswered === false){

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

    if(gameState.readyForFinalQuestion === true){
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
  displayGameQuestion(questionChoosenObject,incorrectAnswerSet,updateAnswerhandler,checkCorrectAnswerHandler) {
//     console.log(incorrectAnswerSet.size());
//  console.log(typeof(incorrectAnswerSet))


    const $choosenQuestionContainer = $('<div>');
    $choosenQuestionContainer.addClass('question-modal-container');

    $('#mainGameContainer').append($choosenQuestionContainer);

    const $choosenQuestionHeadingContainer = $('<div>');
    $choosenQuestionHeadingContainer.addClass('question-heading-container');
    
    $($choosenQuestionContainer).append($choosenQuestionHeadingContainer);

    const $questionsCatagory = $('<p>').text(questionChoosenObject.category);
    const $questionsValue = $('<p>').text('$'+questionChoosenObject.questionValue);

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
      $answerNumber.addClass('answer-number').text(i+1);
      const $answerButton = $('<button>');


      if($answerPlacement === i){
        $answerButton.addClass('question-answer-button').text(questionChoosenObject.answer);
        if(questionChoosenObject.questionAnsweredCorrectly == 'correct'){
          $answerButton.css({"background-color": "green"});

        } 
      } else {

                 let randomAnswer = incorrectAnswerSet[Math.floor(Math.random() * incorrectAnswerSet.length)];
          $answerButton.text(randomAnswer);
      }
      $($listOfAnswersContainer).append($answerContainer);
      $($answerContainer).append($answerNumber);
      $($answerContainer).append($answerButton);
      if(questionChoosenObject.questionAnsweredCorrectly == 'correct' ||questionChoosenObject.questionAnsweredCorrectly == 'incorrect'){
        $answerButton.css({"background-color": "red"});
        $('.question-answer-button').css({"background-color": "green"});
      } else {
        $answerButton.on('click', function() { checkCorrectAnswerHandler(questionChoosenObject,$answerButton.text())});
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
    $backToJeopardyBoardButton.on('click', function() { updateAnswerhandler(questionChoosenObject)});
    $($choosenQuestionContainer).append($backToJeopardyBoardButton);
  }

/**
 * 
 * 
 */
  displayEndGameScreen(players,gameState) {
  const $endGameScreenContainer= $('<div>');
  $endGameScreenContainer.addClass('end-screen-container');
  $('#mainGameContainer').append($endGameScreenContainer)

  const $playerFinalScoreTextContainer= $('<p>');
  if(gameState.gameEndedInTie === true){
    $playerFinalScoreTextContainer.text(`Tie game`);
  } else {
    $playerFinalScoreTextContainer.text(`${gameState.winner} is the Winner!`);
  }

  $($endGameScreenContainer).append($playerFinalScoreTextContainer)

  const $finalScoreTextContainer= $('<p>');
  $finalScoreTextContainer.text(`Final Score`);
  $($endGameScreenContainer).append($finalScoreTextContainer)
  for (let i = 0; i < players.length; i++) {
    const $playerScoreContainer= $('<p>');
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

  onAFinalQuestionAnswered = () =>{
    
    this.view.clearDisplay();
    this.view.displayMainGameScoreBoard(this.model.players,this.model.gameState,this.model.currentPlayer.playerName);
    this.view.displayGameQuestion(this.model.finalQuestionSet[1],this.model.incorrectAnswers,this.handleCheckIfGameIsOver,this.handleCheckIfAnswerIsCorrect);

  }

  onQuestionAnswered = (choosenCatagoryScore) =>{
    

    this.view.clearDisplay();
    this.view.displayMainGameScoreBoard(this.model.players,this.model.gameState,this.model.currentPlayer.playerName);
    this.view.displayGameQuestion(choosenCatagoryScore,this.model.incorrectAnswers,this.handleAnsweredQuestion,this.handleCheckIfAnswerIsCorrect);

  }

  onFinalQuestionsFinished = () =>{
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
    this.view.displayMainGameScoreBoard(this.model.players,this.model.gameState,this.model.currentPlayer.playerName);
    this.view.displayMainGameScreen(this.model.gameRoundOneQuestions,this.handleChoosenCatagoryScore,this.handleFinalQuestion);
  }

/**
 * 
 * 
 */
  handleSetupMainGameArea = () => {
    this.view.clearDisplay();
    this.view.displayMainGameScoreBoard(this.model.players,this.model.gameState,this.model.currentPlayer.playerName);
    this.view.displayMainGameScreen(this.model.gameRoundOneQuestions,this.handleChoosenCatagoryScore,this.model.gameState,this.handleFinalQuestion);
  }

  /**
 * 
 * 
 */
handleFinalQuestion = () => {
  console.log("Final question");
  this.view.clearDisplay();
  this.view.displayMainGameScoreBoard(this.model.players,this.model.gameState,this.model.currentPlayer.playerName);
  this.view.displayGameQuestion(this.model.finalQuestionSet[0],this.model.incorrectAnswers,this.handleCheckIfGameIsOver,this.handleCheckIfAnswerIsCorrect);
}



handleCheckIfFinalAnswerISCorrect = (correctAnswerObj,answerChoosen) => {
  console.log(answerChoosen);
  this.model.checkIfFinalQuestionAnsweredIsCorrect(answerChoosen,correctAnswerObj);
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
    this.view.displayMainGameScoreBoard(this.model.players,this.model.gameState,this.model.currentPlayer.playerName);
    this.view.displayMainGameScreen(this.model.gameRoundOneQuestions,this.handleChoosenCatagoryScore,this.model.gameState,this.handleFinalQuestion);
  }

/**
 * 
 * 
 */
  handleCheckIfAnswerIsCorrect = (correctAnswerObj,answerChoosen) => {
    console.log(answerChoosen);
    this.model.checkIfAnsweredIsCorrect(answerChoosen,correctAnswerObj);
  }

/**
 * 
 * 
 */
  handleChoosenCatagoryScore = (choosenCatagoryScore) => {
    this.view.clearDisplay();
    this.view.displayMainGameScoreBoard(this.model.players,this.model.gameState,this.model.currentPlayer.playerName,this.model.finalQuestionSet);
    this.view.displayGameQuestion(choosenCatagoryScore,this.model.incorrectAnswers,this.handleAnsweredQuestion,this.handleCheckIfAnswerIsCorrect);
    console.log(choosenCatagoryScore);
  }
}

const jeopardyGame = new Controller(new Model(), new View());

