export default class Remove {
    constructor() {}
    removeElementsByClass(classname: string) {
        let elements: HTMLCollectionOf<Element> = document.getElementsByClassName(classname)
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0])
        }
    }
}
