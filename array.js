"use strict";
exports.__esModule = true;
var human_1 = require("./human");
var people = [];
var babek = new human_1.Human('Babek', 28, 170);
var mekhti = new human_1.Human('Mekhti', 21, 173);
people.push(babek, mekhti);
var people = people.sort(human_1.compare);
console.log(people); // arrow function'lari da yazdiriyor ekrana
