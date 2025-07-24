//template literal 
let boy1="ram";
let boy2="karan";
console.log(`${boy1} " ' and ${boy2}`);
//we can use single quote and double quotes inside backticks and use variable directly
//called as string interpolation

//escape sequence
let a1='Your\'s';
let a2="\"\"";
let a3="lorem\nipsum"// \n taken as 1 character in length same for all others too
let a4="lorem\tipsum"
let a5="Hello\rip"//carriage return places the second word cursor at beginning of line and start to replace character upto the length of second word
console.log(a1);//  \' is taken as a single character in length
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a1.length);
console.log(a2.length);
console.log(a3.length);
console.log(a4.length);
console.log(a5.length);