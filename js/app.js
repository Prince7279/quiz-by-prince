const quizData = [{
    question: " Inside which HTML element do we put the JavaScript?",

    
    a: "<js>",
    b: "<scripting>",
    c: "<script>",
    d: "<javaScript>",
    correct: "c",
},
{
    question: "What are the three important manipulations done in a for loop on a loop variable?",
    a: "Initialization,Testing, Updation",
    b: "Updation, Incrementation, Initialization",
    c: "Testing, Updation, Testing",
    d: "Initialization,Testing, Incrementation",
    correct: "a",
},
{
    question: "One of the special features of an interpreter in reference with the for loop is that",
    a: "The iterations can be infinite when an interpreter is used",
    b: " Before each iteration, the interpreter evaluates the variable expression and assigns the name of the property ",
    c: "the iteration is finite when an interpreter is used",
    d: "The body of the loop is executed only once",
    correct: "b",
},
{
    question: "The expression of calling (or executing) a function or method in JavaScript is called ",
    a: "Primary expression ",
    b: "Invocation expression",
    c: " Property Access Expression ",
    d: "Functional expression",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);
