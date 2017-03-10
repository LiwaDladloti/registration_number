function addBtn() {
    'use strict';
    //declare variebles
    var createdLi, text, text1;
    createdLi = document.createElement('li');
    text = document.getElementById('textBox').value;
    text1 = document.createTextNode(text);
    createdLi.appendChild(text1);
    document.getElementById('plateNum').appendChild(createdLi);
    document.getElementById('textBox').value = '';
}