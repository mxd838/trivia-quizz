

// Finir la création de carte dynamique après appel API

// fetch('https://opentdb.com/api_category.php')
//     .then(response => response.json())
//     .then(data => console.log(data))


// - display the categories chosen
// - fetch the trivia api to retrieve 10 to 100 questions (amount selected by user, step of 10)
// ---> these questions must correspond to the categories chosen
// - associate each category with a color
// - set a global score and a score for each different category

// - MVP - 10 random questions
// - v1 - choose difficulty
// - v2 - choose a category and a difficulty
// - v3 - possibility to choose multiple categories


// create a template of a question card
const questionsForm = document.querySelector('.questions')
const questionsContainer = document.querySelector('.questions-cards')

// Card Template
// - question
// - two to four answers possible
// - indicate the level of difficulty


// Array of objects
const questionCards = []

fetch('https://opentdb.com/api.php?amount=10')
    .then(response => response.json())
    .then(data => {
        // console.log(data.results[0])
        // console.log(data.results.length)
        for(let i = 0; i < data.results.length; i++) {
            questionCards[i] = {
                category: data.results[i].category,
                difficulty: data.results[i].difficulty,
                question: data.results[i].question,
                rightAnswer : data.results[i].correct_answer,
                wrongAnswers : data.results[i].incorrect_answers
            }
        }
    })

console.log(questionCards)

// Template
const template = `
    <div class='card'>
        <h4>Question</h4>
        <div>
            <input type='radio' name='q1' id='q1' value='a' checked>
            <label for='q1'>Reponse a</label>
        </div>
`

function createCard(questionObject){

}