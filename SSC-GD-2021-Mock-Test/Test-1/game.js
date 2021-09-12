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
        question:'A boy was asked to multiply a certain number by 50. He multiplied it by 30 and got his answer less than the correct one by 400. The number to be multiplied was :',
        choice1 : '10',
        choice2 : '20',
        choice3 : '30',
        choice4 : '40',
        answer: 2,
    },
    {
        question:'0.6 of a number is equal to 0.08 of another number. The ratio of the numbers will be',
        choice1 : '3 : 4',
        choice2 : '4 : 3',
        choice3 : '2 : 15',
        choice4 : '2 : 9',
        answer: 3,
    },
    {
        question:'1/5 of a number exceeds 1/7 of the same number by 10. The number is :',
        choice1 : '125',
        choice2 : '150',
        choice3 : '175',
        choice4 : '200',
        answer: 3,
    },
    {
        question:'The sum of three consecutive odd natural numbers each divisible by 3 is 72. What is the largest among them?',
        choice1 : '21',
        choice2 : '27',
        choice3 : '24',
        choice4 : '36',
        answer: 2,
    },
    {
        question:'If *381 is divisible by 11, then the digit at tae place of * is',
        choice1 : '0',
        choice2 : '1',
        choice3 : '4',
        choice4 : '7',
        answer: 4,
    },

]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 5

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
        } else{
            decrementScore()
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

decrementScore = num => {
    score-=0.25
    scoreText.innerText = score
}

startGame()