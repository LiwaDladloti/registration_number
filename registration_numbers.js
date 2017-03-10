function addBtn() {
    'use strict';
    //declare variebles
    var ul = document.getElementById("plateNum");
    //var createdLi, text, text1;
    var text = document.getElementById('textBox').value;
    if (text.length > 0 && text !== null){
        
    var createdLi = document.createElement('li');
    createdLi.textContent = text;
   // text1 = document.createTextNode(text);
    ul.appendChild(createdLi);
    }  //document.getElementById('plateNum').appendChild(createdLi);
    document.getElementById('textBox').value = '';
}