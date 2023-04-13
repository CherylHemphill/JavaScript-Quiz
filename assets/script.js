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

let currentQuestion = 0;
let availableQuestions = [];
let score = 0;
let correctAnswer = true;
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
    //  event.preventDefault();
    start.classList.add('hide');
    intro.classList.add('hide');
    title.classList.add('hide');
    questionBox.classList.remove('hide');
    timer.classList.remove('hide');
    next.classList.remove('hide');

    showQuestion();
    startTimer()
}


//Render the first question
function showQuestion() {
 
    // get the current ques and put it inside of the innerhtml of question area
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


// Activate the Next Button 
 next.addEventListener('click', NextQuestion); 
 
}
//  // show next question
 function NextQuestion() {
    currentQuestion++; //increment the next questions
    
    if(currentQuestion > availableQuestions.length - 1){
        return EndQuiz
    }
showQuestion();
   resetBorder() 
 }


//  set function for selected answers

buttons.addEventListener('click', selectAnswer);

 function selectAnswer() {
    
    if(availableQuestions[currentQuestion].correctAnswer === availableQuestions[currentQuestion].choice){
       border.setAttribute('style', 'border:rgb(138, 184, 138)');
    } else {
        border.setAttribute('style', 'wrong');
        timerCount - 10;
    }   
    
 }

 // Set a body reset function to clear correct or incorrect border color
 function resetBorder(){
    border.setAttribute('style', 'border:black')
 }


// Timer clock set up
function startTimer(){
    timer = setInterval(function() {
        timerCount--;

        if (timerCount <= 0) {
            clearInterval(timer);
            endQuiz();
         } else  {
               (currentQuestion < availableQuestions.length - 1)
            endQuiz();
            timer.innerText = Math.floor(timerCount % 60);
            }

    }, 1000);
}
 // End Quiz and set local storage with scores

 function endQuiz(){
    event.preventDefault();
    return timerCount;

    let scores = localStorage.getItem(timerCount);
    scores.appendChild(scores);
}