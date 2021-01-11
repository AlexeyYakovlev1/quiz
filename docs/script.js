const quizQuestionList = document.querySelector('.quiz-question-list');
const quizEndBtn = document.querySelector('.quiz-end-btn');

const questions = [
    {
        question: 'Какой орган на протижении жизни не меняется в размерах?', 
        done: 'a',
        answers: [
            {text: 'Глаз'},
            {text: 'Нос'},
            {text: 'Уши'}
        ]
    },
    {
        question: 'В чем измеряется сила тока?',
        done: 'b',
        answers: [
            {text: 'Вольты'},
            {text: 'Амперы'},
            {text: 'Джоули'}
        ]
    },
    {
        question: 'В какой стране находится самое большое болото?',
        done: 'a',
        answers: [
            {text: 'Россия'},
            {text: 'Швейцария'},
            {text: 'Япония'}
        ]
    },
    {
        question: 'Кто создал первый язык программирования?',
        done: 'b',
        answers: [
            {text: 'Мужчина'},
            {text: 'Женщина'}
        ]
    }
];

const alphabet = [
    'a','b','c','d','e',
    'f','g','h','i','j',
    'k','l','m','n','o',
    'p','q','r','s','t',
    'u','v','w','x','y',
    'z'
]

function renderQuestions(questions) {
    questions.map((question, index) => {
        const questionHtml = `
            <li class="quiz-question-item">
                <div class="quiz-quiestion-title">Вопрос ${index+1}: ${question.question}</div>
                <ul class="quiz-response-list" data-question="${question.question}"></ul>
                <div class="quiz__down-resp">
                    <label class="quiz-question-response" for="response">Ответ:</label>
                    <input type="text" id="response">
                </div>
            </li>
        `;

        quizQuestionList.innerHTML += questionHtml;
    })
}

renderQuestions(questions);

function renderResponses(questions) {
    const quizResponseListAll = document.querySelectorAll('.quiz-response-list');

    questions.map(question => {
        quizResponseListAll.forEach(list => {
            question.answers.map(item => {
                if (question.question === list.dataset.question) {
                    const responseHtml = `
                        <li>${item.text}</li>
                    `

                    list.innerHTML += responseHtml;
                }
            })
        })
    })
}

renderResponses(questions);

quizEndBtn.addEventListener('click', () => {
    const name = document.querySelector('#name');
    const response = document.querySelectorAll('#response');
    const endResponse = document.querySelector('.end-response');

    if (name.value) {
        questions.map(question => {
            const doneArray = [...response].filter(resp => {
                return resp.value.toString().toLowerCase() === question.done.toString().toLowerCase();
            })

            return endResponse.textContent = `${name.value} ответил на ${doneArray.length} вопроса из ${questions.length}`;
        })
    } else {
        endResponse.textContent = 'Заполните имя!';
    }
})