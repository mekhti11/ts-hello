/*Prints message on screen*/
function yaz(message) {
    console.log(message);
}
/*An Arrow function prints message on screen*/
var doprint = function (param) {
    console.log(param);
};
var num1;
var message;
message = 'Hello world!';
var charAt = message.charAt(2);
var charAtAlternative = message.charAt(3);
yaz(message);
yaz(charAt);
yaz(charAtAlternative);
doprint(message);
