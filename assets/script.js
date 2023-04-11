let start = document.getElementById('startB');
let questionBox = document.getElementById('question-box');
let answers = Array.from[document.querySelectorAll('#answers')];
let next = document.getElementById('next');
let questions = Array.from[document.getElementById('question')];
let timer = document.getElementById('timer');

let currentQustion = {};
let availableQuestions = [];
let score = 0;
let correctAnswer = true;

 questions = [
    {
    question: 'Multiple strings can be concatenated together using which operator?',
    choice: ['-', 'x', '+',  '*'],
    correctAnswer: '+',
    },
    {
    question: 'Which comparison operator means strict not equal?',
    choice: ['!==', '===', '<=', '=='],
    correctAnswer: '!==',
    },
    {
    question: 'How would you declare an array?',
    choice: ['function myArray', 'const color = blue', 'console.log(array)', 'let myArray = [100, 200]'],
    correctAnswer: 'let myArray = [100, 200]',
    },
    {
    question: 'AddEventListener() method sets up a/an ...',
    choice: ['event', 'object', 'function', 'audio file'],
    correctAnswer: 'event',
    },
    { 
    question: 'A Boolean value returns objects as:',
    choice: ['numbers', 'operators', 'true or false', 'local storage'],
    correctAnswer: 'true or false',
    },
    {
    question: 'Which option is one available loop statement?',
    choice: ['do...while', 'fruit loop' , 'number lengths', 'of ... end'],
    correctAnswer: 'do...while',
    },
    {
    question: 'What indicates the absence of a value?',
    choice: [ 'objects', 'empty', 'blank', 'undefined'],
    correctAnswer: 'undefined',
    }
]

start.addEventListener('click', startQuiz)

function startQuiz() {
 start.classList.add('hide');
 questionBox.classList.remove('hide');
 }

 
//  function next () {

//  }

//  function selectAnswer () {

//  }

//  function timeClock () {

// }