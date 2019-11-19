//////////////////TERMINAL APP
//OBJECTS: quiz, question(s) 

class Question {
    
    constructor(content) {
        if (content === undefined) {
            throw new Error("must set content when creating a question");
        }
    this.content = content;
    this.options = [];
    this.answer = null;
    }   

    //object properties == @instance variables in ruby
    //function prefic automatic and hidden in classes
    addOption(option) {
        this.options.push(option)
        if (this.options.length >= 25) {
            this.options.push(option);
        }
        return this
    }

    setAnswer(optionsIndex) {
        if(this.options[optionsIndex] === undefined) {
            throw new Error("index does not exist");
        }

        this.answer = optionsIndex;
    }

    checkAnswer(answer) {
        // if(answer === /^[A-Za-z]+$/)
        if(typeof answer === "string") {
            answer = answer.CharCodeAt(0) - 97;
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
        if (typeof name == undefined) {
            throw new Error("quiz must be given a name");
        }
        this.name = name;
        this.questions = [];
        this.score = 0;
        this.incorrects = [];
    }

    addQuestion(question) {
        if(question instanceof Question) {
            this.questions.push(question);
        }
        return this;
    }

    run() {
        console.log(`Welcome to the ${this.name} quiz`);
        // for(let index in this.questions) {

        let questionsLength = this.questions.length;
        for(let index = 0; index < questionsLength; index ++) {
            let question = this.questions[index];

            console.log(`You are on question ${parseInt(index) + 1} of ${questionsLength}`);
            //print question
            console.log(question.content);
            //print options
            question.printOptions();
            //get response
            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
            readline.question("type your answer and hit enter", (answer) => {
                if(question.checkAnswer(answer)) {
                    this.score ++;
                } else {
                    this.incorrects.push(question);
                }
                readline.close()
            });

            console.log(`you scored a ${this.score} out of ${questionsLength}`)
        }
    }
}

let question1 = new Question("Why was the universe created?");
question1
    .addOption("42")
    .addOption("there was no reason")
    .addOption("it was cool");
// the above is function chaining
question1.setAnswer(1)
let question2 = new Question("How big is the universe?");
question2
    .addOption("3km")
    .addOption("infinite")
    .addOption("you don't want to know")
    .addOption("other");

let universeQuiz = new Quiz("Ultimate Universe Quiz")

universeQuiz
    .addQuestion(question1)
    .addQuestion(question2);

console.log(universeQuiz.questions)
