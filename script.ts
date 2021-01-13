const quizQuestionList: HTMLElement = document.querySelector('.quiz-question-list');
const quizEndBtn: HTMLElement = document.querySelector('.quiz-end-btn');

interface Questions {
    question: String,
    done: String,
    answers: Array<Object>
}

const questions: Array<Questions> = [
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
        question: 'Кто создал Facebook?',
        done: 'c',
        answers: [
            {text: 'Линус Торвальдс'},
            {text: 'Джефф Безос'},
            {text: 'Марк Цукерберг'}
        ]
    },
    {
        question: 'Кто создал первый язык программирования?',
        done: 'b',
        answers: [
            {text: 'Мужчина'},
            {text: 'Женщина'}
        ]
    },
    {
        question: 'Самый большой человеческий орган?',
        done: 'b',
        answers: [
            {text: 'Печень'},
            {text: 'Кожа'},
            {text: 'Сердце'}
        ]
    }
];

function renderQuestions(questions: Array<Questions>): void {
    questions.map((question: Object, index): void => {
        const questionHtml: String = `
            <li class="quiz-question-item">
                <div class="quiz-quiestion-title">Вопрос ${index+1}: ${question.question}</div>
                <ul class="quiz-response-list" data-question="${question.question}"></ul>
                <div class="quiz__down-resp">
                    <label class="quiz-question-response" for="response">Ответ:</label>
                    <input type="text" class="response">
                </div>
            </li>
        `;

        quizQuestionList.innerHTML += questionHtml;
    })
}

renderQuestions(questions);

function renderResponses(questions: Array<Questions>): void {
    const quizResponseListAll: NodeListOf<HTMLElement> = document.querySelectorAll('.quiz-response-list');

    questions.map((question: Object): void => {
        quizResponseListAll.forEach((list: HTMLElement): void => {
            question.answers.map((item: Object): void => {
                if (question.question === list.dataset.question) {
                    const responseHtml: String = `
                        <li>${item.text}</li>
                    `

                    list.innerHTML += responseHtml;
                }
            })
        })
    })
}

renderResponses(questions);

quizEndBtn.addEventListener('click', (): void => {
    const name: HTMLElement = document.querySelector('#name');
    const responseValue: Array<HTMLElement> = [...document.querySelectorAll('.response')].map(resp => resp.value);
    const endResponse: HTMLElement = document.querySelector('.end-response');

    if (name.value) {
        const doneArray: Array<Object> = questions.filter((question, index) => responseValue[index].toLowerCase() === question.done)
    
        endResponse.textContent = `
            Результат: ${name.value} ответил(а) на ${doneArray.length} вопросов из ${questions.length}
        `;
    } else {
        endResponse.textContent = 'Заполните имя!';
    }
})