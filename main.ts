/*Prints message on screen*/
function yaz(message:any) {
  console.log(message);
}
/*An Arrow function prints message on screen*/
let doprint = (param:any) => {
  console.log(param);
}


let num1 : boolean;

let message;
message = 'Hello world!';

let charAt = (<string> message).charAt(2) ;
yaz(charAt);

let charAtAlternative = (message as string).charAt(3);
yaz(charAtAlternative);

yaz(message);
doprint(message);
