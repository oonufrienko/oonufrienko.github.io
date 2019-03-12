var pageObj = {

    insertNewDomElement: function(insertedObj) {
        var parentArray = document.querySelectorAll(insertedObj.parent);

        for (var i = 0; i < parentArray.length; i++) {
          var child = document.createElement(insertedObj.childTag);

          if (insertedObj.childClass) {
            child.classList.add(...insertedObj.childClass);
          }

          if (Object.keys(insertedObj).length > 3) {
            var j = 3;

            while (j < Object.keys(insertedObj).length) {
              var key = Object.keys(insertedObj)[j];
              child[key] = insertedObj[key];
              j++;
            }
          }

          if (insertedObj.childTag === 'input') {
            child.id = 'customCheck' + (i + 1);
          } else if (insertedObj.childTag === 'label') {
              child.htmlFor = 'customCheck' + (i + 1);
              child.innerHTML = 'Вариант ответа №' + i;
            }

        parentArray[i].appendChild(child);
        
        }
    },

    addTitle: function() {
        var objDiv = {
          parent: 'body',
          childTag: 'div',
          childClass: ['container']
        };

        this.insertNewDomElement(objDiv);

        var objTitle = {
          parent: '.container',
          childTag: 'h3',
          childClass: ['title'],
          innerHTML: 'Тест по программированию'            
        };

        this.insertNewDomElement(objTitle);

    },

    addQuestionsSection: function() {
        var objDiv = {
          parent: '.container',
          childTag: 'div',
          childClass: ['content']
        };

        this.insertNewDomElement(objDiv);

        var objOl = {
          parent: '.content',
          childTag: 'ol',
          childClass: ['questions']
        };

        this.insertNewDomElement(objOl);

        var objLi = {
          parent: '.questions',
          childTag: 'li',
          childClass: '',
          innerHTML: ''
        };

        for (var i = 1; i <= 3; i++) {
          objLi.innerHTML = 'Вопрос №' + i;
          this.insertNewDomElement(objLi);
        }

    },

    addAnswerCheckboxes: function() {
        var objUl = {
          parent: '.questions li',
          childTag: 'ul',
          childClass: ['answers']
        };

        this.insertNewDomElement(objUl);
        
        var objLi = {
          parent: '.answers',
          childTag: 'li',
          childClass: ''
        };
        
        for (var j = 0; j < 3; j++) {
          this.insertNewDomElement(objLi);
        }

        var objDiv = {
          parent: '.answers li',
          childTag: 'div',
          childClass: ['custom-control', 'custom-checkbox']
        };

        this.insertNewDomElement(objDiv);       

        var objInput = {
          parent: '.custom-checkbox',
          childTag: 'input',
          childClass: ['custom-control-input'],         
          type: 'checkbox'
        };

        this.insertNewDomElement(objInput);

        var objLabel = {
          parent: '.custom-checkbox',
          childTag: 'label',
          childClass: ['custom-control-label']
        };

        this.insertNewDomElement(objLabel);

    },

    addButton: function() {
        var objDiv = {
          parent: '.content',
          childTag: 'div',
          childClass: ['submit-btn']
        };

        this.insertNewDomElement(objDiv);

        var objButton = {
          parent: '.submit-btn',
          childTag: 'button',
          childClass: ['btn', 'btn-secondary', 'btn-lg'],
          type: 'button',
          innerHTML: 'Проверить мои результаты' 
        };

        this.insertNewDomElement(objButton);

    }

};

pageObj.addTitle();
pageObj.addQuestionsSection();
pageObj.addAnswerCheckboxes();
pageObj.addButton();