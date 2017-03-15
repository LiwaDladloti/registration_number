function addBtn() {
    'use strict';
    var ul = document.getElementById('plateNum');
    var text = document.getElementById('textBox').value;
    if (text.length > 0 && text !== null) {
        
        var createdLi = document.createElement('li');
        createdLi.textContent = text;
        ul.appendChild(createdLi);
    }
    document.getElementById('textBox').value = '';
}

function regNo() {
    'use strict';
    var regArea = document.getElementById('optionList').value;
    var allAreas = document.getElementById('allAreas').innerHTML;
    var bel = document.getElementById('Bellville').innerHTML;
    var cpt = document.getElementById('capeTown').innerHTML;
    var paarl = document.getElementById('Paarl').innerHTML;
    var list = document.getElementsByTagName('li');
    
    for (var i = 0; i < list.length; i++) {
        var listLoop = list[i];
        var currentReg = list[i].textContent.toUpperCase();
        console.log(listLoop);
        if (regArea === allAreas) {
            listLoop.style.display = 'inline-block';
        } else if (regArea === bel && currentReg.startsWith('CY')) {
            listLoop.style.display = 'inline-block';
        } else if (regArea === cpt && currentReg.startsWith('CA')) {
            listLoop.style.display = 'inline-block';
        } else if (regArea === paarl && currentReg.startsWith('CL')) {
            listLoop.style.display = 'inline-block';
        } else {
            listLoop.style.display = 'none'
        }
    }
}