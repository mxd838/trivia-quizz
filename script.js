fetch('https://opentdb.com/api.php?amount=10')
    .then(response => response.json())
    .then(data => console.log(data))

fetch('https://opentdb.com/api_category.php')
    .then(response => response.json())
    .then(data => console.log(data))

// --- MVP ---
// - display the categories chosen
// - fetch the trivia api to retrieve 10 to 100 questions (amount selected by user, step of 10)
// - associate each category with a color
// - set a global score and a score for each different category


// create a template of a question card
//