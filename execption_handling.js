// throw = word for error handling
////////////////////////////////////////////THROWING errors

// let a = "test";
// throw "my error";

// class CustomError {
//     constructor(message, name) {
//         this.message = message;
//         this.name = "Customer Error";
//     }
// }

// throw new CustomError("Something went wrong")

////////////////////////////////////////////CATCHING errors
// try {
//     let bird = "robin";
//     throw new CustomError("Something went wrong")
//     console.log(bird);
// } catch(error) {
//     console.log("there was an error");
//     console.log("error message:", error.message)
// }

// console.log("program is still running");

///////challenge: create a function that subtracts arguments from eachother and use error handling///////
// let answer;

// try {
//     let answer = subtractTwoThings(5, "wjfga");
// } catch(error) {
//     console.log(error);
//     let answer = 0;
// }
// console.log(answer)


// function subtractTwoThings(one, two) {
//     let answer = one - two;
//     if (answer === NaN) {
//         throw "invalid input";
//     }
//     return answer;
// }
// let answer = subtractTwoThings(4, 1);
// console.log(answer);

/// new Error is already a class in JS.

//////////////////////////////////////////////////class of hero

// class Hero {
//     constructor(){
//         this.health = 100;
//     }
// }

// // new Hero = GregThePaladin(100);
// let GregThePaladin = new Hero;
// let MortTheWizard = new MortTheWizard;


// console.log(GregThePaladin, MortTheWizard);
// let name = "Toby"

// function myDog() {
//     console.log(name)
// }

// myDog();

////////////////////////////////////NESTED FUNCTIONS
// function parentFunc(a) {
//     let b = 1;
//     function nestedFun(c, d) {
//         return c + d;
//     }
//     return nestedFun(a, b)
// }

// let answer = parentFunc(4);
// console.log(answer);

/////////////////////////////////////////////CLOSURES

// function makeAdder(num1) {
//     return function(num2) {
//         return num1 + num2;
//     }
// }

// let addFive = makeAdder(5);

// let addTen = makeAdder(10);

// let answer = addFive(6);

// console.log(answer); //11

//////////////////ANOTHER EXAMPLE = INPUT VALIDATOR 

// function validator(rule) {
//     return function(input) {
//         return input.match(rule);
//     }
// }

// let validateMin6 = validator(/^.{6,100}$/);
// let validatesStartsWithA = validator(/^[Aa].*$/);
// let answer = validateMin6("is this valid?");

// console.log(answer);

////////////////////////////////////////////////XML (eXtensible Markup Language) and JSON

//JSON
// "[
//     {
//         \"city\": \"Sydney\",
//         \"students\": [
//             {
//                 \"name\": \"K. West\",
//                 \"nickname\": \"Ye\"
//             }
//             {
//                 \"name\": \"A. Graham\",
//                 \"nickname\": \"Drake\"
//             }
//         ]
//     }
// ]"

////ONE LINE JSON

// let studentArray = "[{\"name\":\"K.West\",\"nickname\":\"Ye\",\"dateOfBirth\":\"1977-06-08\"},{\"name\":\"A. Graham\",\"nickname\":\"Drake\",\"dateOfBirth\":\"1986-10-24\"}]"

///xml
{/* <cohorts>
    <students>
        <student>
            <name>K. West</name>
            <nickname>Ye</nickname>
            <dateOfBirth>1977-06-08</dateOfBirth>
        </student>
        <student>
            <name>A. Graham</name>
            <nickname>Drake</nickname>
            <dateOfBirth>1986-10-24</dateOfBirth>
        </student>
  </students>
</cohorts> */}



