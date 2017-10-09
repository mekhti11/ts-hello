/*Prints message on screen*/
function yaz(message) {
    console.log(message);
}
/*An Arrow function prints message on screen*/
var doprint = function (point) {
    console.log(point.isim + point.mesaj);
};
var Man = /** @class */ (function () {
    function Man(isim, yas) {
        this.isim = isim;
        this.yas = yas;
    }
    Man.prototype.yaz = function () {
        console.log("Name :" + this.isim + "\nAge :" + this.yas);
    };
    Man.prototype.getOlder = function (another) {
        if (this.yas > another.yas)
            return this;
        return another;
    };
    return Man;
}());
doprint({
    mesaj: 'says Hello',
    isim: 'mekhti '
});
var yavsax = new Man('Yaver', 20);
yavsax.yaz();
/*
let message;
message = 'Hello world!';

let charAt = (<string> message).charAt(2) ;
yaz(charAt);

let charAtAlternative = (message as string).charAt(3);
yaz(charAtAlternative);

yaz(message)
*/
