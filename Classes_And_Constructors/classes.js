
// Question 1

class Car {
    constructor(make, model, year,  isAvailable) {
       this.make = make;
       this.model = model;
       this.year = year;
       this.isAvailable =isAvailable;
    }

    toggleAvailability(){
        return this.isAvailable = !this.isAvailable;
    }

   }


   class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
       this.car = car;
       this.renterName = renterName;
       this.rentalStartDate = new Date(rentalStartDate);
       this.rentalEndDate = new Date(rentalEndDate);
    }
   
    calculateRentalDuration() {
       const timeDiff = this.rentalEndDate.getTime() - this.rentalStartDate.getTime();
       const oneDay = 24 * 60 * 60 * 1000;
       const diffDays = Math.floor(timeDiff / oneDay);
       return diffDays;
    }
   }
   
   // instance
   const myCar = new Car('Matatu', 'NXB', 2020, false);
   console.log(myCar.toggleAvailability());
   const rental = new Rental(myCar, 'Ven', '2024-04-25', '2024-05-05');
   
   console.log(`Rental duration: ${rental.calculateRentalDuration()} days`);
   





//Question 2


class Question{
    constructor(text, options, correctAnswer){
        this.text = text;
        this.options = options
        this.correctAnswer = correctAnswer
    }

    checkAnswer(answer){
        return answer === this.correctAnswer
    }


}

let quiz1 = new Question("Bananas are?", ['Red', 'Yellow', 'Green'], "Yellow");

console.log(quiz1.checkAnswer("Yellow"));




class Quiz {
    constructor(questions, currentQuestionIndex, score) {
        this.questions = []
        this.currentQuestionIndex = 0
        this.score = 0
    }
    addQuestion(question) {
        this.questions.push(question);
    }
    nextQuestion() {
        this.currentQuestionIndex +=1
    }
    submitAnswer(userAnswer) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (currentQuestion.checkAnswer(userAnswer)) {
            this.score++;
        }
    }
}
const quiz2 = new Quiz();
const question = new Question("How many students are in Ada Lab?", ["5", "32", "30", "31"], "31");
quiz2.addQuestion(question);
const userAnswer = "31";
quiz2.submitAnswer(userAnswer);
console.log("Total score:", quiz2.score);
