"use strict";
try {
    exports.__esModule = true;   
} catch (ReferenceError) {
    console.log();
}
 
console.log("Look at this immaginative use of typescripts");
//Tools
//let CR = new Remover() 
function removeElementsByClass(classname) {
    var elements = document.getElementsByClassName(classname);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}
//button scripts
function fire() {
    console.log("I win");
    //CR.removeElementsByClass('hello')
    removeElementsByClass('hello');
}
