const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["A. Madrid", "B. Rome", "C. Paris", "D. Berlin"],
        answer: "C. Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A. Venus", "B. Mars", "C. Jupiter", "D. Saturn"],
        answer: "B. Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["A. Charles Dickens", "B. William Shakespeare", "C. Mark Twain", "D. Jane Austen"],
        answer: "B. William Shakespeare"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["A. Elephant", "B. Blue Whale", "C. Giraffe", "D. Orca"],
        answer: "B. Blue Whale"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["A. Oxygen", "B. Gold", "C. Osmium", "D. Ozone"],
        answer: "A. Oxygen"
    },
    {
        question: "What is the square root of 64?",
        options: ["A. 6", "B. 7", "C. 8", "D. 9"],
        answer: "C. 8"
    },
    {
        question: "What is the largest continent on Earth?",
        options: ["A. Africa", "B. Asia", "C. Europe", "D. Antarctica"],
        answer: "B. Asia"
    },
    {
        question: "Which is the longest river in the world?",
        options: ["A. Nile", "B. Amazon", "C. Yangtze", "D. Mississippi"],
        answer: "A. Nile"
    },
    {
        question: "What is the chemical formula for water?",
        options: ["A. CO2", "B. H2O", "C. O2", "D. NaCl"],
        answer: "B. H2O"
    },
    {
        question: "Who is known as the Father of Computers?",
        options: ["A. Alan Turing", "B. Charles Babbage", "C. Steve Jobs", "D. Bill Gates"],
        answer: "B. Charles Babbage"
    }
];

// console.log(quizQuestions.forEach((el, index) => {
//     // console.log(el.question);
//     document.querySelector(".question").innerHTML = el.question
//     console.log(el.options.forEach((option, index) => {
//         console.log(option)
//     }))
//     console.log(`answer${el.answer}`);
// }))


let count = 0;
let lstind = quizQuestions.length - 1;
let score = 0;

function print_question() {

    if (count < lstind) {
        let qst = String(quizQuestions[count].question)
        console.log(qst)
        document.getElementById("qst").textContent = qst
        document.querySelectorAll('.option').forEach((el, index) => {
            el.textContent = quizQuestions[count].options[index];
            // el.replaceWith(el.cloneNode(true));
            el.addEventListener("click",() => {

                let selectedanswer = el.textContent;
                console.log(selectedanswer)
                console.log(quizQuestions[count-1].answer)
                if(selectedanswer == quizQuestions[count-1].answer) {
                    score ++;
                    // alert("true")
                }
              
            });
        }) 
        count++;
        
    }
    else {
        console.log(score)
    }

}







