let a="43"
let b=7;
let c=a+b
console.log(c);
//when number is added to string it result in concatenation

console.log(typeof c);

const obj=
{
    x:1,
    y:2,
    z:3,
  
}
// obj=43 cannot change const variable to a number 

obj['w']=0;//can add a key value pair in a const object
//because const var is a reference to an object in memory so changing object does not mean changing the
//constant it keeps on pointing to that memory
console.log(obj);
console.log(obj.x);

