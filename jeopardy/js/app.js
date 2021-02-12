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
      readyForFinalQuestion: false,
    }
    this.listOfGameQuestions = [{
      question: 'geography-question-text-set-A',
      answer: 'geography-question-set-A',
      questionValue: '100',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-A',
      answer: 'geography-question-set-A',
      questionValue: '200',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-A',
      answer: 'geography-question-set-A',
      questionValue: '300',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-A',
      answer: 'geography-question-set-A',
      questionValue: '400',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-A',
      answer: 'geography-question-set-A',
      questionValue: '500',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-A',
      answer: 'geography-question-set-A',
      questionValue: '600',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-A',
      answer: 'geography-question-set-A',
      questionValue: '700',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-A',
      answer: 'geography-question-set-A',
      questionValue: '800',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-A',
      answer: 'geography-question-set-A',
      questionValue: '900',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-A',
      answer: 'geography-question-set-A',
      questionValue: '1000',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-B',
      answer: 'geography-question-set-B',
      questionValue: '100',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-B',
      answer: 'geography-question-set-B',
      questionValue: '200',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-B',
      answer: 'geography-question-set-B',
      questionValue: '300',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-B',
      answer: 'geography-question-set-B',
      questionValue: '400',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-B',
      answer: 'geography-question-set-B',
      questionValue: '500',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-B',
      answer: 'geography-question-set-B',
      questionValue: '600',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-B',
      answer: 'geography-question-set-B',
      questionValue: '700',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-B',
      answer: 'geography-question-set-B',
      questionValue: '800',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-B',
      answer: 'geography-question-set-B',
      questionValue: '900',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-B',
      answer: 'geography-question-set-B',
      questionValue: '1000',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-C',
      answer: 'geography-question-set-C',
      questionValue: '100',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-C',
      answer: 'geography-question-set-C',
      questionValue: '200',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-C',
      answer: 'geography-question-set-C',
      questionValue: '300',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-C',
      answer: 'geography-question-set-C',
      questionValue: '400',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-C',
      answer: 'geography-question-set-C',
      questionValue: '500',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-C',
      answer: 'geography-question-set-C',
      questionValue: '600',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-C',
      answer: 'geography-question-set-C',
      questionValue: '700',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-C',
      answer: 'geography-question-set-C',
      questionValue: '800',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-C',
      answer: 'geography-question-set-C',
      questionValue: '900',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-C',
      answer: 'geography-question-set-C',
      questionValue: '1000',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-D',
      answer: 'geography-question-set-D',
      questionValue: '100',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-D',
      answer: 'geography-question-set-D',
      questionValue: '200',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-D',
      answer: 'geography-question-set-D',
      questionValue: '300',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-D',
      answer: 'geography-question-set-D',
      questionValue: '400',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-D',
      answer: 'geography-question-set-D',
      questionValue: '500',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-D',
      answer: 'geography-question-set-D',
      questionValue: '600',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-D',
      answer: 'geography-question-set-D',
      questionValue: '700',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-D',
      answer: 'geography-question-set-D',
      questionValue: '800',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-D',
      answer: 'geography-question-set-D',
      questionValue: '900',
      category: 'geography',
    },
    {
      question: 'geography-question-text-set-D',
      answer: 'geography-question-set-D',
      questionValue: '1000',
      category: 'geography',
    },

    /// /// history-
    {
      question: 'history-question-text-set-A',
      answer: 'history-question-set-A',
      questionValue: '100',
      category: 'history',
    },
    {
      question: 'history-question-text-set-A',
      answer: 'history-question-set-A',
      questionValue: '200',
      category: 'history',
    },
    {
      question: 'history-question-text-set-A',
      answer: 'history-question-set-A',
      questionValue: '300',
      category: 'history',
    },
    {
      question: 'history-question-text-set-A',
      answer: 'history-question-set-A',
      questionValue: '400',
      category: 'history',
    },
    {
      question: 'history-question-text-set-A',
      answer: 'history-question-set-A',
      questionValue: '500',
      category: 'history',
    },
    {
      question: 'history-question-text-set-A',
      answer: 'history-question-set-A',
      questionValue: '600',
      category: 'history',
    },
    {
      question: 'history-question-text-set-A',
      answer: 'history-question-set-A',
      questionValue: '700',
      category: 'history',
    },
    {
      question: 'history-question-text-set-A',
      answer: 'history-question-set-A',
      questionValue: '800',
      category: 'history',
    },
    {
      question: 'history-question-text-set-A',
      answer: 'history-question-set-A',
      questionValue: '900',
      category: 'history',
    },
    {
      question: 'history-question-text-set-A',
      answer: 'history-question-set-A',
      questionValue: '1000',
      category: 'history',
    },
    {
      question: 'history-question-text-set-B',
      answer: 'history-question-set-B',
      questionValue: '100',
      category: 'history',
    },
    {
      question: 'history-question-text-set-B',
      answer: 'history-question-set-B',
      questionValue: '200',
      category: 'history',
    },
    {
      question: 'history-question-text-set-B',
      answer: 'history-question-set-B',
      questionValue: '300',
      category: 'history',
    },
    {
      question: 'history-question-text-set-B',
      answer: 'history-question-set-B',
      questionValue: '400',
      category: 'history',
    },
    {
      question: 'history-question-text-set-B',
      answer: 'history-question-set-B',
      questionValue: '500',
      category: 'history',
    },
    {
      question: 'history-question-text-set-B',
      answer: 'history-question-set-B',
      questionValue: '600',
      category: 'history',
    },
    {
      question: 'history-question-text-set-B',
      answer: 'history-question-set-B',
      questionValue: '700',
      category: 'history',
    },
    {
      question: 'history-question-text-set-B',
      answer: 'history-question-set-B',
      questionValue: '800',
      category: 'history',
    },
    {
      question: 'history-question-text-set-B',
      answer: 'history-question-set-B',
      questionValue: '900',
      category: 'history',
    },
    {
      question: 'history-question-text-set-B',
      answer: 'history-question-set-B',
      questionValue: '1000',
      category: 'history',
    },
    {
      question: 'history-question-text-set-C',
      answer: 'history-question-set-C',
      questionValue: '100',
      category: 'history',
    },
    {
      question: 'history-question-text-set-C',
      answer: 'history-question-set-C',
      questionValue: '200',
      category: 'history',
    },
    {
      question: 'history-question-text-set-C',
      answer: 'history-question-set-C',
      questionValue: '300',
      category: 'history',
    },
    {
      question: 'history-question-text-set-C',
      answer: 'history-question-set-C',
      questionValue: '400',
      category: 'history',
    },
    {
      question: 'history-question-text-set-C',
      answer: 'history-question-set-C',
      questionValue: '500',
      category: 'history',
    },
    {
      question: 'history-question-text-set-C',
      answer: 'history-question-set-C',
      questionValue: '600',
      category: 'history',
    },
    {
      question: 'history-question-text-set-C',
      answer: 'history-question-set-C',
      questionValue: '700',
      category: 'history',
    },
    {
      question: 'history-question-text-set-C',
      answer: 'history-question-set-C',
      questionValue: '800',
      category: 'history',
    },
    {
      question: 'history-question-text-set-C',
      answer: 'history-question-set-C',
      questionValue: '900',
      category: 'history',
    },
    {
      question: 'history-question-text-set-C',
      answer: 'history-question-set-C',
      questionValue: '1000',
      category: 'history',
    }, {
      question: 'history-question-text-set-D',
      answer: 'history-question-set-D',
      questionValue: '100',
      category: 'history',
    },
    {
      question: 'history-question-text-set-D',
      answer: 'history-question-set-D',
      questionValue: '200',
      category: 'history',
    },
    {
      question: 'history-question-text-set-D',
      answer: 'history-question-set-D',
      questionValue: '300',
      category: 'history',
    },
    {
      question: 'history-question-text-set-D',
      answer: 'history-question-set-D',
      questionValue: '400',
      category: 'history',
    },
    {
      question: 'history-question-text-set-D',
      answer: 'history-question-set-D',
      questionValue: '500',
      category: 'history',
    },
    {
      question: 'history-question-text-set-D',
      answer: 'history-question-set-D',
      questionValue: '600',
      category: 'history',
    },
    {
      question: 'history-question-text-set-D',
      answer: 'history-question-set-D',
      questionValue: '700',
      category: 'history',
    },
    {
      question: 'history-question-text-set-D',
      answer: 'history-question-set-D',
      questionValue: '800',
      category: 'history',
    },
    {
      question: 'history-question-text-set-D',
      answer: 'history-question-set-D',
      questionValue: '900',
      category: 'history',
    },
    {
      question: 'history-question-text-set-D',
      answer: 'history-question-set-D',
      questionValue: '1000',
      category: 'history',
    },

    /// //////// General Knowledge-

    {
      question: 'General Knowledge-question-text-set-A',
      answer: 'General Knowledge-question-set-A',
      questionValue: '100',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-A',
      answer: 'General Knowledge-question-set-A',
      questionValue: '200',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-A',
      answer: 'General Knowledge-question-set-A',
      questionValue: '300',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-A',
      answer: 'General Knowledge-uestion-set-A',
      questionValue: '400',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-A',
      answer: 'General Knowledge-question-set-A',
      questionValue: '500',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-A',
      answer: 'General Knowledge-question-set-A',
      questionValue: '600',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-A',
      answer: 'General Knowledge-question-set-A',
      questionValue: '700',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-A',
      answer: 'General Knowledge-question-set-A',
      questionValue: '800',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-A',
      answer: 'General Knowledge-question-set-A',
      questionValue: '900',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-A',
      answer: 'General Knowledge-question-set-A',
      questionValue: '1000',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-B',
      answer: 'General Knowledge-question-set-B',
      questionValue: '100',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-B',
      answer: 'General Knowledge-question-set-B',
      questionValue: '200',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-B',
      answer: 'General Knowledge-question-set-B',
      questionValue: '300',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-B',
      answer: 'General Knowledge-question-set-B',
      questionValue: '400',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-B',
      answer: 'General Knowledge-question-set-B',
      questionValue: '500',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-B',
      answer: 'General Knowledge-question-set-B',
      questionValue: '600',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-B',
      answer: 'General Knowledge-question-set-B',
      questionValue: '700',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-B',
      answer: 'General Knowledge-question-set-B',
      questionValue: '800',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-B',
      answer: 'General Knowledge-question-set-B',
      questionValue: '900',
      category: 'General Knowledge',
    },
    {
      question: 'qGeneral Knowledge-uestion-text-set-B',
      answer: 'qGeneral Knowledge-uestion-set-B',
      questionValue: '1000',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-C',
      answer: 'General Knowledge-question-set-C',
      questionValue: '100',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-C',
      answer: 'General Knowledge-question-set-C',
      questionValue: '200',
      category: 'General Knowledge',
    },
    {
      question: 'qGeneral Knowledge-uestion-text-set-C',
      answer: 'General Knowledge-question-set-C',
      questionValue: '300',
      category: 'General Knowledge',
    },
    {
      question: 'qGeneral Knowledge-uestion-text-set-C',
      answer: 'qGeneral Knowledge-uestion-set-C',
      questionValue: '400',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-C',
      answer: 'General Knowledge-question-set-C',
      questionValue: '500',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-C',
      answer: 'General Knowledge-question-set-C',
      questionValue: '600',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-C',
      answer: 'General Knowledge-question-set-C',
      questionValue: '700',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-C',
      answer: 'General Knowledge-question-set-C',
      questionValue: '800',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-C',
      answer: 'qGeneral Knowledge-uestion-set-C',
      questionValue: '900',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-C',
      answer: 'General Knowledge-question-set-C',
      questionValue: '1000',
      category: 'General Knowledge',
    }, {
      question: 'General Knowledge-question-text-set-D',
      answer: 'qGeneral Knowledge-uestion-set-D',
      questionValue: '100',
      category: 'General Knowledge',
    },
    {
      question: 'qGeneral Knowledge-uestion-text-set-D',
      answer: 'qGeneral Knowledge-uestion-set-D',
      questionValue: '200',
      category: 'General Knowledge',
    },
    {
      question: 'qGeneral Knowledge-uestion-text-set-D',
      answer: 'qGeneral Knowledge-uestion-set-D',
      questionValue: '300',
      category: 'General Knowledge',
    },
    {
      question: 'qGeneral Knowledge-uestion-text-set-D',
      answer: 'qGeneral Knowledge-uestion-set-D',
      questionValue: '400',
      category: 'General Knowledge',
    },
    {
      question: 'quGeneral Knowledge-estion-text-set-D',
      answer: 'qGeneral Knowledge-uestion-set-D',
      questionValue: '500',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-D',
      answer: 'qGeneral Knowledge-uestion-set-D',
      questionValue: '600',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-D',
      answer: 'qGeneral Knowledge-uestion-set-D',
      questionValue: '700',
      category: 'General Knowledge',
    },
    {
      question: 'General Knowledge-question-text-set-D',
      answer: 'General Knowledge-question-set-D',
      questionValue: '800',
      category: 'General Knowledge',
    },
    {
      question: 'qGeneral Knowledge-uestion-text-set-D',
      answer: 'qGeneral Knowledge-uestion-set-D',
      questionValue: '900',
      category: 'General Knowledge',
    },
    {
      question: 'qGeneral Knowledge-uestion-text-set-D',
      answer: 'qGeneral Knowledge-uestion-set-D',
      questionValue: '1000',
      category: 'General Knowledge',
    },
    /// /////// Culture-

    {
      question: 'Culture-question-text-set-A',
      answer: 'Culture-question-set-A',
      questionValue: '100',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-A',
      answer: 'Culture-question-set-A',
      questionValue: '200',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-A',
      answer: 'Culture-question-set-A',
      questionValue: '300',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-A',
      answer: 'Culture-question-set-A',
      questionValue: '400',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-A',
      answer: 'Culture-question-set-A',
      questionValue: '500',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-A',
      answer: 'Culture-question-set-A',
      questionValue: '600',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-A',
      answer: 'Culture-question-set-A',
      questionValue: '700',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-A',
      answer: 'Culture-question-set-A',
      questionValue: '800',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-A',
      answer: 'Culture-question-set-A',
      questionValue: '900',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-A',
      answer: 'Culture-question-set-A',
      questionValue: '1000',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-B',
      answer: 'Culture-question-set-B',
      questionValue: '100',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-B',
      answer: 'Culture-question-set-B',
      questionValue: '200',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-B',
      answer: 'Culture-question-set-B',
      questionValue: '300',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-B',
      answer: 'Culture-question-set-B',
      questionValue: '400',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-B',
      answer: 'Culture-question-set-B',
      questionValue: '500',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-B',
      answer: 'Culture-question-set-B',
      questionValue: '600',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-B',
      answer: 'Culture-question-set-B',
      questionValue: '700',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-B',
      answer: 'Culture-question-set-B',
      questionValue: '800',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-B',
      answer: 'Culture-question-set-B',
      questionValue: '900',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-B',
      answer: 'Culture-question-set-B',
      questionValue: '1000',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-C',
      answer: 'Culture-question-set-C',
      questionValue: '100',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-C',
      answer: 'Culture-question-set-C',
      questionValue: '200',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-C',
      answer: 'Culture-question-set-C',
      questionValue: '300',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-C',
      answer: 'Culture-question-set-C',
      questionValue: '400',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-C',
      answer: 'Culture-question-set-C',
      questionValue: '500',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-C',
      answer: 'Culture-question-set-C',
      questionValue: '600',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-C',
      answer: 'Culture-question-set-C',
      questionValue: '700',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-C',
      answer: 'Culture-question-set-C',
      questionValue: '800',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-C',
      answer: 'Culture-question-set-C',
      questionValue: '900',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-C',
      answer: 'Culture-question-set-C',
      questionValue: '1000',
      category: 'Culture',
    }, {
      question: 'Culture-question-text-set-D',
      answer: 'Culture-question-set-D',
      questionValue: '100',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-D',
      answer: 'Culture-question-set-D',
      questionValue: '200',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-D',
      answer: 'Culture-question-set-D',
      questionValue: '300',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-D',
      answer: 'Culture-question-set-D',
      questionValue: '400',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-D',
      answer: 'Culture-question-set-D',
      questionValue: '500',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-D',
      answer: 'Culture-question-set-D',
      questionValue: '600',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-D',
      answer: 'Culture-question-set-D',
      questionValue: '700',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-D',
      answer: 'Culture-question-set-D',
      questionValue: '800',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-D',
      answer: 'Culture-question-set-D',
      questionValue: '900',
      category: 'Culture',
    },
    {
      question: 'Culture-question-text-set-D',
      answer: 'Culture-question-set-D',
      questionValue: '1000',
      category: 'Culture',
    },

    /// //////// Music-

    {
      question: 'Music-question-text-set-A',
      answer: 'Music-question-set-A',
      questionValue: '100',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-A',
      answer: 'Music-question-set-A',
      questionValue: '200',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-A',
      answer: 'Music-question-set-A',
      questionValue: '300',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-A',
      answer: 'Music-question-set-A',
      questionValue: '400',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-A',
      answer: 'Music-question-set-A',
      questionValue: '500',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-A',
      answer: 'Music-question-set-A',
      questionValue: '600',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-A',
      answer: 'Music-question-set-A',
      questionValue: '700',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-A',
      answer: 'Music-question-set-A',
      questionValue: '800',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-A',
      answer: 'Music-question-set-A',
      questionValue: '900',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-A',
      answer: 'Music-question-set-A',
      questionValue: '1000',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-B',
      answer: 'Music-question-set-B',
      questionValue: '100',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-B',
      answer: 'Music-question-set-B',
      questionValue: '200',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-B',
      answer: 'Music-question-set-B',
      questionValue: '300',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-B',
      answer: 'Music-question-set-B',
      questionValue: '400',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-B',
      answer: 'Music-question-set-B',
      questionValue: '500',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-B',
      answer: 'Music-question-set-B',
      questionValue: '600',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-B',
      answer: 'Music-question-set-B',
      questionValue: '700',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-B',
      answer: 'Music-question-set-B',
      questionValue: '800',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-B',
      answer: 'Music-question-set-B',
      questionValue: '900',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-B',
      answer: 'Music-question-set-B',
      questionValue: '1000',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-C',
      answer: 'Music-question-set-C',
      questionValue: '100',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-C',
      answer: 'Music-question-set-C',
      questionValue: '200',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-C',
      answer: 'Music-question-set-C',
      questionValue: '300',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-C',
      answer: 'Music-question-set-C',
      questionValue: '400',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-C',
      answer: 'Music-question-set-C',
      questionValue: '500',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-C',
      answer: 'Music-question-set-C',
      questionValue: '600',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-C',
      answer: 'Music-question-set-C',
      questionValue: '700',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-C',
      answer: 'Music-question-set-C',
      questionValue: '800',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-C',
      answer: 'Music-question-set-C',
      questionValue: '900',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-C',
      answer: 'Music-question-set-C',
      questionValue: '1000',
      category: 'Music',
    }, {
      question: 'Music-question-text-set-D',
      answer: 'Music-question-set-D',
      questionValue: '100',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-D',
      answer: 'Music-question-set-D',
      questionValue: '200',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-D',
      answer: 'Music-question-set-D',
      questionValue: '300',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-D',
      answer: 'Music-question-set-D',
      questionValue: '400',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-D',
      answer: 'Music-question-set-D',
      questionValue: '500',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-D',
      answer: 'Music-question-set-D',
      questionValue: '600',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-D',
      answer: 'Music-question-set-D',
      questionValue: '700',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-D',
      answer: 'Music-question-set-D',
      questionValue: '800',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-D',
      answer: 'Music-question-set-D',
      questionValue: '900',
      category: 'Music',
    },
    {
      question: 'Music-question-text-set-D',
      answer: 'Music-question-set-D',
      questionValue: '1000',
      category: 'Music',
    },

    /// /////////// Films-

    {
      question: 'Films-question-text-set-A',
      answer: 'Films-question-set-A',
      questionValue: '100',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-A',
      answer: 'Films-question-set-A',
      questionValue: '200',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-A',
      answer: 'Films-question-set-A',
      questionValue: '300',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-A',
      answer: 'Films-question-set-A',
      questionValue: '400',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-A',
      answer: 'Films-question-set-A',
      questionValue: '500',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-A',
      answer: 'Films-question-set-A',
      questionValue: '600',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-A',
      answer: 'Films-question-set-A',
      questionValue: '700',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-A',
      answer: 'Films-question-set-A',
      questionValue: '800',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-A',
      answer: 'Films-question-set-A',
      questionValue: '900',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-A',
      answer: 'Films-question-set-A',
      questionValue: '1000',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-B',
      answer: 'Films-question-set-B',
      questionValue: '100',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-B',
      answer: 'Films-question-set-B',
      questionValue: '200',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-B',
      answer: 'Films-question-set-B',
      questionValue: '300',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-B',
      answer: 'Films-question-set-B',
      questionValue: '400',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-B',
      answer: 'Films-question-set-B',
      questionValue: '500',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-B',
      answer: 'Films-question-set-B',
      questionValue: '600',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-B',
      answer: 'Films-question-set-B',
      questionValue: '700',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-B',
      answer: 'Films-question-set-B',
      questionValue: '800',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-B',
      answer: 'Films-question-set-B',
      questionValue: '900',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-B',
      answer: 'Films-question-set-B',
      questionValue: '1000',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-C',
      answer: 'Films-question-set-C',
      questionValue: '100',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-C',
      answer: 'Films-question-set-C',
      questionValue: '200',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-C',
      answer: 'Films-question-set-C',
      questionValue: '300',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-C',
      answer: 'Films-question-set-C',
      questionValue: '400',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-C',
      answer: 'Films-question-set-C',
      questionValue: '500',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-C',
      answer: 'Films-question-set-C',
      questionValue: '600',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-C',
      answer: 'Films-question-set-C',
      questionValue: '700',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-C',
      answer: 'Films-question-set-C',
      questionValue: '800',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-C',
      answer: 'Films-question-set-C',
      questionValue: '900',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-C',
      answer: 'Films-question-set-C',
      questionValue: '1000',
      category: 'Films',
    }, {
      question: 'Films-question-text-set-D',
      answer: 'Films-question-set-D',
      questionValue: '100',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-D',
      answer: 'Films-question-set-D',
      questionValue: '200',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-D',
      answer: 'Films-question-set-D',
      questionValue: '300',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-D',
      answer: 'Films-question-set-D',
      questionValue: '400',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-D',
      answer: 'Films-question-set-D',
      questionValue: '500',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-D',
      answer: 'Films-question-set-D',
      questionValue: '600',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-D',
      answer: 'Films-question-set-D',
      questionValue: '700',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-D',
      answer: 'Films-question-set-D',
      questionValue: '800',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-D',
      answer: 'Films-question-set-D',
      questionValue: '900',
      category: 'Films',
    },
    {
      question: 'Films-question-text-set-D',
      answer: 'Films-question-set-D',
      questionValue: '1000',
      category: 'Films',
    },

    /// / Science

    {
      question: 'Science-question-text-set-A',
      answer: 'Science-question-set-A',
      questionValue: '100',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-A',
      answer: 'Science-question-set-A',
      questionValue: '200',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-A',
      answer: 'Science-question-set-A',
      questionValue: '300',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-A',
      answer: 'Science-question-set-A',
      questionValue: '400',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-A',
      answer: 'Science-question-set-A',
      questionValue: '500',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-A',
      answer: 'Science-question-set-A',
      questionValue: '600',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-A',
      answer: 'Science-question-set-A',
      questionValue: '700',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-A',
      answer: 'Science-question-set-A',
      questionValue: '800',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-A',
      answer: 'Science-question-set-A',
      questionValue: '900',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-A',
      answer: 'Science-question-set-A',
      questionValue: '1000',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-B',
      answer: 'Science-question-set-B',
      questionValue: '100',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-B',
      answer: 'Science-question-set-B',
      questionValue: '200',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-B',
      answer: 'Science-question-set-B',
      questionValue: '300',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-B',
      answer: 'Science-question-set-B',
      questionValue: '400',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-B',
      answer: 'Science-question-set-B',
      questionValue: '500',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-B',
      answer: 'Science-question-set-B',
      questionValue: '600',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-B',
      answer: 'Science-question-set-B',
      questionValue: '700',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-B',
      answer: 'Science-question-set-B',
      questionValue: '800',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-B',
      answer: 'Science-question-set-B',
      questionValue: '900',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-B',
      answer: 'Science-question-set-B',
      questionValue: '1000',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-C',
      answer: 'Science-question-set-C',
      questionValue: '100',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-C',
      answer: 'Science-question-set-C',
      questionValue: '200',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-C',
      answer: 'Science-question-set-C',
      questionValue: '300',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-C',
      answer: 'Science-question-set-C',
      questionValue: '400',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-C',
      answer: 'Science-question-set-C',
      questionValue: '500',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-C',
      answer: 'Science-question-set-C',
      questionValue: '600',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-C',
      answer: 'Science-question-set-C',
      questionValue: '700',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-C',
      answer: 'Science-question-set-C',
      questionValue: '800',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-C',
      answer: 'Science-question-set-C',
      questionValue: '900',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-C',
      answer: 'Science-question-set-C',
      questionValue: '1000',
      category: 'Science',
    }, {
      question: 'Science-question-text-set-D',
      answer: 'Science-question-set-D',
      questionValue: '100',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-D',
      answer: 'Science-question-set-D',
      questionValue: '200',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-D',
      answer: 'Science-question-set-D',
      questionValue: '300',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-D',
      answer: 'Science-question-set-D',
      questionValue: '400',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-D',
      answer: 'Science-question-set-D',
      questionValue: '500',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-D',
      answer: 'Science-question-set-D',
      questionValue: '600',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-D',
      answer: 'Science-question-set-D',
      questionValue: '700',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-D',
      answer: 'Science-question-set-D',
      questionValue: '800',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-D',
      answer: 'Science-question-set-D',
      questionValue: '900',
      category: 'Science',
    },
    {
      question: 'Science-question-text-set-D',
      answer: 'Science-question-set-D',
      questionValue: '1000',
      category: 'Science',
    },

    ];
    this.fullListOfquestionCategoires = [];
    this.gameRoundCategories = [];
    this.gameRoundTwoQuestions = [{
      gameQuestionCategory: 'Science',
      gameQuestionSet: [{
        question: 'Science-question-text-set-D',
        answer: 'Science-question-set-D',
        questionValue: '10',
        category: 'Science',
        questionIsAnswered: false,
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
    this.gameRoundOneQuestions = [{
      gameQuestionCategory: 'Science',
      gameQuestionSet: [{
        question: 'Science-question-text-set-D',
        answer: 'Science-question-set-D',
        questionValue: '10',
        category: 'Science',
        questionIsAnswered: false,
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
    this.incorrectAnswers = [];

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
    if (this.gameState.gameRound < 2) {
      this.gameState.gameRound++;
    } else {
      this.gameState.readyForFinalQuestion = true;
    }
    console.log(this.gameState.gameRound);
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
  
/**
 * 
 * 
 */
  checkIfAnsweredIsCorrect(correctAnswer, answerChoosen) {
    console.log(correctAnswer);
    console.log(answerChoosen.answer);
    if(answerChoosen.answer === correctAnswer){
      console.log("correct");
      this.currentPlayer.playerScore = this.currentPlayer.playerScore + parseInt(answerChoosen.questionValue, 10);
    } else {
      this.currentPlayer.playerScore = this.currentPlayer.playerScore -  parseInt(answerChoosen.questionValue, 10);
      console.log("incorrect");
    }
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

    const $welcomeTitle = $('<h1>').text('Lets play a game of Jeopardy!');

    const $whoIsPLayingText = $('<h2>').text('Who is playing today?');

    const $playersNameInputContainer = $('<div>');
    $playersNameInputContainer.addClass('players-name-input-container');

    const $playerNameInput = $('<input>');
    const $nextButton = $('<button>').text('Next').attr('id', 'confirm-player-name-input-button');
    $($nextButton).on('click',function(){handler($playerNameInput.val())});

    $(this.gameContainer).append($welcomeScreen);
    $welcomeScreen.append($welcomeTitle);

    $welcomeScreen.append($whoIsPLayingText);
    $welcomeScreen.append($playersNameInputContainer);
    $playersNameInputContainer.append($playerNameInput);
    $playersNameInputContainer.append($nextButton);
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
  displayMainGameScreen(gameQuestionSet, choosenCatagoryScoreHandler) {

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
    $($jeopardBoardContainer).append($finalQuestionbutton);
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

      // add listener to button
      if($answerPlacement === i){
        $answerButton.addClass('question-answer-butto').text(questionChoosenObject.answer);
      } else {
        // TO DO set text as randon answer from passed array: randomAnswerSet
        // Math.floor(Math.random() * incorrectAnswerSet.length)
        // $answerButton.addClass('question-answer-butto').text(incorrectAnswerSet[]);
      }
      $answerButton.on('click', function() { checkCorrectAnswerHandler(questionChoosenObject,$answerButton.text())});
      $($listOfAnswersContainer).append($answerContainer);
      $($answerContainer).append($answerNumber);
      $($answerContainer).append($answerButton);
     
    }
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
  displayEndGameScreen(players) {
  const $endGameScreenContainer= $('<div>');
  $endGameScreenContainer.addClass('end-screen-container');
  $('#mainGameContainer').append($endGameScreenContainer)

  const $playerFinalScoreTextContainer= $('<p>');
  $playerFinalScoreTextContainer.text(`${players[0].playerName} is the Winner!`);
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
    $('#mainGameContainer').remove();
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
  }

/**
 * 
 * 
 */
  handleUpdatePlayerName = (text) => {
    this.model.updatePlayerName(text);
    this.view.displayMainGameScoreBoard(this.model.players,this.model.gameState,this.model.currentPlayer.playerName);
    this.view.displayMainGameScreen(this.model.gameRoundOneQuestions,this.handleChoosenCatagoryScore);
  }

/**
 * 
 * 
 */
  handlePlayerNameInput = (playerNameEntered) => {
  this.model.updatePlayerName(playerNameEntered);
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
    this.view.displayMainGameScreen(this.model.gameRoundOneQuestions,this.handleChoosenCatagoryScore);
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
    this.view.displayMainGameScoreBoard(this.model.players,this.model.gameState,this.model.currentPlayer.playerName);
    this.view.displayGameQuestion(choosenCatagoryScore,this.model.incorrectAnswers,this.handleAnsweredQuestion,this.handleCheckIfAnswerIsCorrect);
    console.log(choosenCatagoryScore);
  }
}

const jeopardyGame = new Controller(new Model(), new View());

// Tests
// jeopardyGame.model.generateListOfAllCategoires();
// jeopardyGame.model.randomGenrateRoundCategories();
// console.log(jeopardyGame.model.listOfGameQuestions);
// console.log(jeopardyGame.model.fullListOfquestionCategoires);
// console.log(jeopardyGame.model.listOfGameQuestions);
// console.log(jeopardyGame.model.gameRoundCategories);
// jeopardyGame.model.generateRandomQuestionFromCategory();
// console.log(jeopardyGame.model.gameRoundOneQuestions);

// jeopardyGame.model.updateGameState();
// jeopardyGame.view.displayReadGameRulesPromptScreen();
// jeopardyGame.handleUpdatePlayerName('will');
// console.log(jeopardyGame.model.playerName);

// jeopardyGame.model.updateCurrentPlayer();

jeopardyGame.view.displayMainGameScoreBoard(jeopardyGame.model.players,jeopardyGame.model.roundNumber,jeopardyGame.model.currentPlayer.playerName);
// jeopardyGame.view.displayEndGameScreen(jeopardyGame.model.players);
// jeopardyGame.view.displayMainGameScreen(jeopardyGame.model.gameRoundOneQuestions,jeopardyGame.handleChoosenCatagoryScore);
// jeopardyGame.view.displayGameMenu();
// jeopardyGame.view.displayGameQuestion(jeopardyGame.model.gameRoundOneQuestions[0].gameQuestionSet[0]);
// jeopardyGame.view.displayEndGameScreen(-100);
// console.log(jeopardyGame.model.gameRoundOneQuestions[0].gameQuestionSet[0]);
// jeopardyGame.handleCheckIfAnswerIsCorrect);
// jeopardyGame.model.updateAnsweredQuestion(jeopardyGame.model.gameRoundOneQuestions[0].gameQuestionSet[0]);
// jeopardyGame.model.generateListOfRandomIncorrectAnswers();
// console.log(jeopardyGame.model.incorrectAnswers);
// jeopardyGame.view.displayGameQuestion(jeopardyGame.model.gameRoundOneQuestions[0].gameQuestionSet[0],jeopardyGame.model.incorrectAnswers,jeopardyGame.handleAnsweredQuestion);


// console.log(jeopardyGame.model.gameState.gameRound);