//TypeScrpt document
import { RSA_PKCS1_OAEP_PADDING } from "constants"; //who knows that this does, but it stops useluess duplicate errors in vscode typescript
import Remover from './class-scripts/remove_element';

console.log("Look at this immaginative use of typescripts")

//Tools
//let CR = new Remover() 

function removeElementsByClass(classname: string) {
    let elements: HTMLCollectionOf<Element> = document.getElementsByClassName(classname)
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0])
    }
}

//button scripts
function fire() {
    console.log("I win")
    //CR.removeElementsByClass('hello')
    removeElementsByClass('hello');
}

