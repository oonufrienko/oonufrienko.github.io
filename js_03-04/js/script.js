var pageObj = {

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

    addQuestionsSection: function() {

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
    
    createAnswersList: function() {

        this.createAnswersSection();
        
        var answerList = document.querySelectorAll('#answers');

        for ( var i = 0; i < answerList.length; i++ ) {
            for ( var j = 0; j < 3; j++ ) {
                var li = document.createElement('li');
                answerList[i].appendChild(li);
            }
        }

    },

    createCheckboxWrapper: function() {

        this.createAnswersList();

        var ul = document.querySelectorAll('#answers');

        for ( var i = 0; i < ul.length; i++ ) {
            
            var li = ul[i].getElementsByTagName('li');

            for ( var j = 0; j < li.length; j++ ) {
                var div = document.createElement('div');
                div.classList.add('custom-control','custom-checkbox');
                li[j].appendChild(div);    
            }
        }

    },

    addAnswerCheckboxes: function() {

        this.createCheckboxWrapper();

        var checkboxWrapper = document.getElementsByClassName('custom-checkbox');
        var checkboxNumber = 1;

        for ( var i = 0; i < checkboxWrapper.length; i++ ) {
            var input = document.createElement('input');
                input.type = 'checkbox';
                input.classList.add('custom-control-input');
                input.id = 'customCheck' + (i + 1);

            var label = document.createElement('label');
                label.classList.add('custom-control-label');
                label.htmlFor = 'customCheck' + (i + 1);
                
                    if (checkboxNumber > 3) {
                        checkboxNumber = 1;
                    }

                label.innerHTML = 'Вариант ответа №' + checkboxNumber;
                checkboxNumber++;

            checkboxWrapper[i].appendChild(input);
            checkboxWrapper[i].appendChild(label);
        }

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
pageObj.addQuestionsSection();
pageObj.addAnswerCheckboxes();
pageObj.addButton();