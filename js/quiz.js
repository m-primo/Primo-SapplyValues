// variables
var answers = new Object();     // Store user's answers
var qn = 0; // Current question order


// Populate questionsObject
var questionsObject = new Object();     // Question objects with ID keys
questions.forEach(populateQO);
function populateQO(value) {
    questionsObject[value['id']] = value;
}


// Populate & shuffle questionsOrder
var questionsOrder = Object.keys(questionsObject); //Array of shuffled question IDs
const urlParams = new URLSearchParams(window.location.search);
if(urlParams.get("shuffle") == "true") {
    shuffleArray(questionsOrder);
}
function shuffleArray(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// Question initialization
init_question();
function init_question() {
    $("#question-text").html(questionsObject[questionsOrder[qn]].question);
    $("#question-number").html("Question "+(qn + 1)+" of "+(questionsOrder.length));
    if(jQuery.isEmptyObject(answers)) {
        $('#back_button').hide();
        // $('#back_button_off').show();
    } else {
        $('#back_button').show();
        // $('#back_button_off').hide();
    }
}


// Next question
function next_question(answer) {
    if(qn === questionsOrder.length) {
        return;
    }
    answers[questionsOrder[qn]] = answer;
    qn++;
    if(qn < questionsOrder.length) {
        init_question();
    } else {
        results();
    }
}


// Previous question
function prev_question() {
    if(jQuery.isEmptyObject(answers)) {
        $('#back_button').hide();
        // $('#back_button_off').show();
        return;
    }
    qn--;
    delete answers[questionsOrder[qn]];
    init_question();
}


// RESULTS
function results() {
    // get from session storage
    window.sessionStorage.answers = JSON.stringify(answers);

    // Calculate final results
    pct = percentageCalculation();
    window.sessionStorage.percentages = JSON.stringify(pct);

    // prepare arguments
    var args = '?';
    for(const i in Object.keys(pct)) {
        effectName = Object.keys(pct)[i];
        args += `${effectName}=${pct[effectName]}`;
        var cycle = parseInt(i);
        if(cycle+1 !== Object.keys(pct).length) {
            args += '&';
        }
    }

    // return
    location.href = 'results.html' + args;
}


// Calculate percentage
function percentageCalculation() {
    // calc max
    var max = new Object(); // Max possible scores
    var score = new Object(); // User scores
    var pct = new Object(); // Percentages/Score

    // prepare
    for(const id in answers) {
        for(const effectName in questionsObject[id].effects) {
            max[effectName] = 0;
            score[effectName] = 0;
        }
    }

    // get max & scores
    for(const id in answers) {
        // dismiss "don't know"
        if(answers[id] !== null) {
            for (const effectName in questionsObject[id].effects) {
                max[effectName] += Math.abs(questionsObject[id].effects[effectName]);
                score[effectName] += answers[id]*questionsObject[id].effects[effectName];
            }
        }
    }

    // calc score
    for(const i in Object.keys(max)) {
        effectName = Object.keys(max)[i];
        if(max[effectName] > 0) {
            pct[effectName] = (Math.round((score[effectName]*10/max[effectName]) * 100) / 100).toFixed(2);
        } else {
            pct[effectName] = 0;
        }
    }

    return pct;
}


// close quiz
function close_quiz() {
    if(confirm('[?] Are you sure you want to leave the quiz?\n[!] Your progress will be erased from your session storage!')) {
        location.href = '../index.html';
    }
}