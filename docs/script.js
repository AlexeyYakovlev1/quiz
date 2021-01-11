const quizQuestionList = document.querySelector('.quiz-question-list');
const quizEndBtn = document.querySelector('.quiz-end-btn');

const questions = [
    {
        question: 'Какой орган на протижении жизни не меняется в размерах?', 
        answer: '1',
        responses: [
            'Глаза',
            'Нос',
            'Уши'
        ]
    },
    {
        question: 'В чем измеряется сила тока?', 
        answer: '2',
        responses: [
            'Вольты',
            'Амперы',
            'Джоули'
        ]
    },
    {
        question: 'В какой стране находится самое большое болото?', 
        answer: '1',
        responses: [
            'Россия',
            'Швейцария',
            'Япония'
        ]
    },
    {
        question: 'Кто создал первый язык программирования?', 
        answer: '2',
        responses: [
            'Мужчина',
            'Женщина'
        ]
    }
];

const alphabet = [
    'a','b','c','d','f','g','h',
    'j','k','l','m','n','o','p',
    'q','r','s','t','u','v','w',
    'x','y'
];

function renderQuestions(questions) {
    questions.map((question, index) => {
        const questionHtml = `
            <li class="quiz-question-item">
                <div class="quiz-quiestion-title">Вопрос ${index+1}: ${question.question}</div>
                <ul class="quiz-response-list" data-response="${question.responses.map(item => item)}"></ul>
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
    const quizResponseList = document.querySelectorAll('.quiz-response-list');

    quizResponseList.forEach(list => {
        questions.map(question => {
            if (list.dataset.response === question.responses.join()) {
                question.responses.map(item => {
                    const respHtml = `
                        <li>${item}</li>
                    `;
        
                    list.innerHTML += respHtml;
                });
            }
        });
    });
}

renderResponses(questions);

quizEndBtn.addEventListener('click', () => {
    const endResponse = document.querySelector('.end-response');
    const response = document.querySelectorAll('#response');
    const name = document.querySelector('#name');

    if (name.value) {
        questions.map(question => {
            response.forEach(resp => {
                if (alphabet.indexOf(resp.value.toLowerCase())+1 === +question.answer) {
                    endResponse.textContent = `${name.value} успешно прошел(а) тест!`;
                } else {
                    endResponse.textContent = `${name.value} ужасно прошел(а) тест!`;
                }
            });
        });
    } else {
        endResponse.textContent = 'Вы не подписали имя!';
    }
});