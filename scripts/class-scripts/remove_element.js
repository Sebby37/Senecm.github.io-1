"use strict";
exports.__esModule = true;
var Remove = /** @class */ (function () {
    function Remove() {
    }
    Remove.prototype.removeElementsByClass = function (classname) {
        var elements = document.getElementsByClassName(classname);
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    };
    return Remove;
}());
exports["default"] = Remove;
