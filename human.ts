export class Human{
  private name : string;
  private age : number;
  private height : number;//as a cm

  constructor(name : string , age :number , height :number){
    this.name = name;
    this.age = age;
    this.height = height;
  }

  setName (name:string) {
    this.name = name;
  }

  getName () {
    return this.name;
  }

//  getAge = () => {
//    return this.age;
//  }

  getHeight(){
    return this.height;
  }

}

export let compare = (a : Human , b : Human) => { //Buyukden kucuye siralar
  if (a.getHeight() < b.getHeight())
    return 1;
  else if(a.getHeight() > b.getHeight())
    return -1;

  return 0;
}
