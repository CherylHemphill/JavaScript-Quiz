let start = document.getElementById('startButton');
let questionBox = document.getElementById('question-box');
let answers = document.getElementById('answers');
let next = document.getElementById('next');
let questionArea = document.getElementById('question');
let timer = document.getElementById('timer');
let intro = document.getElementById('intro');
let title = document.getElementById('title');
let buttons = document.querySelectorAll('.buttons');
let border = document.getElementById('container');
let endScore = document.getElementById('end-score');
let highScore = document.getElementById('high-score');
let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let timeRemaining = document.getElementById('timeRemaining');

let currentQuestion = 0;
let availableQuestions = [];
let score = 0;
let answeredCorrectly = 0;
let timerCount = 60;


availableQuestions = [
    {
        question: 'Multiple strings can be concatenated together using which operator?',
        choice: ['-', 'x', '+', '*'],
        correctAnswer: ('+')
    },
    {
        question: 'Which comparison operator means strict not equal?',
        choice: ['!==', '===', '<=', '=='],
        correctAnswer: ('!==')
    },
    {
        question: 'How would you declare an array?',
        choice: ['function myArray', 'const color = blue', 'console.log(array)', 'let myArray = [100, 200]'],
        correctAnswer: ('let myArray = [100, 200]')
    },
    {
        question: 'AddEventListener() method sets up a/an ...',
        choice: ['event', 'object', 'function', 'audio file'],
        correctAnswer: ('event')
    },
    {
        question: 'A Boolean value returns objects as:',
        choice: ['numbers', 'operators', 'true or false', 'local storage'],
        correctAnswer: ('true or false')
    },
    {
        question: 'Which option is one available loop statement?',
        choice: ['do...while', 'fruit loop', 'number lengths', 'of ... end'],
        correctAnswer: ('do...while')
    },
    {
        question: 'What indicates the absence of a value?',
        choice: ['objects', 'empty', 'blank', 'undefined'],
        correctAnswer: ('undefined')
    }
]

start.addEventListener('click', startQuiz)


//Begin the quiz with the start button
function startQuiz() {

    start.classList.add('hide');
    intro.classList.add('hide');
    title.classList.add('hide');
    questionBox.classList.remove('hide');
    timer.classList.remove('hide');
    // next.classList.remove('hide');

    startTimer();
    NextQuestion();
}


//Render the first question
function NextQuestion() {
 
    // get the current question and put it inside of the innerhtml of question area
    questionArea.innerHTML = availableQuestions[currentQuestion].question
    
    // grab all the choices
    let choices = availableQuestions[currentQuestion].choice;

    // grab all the buttons
  
    buttons[0].innerText = choices[0]
    buttons[1].innerText = choices[1]
    buttons[2].innerText = choices[2]
    buttons[3].innerText = choices[3]

   for(var i = 0; i < availableQuestions[currentQuestion].choice.length; i++) {
    buttons[i].innerText = choices[i]
}  
    // console.log(choices, buttons)
    // for each choice
    // -- put that choice on the screen
}

 // show next question
 NextQuestion() 
    
    if (currentQuestion > availableQuestions.length){  //if no more questions available, end quiz
         EndQuiz();
       } 
       else {
        this.currentQuestion++;
       }
    
function checkAnswer(){     //validate selected answer choice
      if (availableQuestions[currentQuestion].correctAnswer === availableQuestions[currentQuestion].choices[correctAnswer]) {
        border.setAttribute('style', 'correct');
        answeredCorrectly++; //add 1 point to score
        NextQuestion(); // if answered correctly, border changes to green
       }
    else {
        border.setAttribute('style', 'wrong');  //incorrect answer, border changes to red
        timerCount - 10;
        NextQuestion();
    }
        btn0 = availableQuestions[currentQuestion].choice[0];
        btn1 = availableQuestions[currentQuestion].choice[1];
        btn2 = availableQuestions[currentQuestion].choice[2];
        btn3 = availableQuestions[currentQuestion].choice[3];

//  event listener for selected answers
btn0.addEventListener('click', checkAnswer);
btn1.addEventListener('click', checkAnswer);
btn2.addEventListener('click', checkAnswer);
btn3.addEventListener('click', checkAnswer);
        
// currentQuestion++; //increment the next questions
 
       
function resetBorder(){ // Set a body reset function to clear correct or incorrect border color
    border.setAttribute('style', 'border:black')
 }
  NextQuestion();
   resetBorder() 
 }


// Timer clock set up function startTimer(){  
  timer = 
    setInterval(function() {
        timerCount--;
        timeRemaining.innerHTML = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
            endQuiz();
         } else  {
               (currentQuestion < availableQuestions.length - 1)
            endQuiz();
            }
    }, 1000);

 // End Quiz and set local storage with scores

 function endQuiz(event){
   event.preventDefault();
    endScore.innerHTML = answeredCorrectly;

    highScore = localStorage.getItem('high scores');
    

    //let scores = localStorage.getItem(timerCount);
    // scores.appendChild(scores);
}