'use strict'

var questions = [
  {
    questionTitle: 'Вопрос 1',
    questionId: 1,
    answers: [
      {
        title: 'Ответ 1',
        id: 11,
        isCorrect: false
      },
      {
        title: 'Ответ 2',
        id: 12,
        isCorrect: true
      },
      {
        title: 'Ответ 3',
        id: 13,
        isCorrect: false
      }
    ]
  },
  {
    questionTitle: 'Вопрос 2',
    questionId: 2,
    answers: [
      {
        title: 'Ответ 1',
        id: 21,
        isCorrect: false
      },
      {
        title: 'Ответ 2',
        id: 22,
        isCorrect: true
      },
      {
        title: 'Ответ 3',
        id: 23,
        isCorrect: false
      }
    ]
  },
  {
    questionTitle: 'Вопрос 3',
    questionId: 3,
    answers: [
      {
        title: 'Ответ 1',
        id: 31,
        isCorrect: false
      },
      {
        title: 'Ответ 2',
        id: 32,
        isCorrect: false
      },
      {
        title: 'Ответ 3',
        id: 33,
        isCorrect: true
      }
    ]
  }
]

localStorage.setItem('questions', JSON.stringify(questions));
