var domElements = {
    div: 'div',
    h3: 'h3',
    ol: 'ol',
    ul: 'ul',
    li: 'li',
    input: 'input',
    label: 'label',
    button: 'button'       
};

var pageObj = {

    insertNewDomElement: function(whereToInsert, tagName, cssClass) {
        // You can send more than 3 arguments during call insertNewDomElement() function
        // 4-th argument is Object and means that the dom element has additional params 
        
        var parentArray = document.querySelectorAll(whereToInsert);


        for ( var i = 0; i < parentArray.length; i++ ) {
            var child = document.createElement(tagName);

            if (cssClass !== '') {
                child.classList.add(...cssClass);
            }

            if (arguments.length > 3) {
                for ( var key in arguments[3] ) {
                    child[key] = arguments[3][key];
                }
            }

            if (tagName === 'input') {
                child.id = 'customCheck' + (i + 1);
            } else if (tagName === 'label') {
                child.htmlFor = 'customCheck' + (i + 1);
                child.innerHTML = 'Вариант ответа №' + i;
            }

            parentArray[i].appendChild(child);
        }

    },

    addTitle: function() {

        this.insertNewDomElement( 'body', domElements.div, ['container'] );

        var propsH3 = {
            innerHTML: "Тест по программированию"
        };

        this.insertNewDomElement( '.container', domElements.h3, ['title'], propsH3 );

    },

    addQuestionsSection: function() {

        this.insertNewDomElement( '.container', domElements.div, ['content'] );

        this.insertNewDomElement( '.content', domElements.ol, ['questions'] );

        var propsLi = {};

        for ( var i = 1; i <= 3; i++ ) {
            propsLi.innerHTML = "Вопрос №" + i;
            this.insertNewDomElement( '.questions', domElements.li, '', propsLi );
        }

    },

    addAnswerCheckboxes: function() {

        this.insertNewDomElement( '.questions li', domElements.ul, ['answers'] );
        
        for ( var j = 0; j < 3; j++ ) {
            this.insertNewDomElement( '.answers', domElements.li, '' );
        }

        var cssClassArray = ['custom-control', 'custom-checkbox'];
        this.insertNewDomElement( '.answers li', domElements.div, cssClassArray );       

        var inputProps = {
            type: 'checkbox'
        };

        this.insertNewDomElement( '.custom-checkbox', domElements.input, ['custom-control-input'], inputProps );

        this.insertNewDomElement( '.custom-checkbox', domElements.label, ['custom-control-label'] );

    },

    addButton: function() {

        this.insertNewDomElement( '.content', domElements.div, ['submit-btn'] );

        var cssClassArray = ['btn', 'btn-secondary', 'btn-lg'];
        var buttonObj = {
                type: "button",
                innerHTML: "Проверить мои результаты"
        };

        this.insertNewDomElement( '.submit-btn', domElements.button, cssClassArray, buttonObj );

    }

};

pageObj.addTitle();
pageObj.addQuestionsSection();
pageObj.addAnswerCheckboxes();
pageObj.addButton();