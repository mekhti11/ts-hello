interface Human{
  name : string,
  height : number,
  age : number
}

var people : Human[] = [];

var babek : Human = {name : 'Babek',height : 170 , age : 28};
people.push(babek);

people.push({
  name : 'Mekhti',
  height : 172,
  age : 21
})

var compare = (a : Human , b : Human) => { //Buyukden kucuye siralar
  if (a.height < b.height)
    return 1;
  else if(a.height > b.height)
    return -1;

  return 0;
}
var insanlar = people.sort(compare);

console.log(insanlar);
