import {Human,compare} from "./human";

var people : Human[] = [];

var babek : Human =new Human('Babek', 28 , 170);
var mekhti : Human =new Human('Mekhti', 21 , 173);

people.push(babek,mekhti);
var people = people.sort(compare);

console.log(people); // arrow function'lari da yazdiriyor ekrana
