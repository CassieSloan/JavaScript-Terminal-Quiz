const readline = require('readline-sync');

class Question {
    constructor(content) {
        if (content === undefined) {
            throw new Error("must set content when creating a question");
        }
        this.content = content;
        this.options = [];
        this.answer = null;
    }
    addOption(option) {
        if (this.options.length <= 25) {
            this.options.push(option);
        }
        return this;
    }
    setAnswer(optionsIndex) {
        if (this.options[optionsIndex] === undefined) {
            throw new Error("index does not exist");
        }
        this.answer = optionsIndex;
    }
    checkAnswer(answer) {
        if (typeof answer === "string") {
            answer = answer.charCodeAt(0) - 97;
        }
        return answer === this.answer;
    }
    printOptions() {
        for (let index in this.options) {
            console.log(String.fromCharCode(97 + parseInt(index)), ":", this.options[index]);
        }
    }
}
class Quiz {
    constructor(name) {
        if (typeof name === undefined) {
            throw new Error("quiz must be given a name");
        }
        this.name = name;
        this.questions = [];
        this.score = 0;
        this.incorrects = [];
    }
    addQuestion(question) {
        if (question instanceof Question) {
            this.questions.push(question);
        }
        return this;
    }
    printIncorrects() {
        for(let question of this.incorrects) {
            console.log(question.content);
        }
    }
    run() {
        console.log(`Welcome to the ${this.name} quiz`);
        let questionsLength = this.questions.length;
        for(let index = 0; index < questionsLength; index++) {
            let question = this.questions[index];
            console.log(`You are on question ${index + 1} of ${questionsLength}`);
            console.log(question.content);
            question.printOptions();;
              
            let answer = readline.question("Type your answer and hit enter \n");
            if (question.checkAnswer(answer)) {
                this.score++;
            } else {
                this.incorrects.push(question);
            } 
        }
        console.log(`You scored a ${this.score} out of ${questionsLength}`);
        if (this.incorrects.length > 0) {
            console.log("You got these questions wrong");
            this.printIncorrects();
        }
    }
}
let question1 = new Question("Why was the universe created?");
question1
    .addOption("42")
    .addOption("there was no reason")
    .addOption("because its cool");
question1.setAnswer(0);
let question2 = new Question("How big is the universe?");
question2
    .addOption("3km")
    .addOption("infinitely large in size")
    .addOption("you don't wanna know")
    .addOption("other");
question2.setAnswer(1);
let question3 = new Question("How old is the universe?");
question3
    .addOption("no one knows")
    .addOption("13.8 billion years");
question3.setAnswer(1);
let universeQuiz = new Quiz("Ultimate Universe Quiz!");
universeQuiz
    .addQuestion(question1)
    .addQuestion(question2)
    .addQuestion(question3);
universeQuiz.run();



