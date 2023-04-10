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
        question :'Multiple strings can be concatenated toghter using which operator?'
        choice: '-'
    }
]

start.addEventListener('click', startQuiz)

function startQuiz() {
console.log('started');
 start.classList.add('hide');
 questionBox.classList.remove('hide');
 }

//  function next () {

//  }

//  function selectAnswer () {

//  }

//  function timeClock () {

// }