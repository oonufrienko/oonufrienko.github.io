'use strict'

var sectionQA = {
  question: "Вопрос ",
  answers: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]
};

var correctAnswers = {
  answerId: [1, 0, 2]
};

localStorage.setItem('sectionQA', JSON.stringify(sectionQA));
localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
