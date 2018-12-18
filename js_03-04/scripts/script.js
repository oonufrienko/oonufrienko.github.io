var pageObj = {

    customCheck: 1,

    createContainer: function() {
        
        var div = document.createElement('div');
        div.classList.add('container');
        document.body.appendChild(div);
        
    },

    addTitle: function() {

        this.createContainer();

        var container = document.querySelector('.container');

        var title = document.createElement('h3');
        title.innerHTML = "Тест по программированию";
        container.appendChild(title);

    },

    contentWrapper: function() {

        var container = document.querySelector('.container');

        var div = document.createElement('div');
        div.classList.add('content');
        container.appendChild(div); 

    },

    createQuestionsSection: function() {

        this.contentWrapper();

        var content = document.querySelector('.content');

        var questionsSection = document.createElement('ol');
        questionsSection.id = 'questions';
        content.appendChild(questionsSection);

        this.createQuestionItems();

    },

    createQuestionItems: function() {

        var questionsSection = document.getElementById('questions');

        for ( var i = 1; i <= 3; i++ ) {
            var questionItem = document.createElement('li');
            questionItem.innerHTML = "Вопрос №" + i;
            questionsSection.appendChild(questionItem);
        }

    },

    createAnswersSection: function() {

        var questionsList = document.getElementById("questions").getElementsByTagName("li");

        for ( var i = 0; i < questionsList.length; i++ ) {
            var answerSection = document.createElement('ul');
            answerSection.id = 'answers';
            questionsList[i].appendChild(answerSection);
        }

    },
    
    createAnswerList: function() {
    // NOT FINISHED YET
        this.createAnswersSection();
        
        var answerList = document.getElementById("answers");
        // answerList - that's array of ul elements


    // -------------------


    },

    createButtonWrapper: function() {

        var content = document.querySelector('.content');

        var div = document.createElement('div');
        div.classList.add('submit-btn');

        content.appendChild(div);

    },

    addButton: function() {

        this.createButtonWrapper();

        var submitBtn = document.querySelector('.submit-btn');

        var btn = document.createElement('button');
        btn.classList.add('btn', 'btn-secondary', 'btn-lg');
        btn.type = "button";
        btn.innerHTML = "Проверить мои результаты";

        submitBtn.appendChild(btn);

    }

}

pageObj.addTitle();
pageObj.createQuestionsSection();
pageObj.createAnswersSection();
pageObj.addButton();