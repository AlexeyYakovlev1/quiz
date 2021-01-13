var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var quizQuestionList = document.querySelector('.quiz-question-list');
var quizEndBtn = document.querySelector('.quiz-end-btn');
var questions = [
    {
        question: 'Какой орган на протижении жизни не меняется в размерах?',
        done: 'a',
        answers: [
            { text: 'Глаз' },
            { text: 'Нос' },
            { text: 'Уши' }
        ]
    },
    {
        question: 'В чем измеряется сила тока?',
        done: 'b',
        answers: [
            { text: 'Вольты' },
            { text: 'Амперы' },
            { text: 'Джоули' }
        ]
    },
    {
        question: 'В какой стране находится самое большое болото?',
        done: 'a',
        answers: [
            { text: 'Россия' },
            { text: 'Швейцария' },
            { text: 'Япония' }
        ]
    },
    {
        question: 'Кто создал Facebook?',
        done: 'c',
        answers: [
            { text: 'Линус Торвальдс' },
            { text: 'Джефф Безос' },
            { text: 'Марк Цукерберг' }
        ]
    },
    {
        question: 'Кто создал первый язык программирования?',
        done: 'b',
        answers: [
            { text: 'Мужчина' },
            { text: 'Женщина' }
        ]
    },
    {
        question: 'Самый большой человеческий орган?',
        done: 'b',
        answers: [
            { text: 'Печень' },
            { text: 'Кожа' },
            { text: 'Сердце' }
        ]
    }
];
function renderQuestions(questions) {
    questions.map(function (question, index) {
        var questionHtml = "\n            <li class=\"quiz-question-item\">\n                <div class=\"quiz-quiestion-title\">\u0412\u043E\u043F\u0440\u043E\u0441 " + (index + 1) + ": " + question.question + "</div>\n                <ul class=\"quiz-response-list\" data-question=\"" + question.question + "\"></ul>\n                <div class=\"quiz__down-resp\">\n                    <label class=\"quiz-question-response\" for=\"response\">\u041E\u0442\u0432\u0435\u0442:</label>\n                    <input type=\"text\" class=\"response\">\n                </div>\n            </li>\n        ";
        quizQuestionList.innerHTML += questionHtml;
    });
}
renderQuestions(questions);
function renderResponses(questions) {
    var quizResponseListAll = document.querySelectorAll('.quiz-response-list');
    questions.map(function (question) {
        quizResponseListAll.forEach(function (list) {
            question.answers.map(function (item) {
                if (question.question === list.dataset.question) {
                    var responseHtml = "\n                        <li>" + item.text + "</li>\n                    ";
                    list.innerHTML += responseHtml;
                }
            });
        });
    });
}
renderResponses(questions);
quizEndBtn.addEventListener('click', function () {
    var name = document.querySelector('#name');
    var responseValue = __spreadArrays(document.querySelectorAll('.response')).map(function (resp) { return resp.value; });
    var endResponse = document.querySelector('.end-response');
    if (name.value) {
        var doneArray = questions.filter(function (question, index) { return responseValue[index].toLowerCase() === question.done; });
        endResponse.textContent = "\n            \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: " + name.value + " \u043E\u0442\u0432\u0435\u0442\u0438\u043B(\u0430) \u043D\u0430 " + doneArray.length + " \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0438\u0437 " + questions.length + "\n        ";
    }
    else {
        endResponse.textContent = 'Заполните имя!';
    }
});
