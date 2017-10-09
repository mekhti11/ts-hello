/*Prints message on screen*/
function yaz(message) {
    console.log(message);
}
/*An Arrow function prints message on screen*/
var doprint = function (point) {
    console.log(point.isim + point.mesaj);
};
var message;
message = 'Hello world!';
var charAt = message.charAt(2);
yaz(charAt);
var charAtAlternative = message.charAt(3);
yaz(charAtAlternative);
yaz(message);
doprint({
    mesaj: 'says Hello',
    isim: 'mekhti '
});
