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

class Man{
  isim : string;
  yas : number;

  //constructor(isim?:string , yas?:number)
  constructor(isim:string , yas:number){
    this.isim = isim;
    this.yas = yas;
  }

  yaz(){
    console.log("Name :"+this.isim+"\nAge :"+this.yas);
  }

  getOlder(another:Man){
    if(this.yas> another.yas)
      return this;
    return another;
  }

}

doprint({
  mesaj:'says Hello',
  isim : 'mekhti '
})

let yavsax : Man = new Man('Yaver',20);
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
