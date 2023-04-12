let start = document.getElementById('startButton');
let questionBox = document.getElementById('question-box');
let answers = Array.from(document.getElementById('answers'));
let next = document.getElementById('next');
let questionArea = document.getElementById('question');
let timer = document.getElementById('timer');
let intro = document.getElementById('intro');
let title =document.getElementById('title');

let currentQuestion = {};
let availableQuestions = [];
let score = 0;
let correctAnswer = true;
let timerCount = 70;
let questionIndex = Math.floor(Math.random() * availableQuestions.length)

 availableQuestions = [
    {
    question: 'Multiple strings can be concatenated together using which operator?',
    choice: ['-', 'x', '+',  '*'],
    correctAnswer: ('+', true)
    },
    {
    question: 'Which comparison operator means strict not equal?',
    choice: ['!==', '===', '<=', '=='],
    correctAnswer: ('!==', true)
    },
    {
    question: 'How would you declare an array?',
    choice: ['function myArray', 'const color = blue', 'console.log(array)', 'let myArray = [100, 200]'],
    correctAnswer: ('let myArray = [100, 200]', true)
    },
    {
    question: 'AddEventListener() method sets up a/an ...',
    choice: ['event', 'object', 'function', 'audio file'],
    correctAnswer: ('event', true)
    },
    { 
    question: 'A Boolean value returns objects as:',
    choice: ['numbers', 'operators', 'true or false', 'local storage'],
    correctAnswer: ('true or false', true)
    },
    {
    question: 'Which option is one available loop statement?',
    choice: ['do...while', 'fruit loop' , 'number lengths', 'of ... end'],
    correctAnswer: ('do...while', true)
    },
    {
    question: 'What indicates the absence of a value?',
    choice: [ 'objects', 'empty', 'blank', 'undefined'],
    correctAnswer: ('undefined', true)
    }
]

start.addEventListener('click', startQuiz)
// next.addEventListener('click', ()=> {
//     availableQuestions++;
//     setNextQuestion();
// })

//Begin the quiz with the start button
function startQuiz() {
//  event.preventDefault();
 start.classList.add('hide');
 intro.classList.add('hide');
 title.classList.add('hide');
 questionBox.classList.remove('hide');
 timer.classList.remove('hide');
 next.classList.remove('hide');

 showQuestion()
 startTimer()
}

//Render the questions
function showQuestion() {
    if (availableQuestions.length = 0) {
        questionArea.innertext = question[questionIndex].availableQuestions;
        question.innerText = currentQuestion.question
    }    
        answers.forEach(choice => {
            choice.innerText = currentQuestion[choice]
        })
    availableQuestions.splice(questionIndex, [0])

 }

// function setNextQuestion()

//  function selectAnswer () {

//  }

// Timer clock
    startTimer =
     setInterval(function() {
        timerCount--;
       
        if(timerCount <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                quizOver();
            }
        }
    },1000);
     
 // End Quiz and set local storage with scores