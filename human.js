"use strict";
exports.__esModule = true;
var Human = /** @class */ (function () {
    function Human(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    Human.prototype.setName = function (name) {
        this.name = name;
    };
    Human.prototype.getName = function () {
        return this.name;
    };
    //  getAge = () => {
    //    return this.age;
    //  }
    Human.prototype.getHeight = function () {
        return this.height;
    };
    return Human;
}());
exports.Human = Human;
exports.compare = function (a, b) {
    if (a.getHeight() < b.getHeight())
        return 1;
    else if (a.getHeight() > b.getHeight())
        return -1;
    return 0;
};
