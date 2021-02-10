/* eslint-disable max-classes-per-file */
class Model {
  constructor() {
    this.listOfGameQuestions = [{
      question: 'Faucibus ornare suspendisse sed nisi lacus sed viverra. Nunc eget lorem dolor sed viverra ipsum nunc',
      answer: 'answer',
      questionValue: '200',
      category: 'geography',
    },
    {
      question: 'Faucibus ornare suspendisse sed nisi lacus sed viverra. Nunc eget lorem dolor sed viverra ipsum nunc',
      answer: 'answer',
      questionValue: '200',
      category: 'history',
    },
    {
      question: 'Faucibus ornare suspendisse sed nisi lacus sed viverra. Nunc eget lorem dolor sed viverra ipsum nunc',
      answer: 'answer',
      questionValue: '200',
      category: 'cs',
    },
    {
      question: 'Faucibus ornare suspendisse sed nisi lacus sed viverra. Nunc eget lorem dolor sed viverra ipsum nunc',
      answer: 'answer',
      questionValue: '200',
      category: 'math',
    },
    {
      question: 'Faucibus ornare suspendisse sed nisi lacus sed viverra. Nunc eget lorem dolor sed viverra ipsum nunc',
      answer: 'answer',
      questionValue: '200',
      category: 'english',
    },
    {
      question: 'Faucibus ornare suspendisse sed nisi lacus sed viverra. Nunc eget lorem dolor sed viverra ipsum nunc',
      answer: 'answer',
      questionValue: '200',
      category: 'irish',
    },
    {
      question: 'Faucibus ornare suspendisse sed nisi lacus sed viverra. Nunc eget lorem dolor sed viverra ipsum nunc',
      answer: 'answer',
      questionValue: '200',
      category: 'general knowledge',
    },
    {
      question: 'Faucibus ornare suspendisse sed nisi lacus sed viverra. Nunc eget lorem dolor sed viverra ipsum nunc',
      answer: 'answer',
      questionValue: '200',
      category: 'tv shows',
    },
    {
      question: 'Faucibus ornare suspendisse sed nisi lacus sed viverra. Nunc eget lorem dolor sed viverra ipsum nunc',
      answer: 'answer',
      questionValue: '200',
      category: 'music',
    },
    {
      question: 'Faucibus ornare suspendisse sed nisi lacus sed viverra. Nunc eget lorem dolor sed viverra ipsum nunc',
      answer: 'answer',
      questionValue: '200',
      category: 'art',
    },
    {
      question: 'Faucibus ornare suspendisse sed nisi lacus sed viverra. Nunc eget lorem dolor sed viverra ipsum nunc',
      answer: 'answer',
      questionValue: '200',
      category: 'social science',
    },
    {
      question: 'Faucibus ornare suspendisse sed nisi lacus sed viverra. Nunc eget lorem dolor sed viverra ipsum nunc',
      answer: 'answer',
      questionValue: '200',
      category: 'irish',
    },
    ];
    this.fullListOfquestionCategoires = [];
    this.gameRoundQuestions = [];
    this.gameRoundCategories = [];
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

  randomGenrateRoundCategories() {
    // store list of all categoires in an array for splicing
    const categoires = this.fullListOfquestionCategoires;
    for (let i = 0; i < 6; i++) {
      let randomCategory = categoires[Math.floor(Math.random() * categoires.length)];
      this.gameRoundCategories.push(randomCategory);
      categoires.splice(categoires.indexOf(randomCategory), 1);
    }
  }
}

class View {
  constructor() {
  }
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const jeopardyGame = new Controller(new Model(), new View());

// console.log(jeopardyGame);

jeopardyGame.model.generateListOfAllCategoires();
jeopardyGame.model.randomGenrateRoundCategories();
// console.log(jeopardyGame.model.listOfGameQuestions);
// console.log(jeopardyGame.model.fullListOfquestionCategoires);
console.log(jeopardyGame.model.gameRoundCategories);
