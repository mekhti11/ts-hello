/*Prints message on screen*/
function yaz(message:any) {
  console.log(message);
}

interface Point{
  mesaj : string
  isim : string,
}

/*An Arrow function prints message on screen*/
let doprint = (point:Point) => {
  console.log(point.isim + point.mesaj);
}



let message;
message = 'Hello world!';

let charAt = (<string> message).charAt(2) ;
yaz(charAt);

let charAtAlternative = (message as string).charAt(3);
yaz(charAtAlternative);

yaz(message)

doprint({
  mesaj:'says Hello',
  isim : 'mekhti '
})
