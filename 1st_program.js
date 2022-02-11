"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.warn("Warning for the 1st program!");
        window.alert("Hii Bro");
    };
    return App;
}());
var a = new App();
a.test();
