const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question:'Find out the HCF of 24, 45, and 60',
        choice1 : '4',
        choice2 : '3',
        choice3 : '6',
        choice4 : '15',
        answer: 2,
    },
    {
        question:'Among how many children may 429 mangoes and also 715 oranges be eqully divided?',
        choice1 : '143',
        choice2 : '123',
        choice3 : '152',
        choice4 : '160',
        answer: 1,
    },
    {
        question:'Find the LCM of 48, 72 and 84',
        choice1 : '1008',
        choice2 : '1109',
        choice3 : '3105',
        choice4 : '1801',
        answer: 1,
    },
    {
        question:'Find the LCM of 24, 45 and 60',
        choice1 : '240',
        choice2 : '260',
        choice3 : '360',
        choice4 : '280',
        answer: 3,
    },
    {
        question:'Find the HCF of 35/12, 49/30, and 21/40',
        choice1 : '4/38',
        choice2 : '7/120',
        choice3 : '5/132',
        choice4 : '7/142',
        answer: 2,
    },
    {
        question:'HCF of 221 and 437',
        choice1 : '0',
        choice2 : '221',
        choice3 : '1',
        choice4 : 'Not Find',
        answer: 3,
    },
    {
        question:'Which of the following number has the heighest divisor?',
        choice1 : '99',
        choice2 : '101',
        choice3 : '176',
        choice4 : '182',
        answer: 3,
    },
    {
        question:'The LCM of two number is 2079 and their HCF is 27. If the 1st number is 189, find the 2nd number.',
        choice1 : '299',
        choice2 : '297',
        choice3 : '289',
        choice4 : '189',
        answer: 2,
    },
    {
        question:'LCM of two number is 3 times of their HCF The sum of HCF & LCM is 640. If one number is 120, then other number is.',
        choice1 : '600',
        choice2 : '480',
        choice3 : '160',
        choice4 : '640',
        answer: 4,
    },
    {
        question:'Find the least number which when divided by 12, 16 and 18 leaves 5 remainder in each case.',
        choice1 : '139',
        choice2 : '144',
        choice3 : '149',
        choice4 : '154',
        answer: 3,
    },


]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 10

startGame = () =>{
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () =>{
    if(availableQuestions.length === 0 || questionCounter>MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 
        'incorrect'
        
        if (classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score+=num
    scoreText.innerText = score
}

startGame()