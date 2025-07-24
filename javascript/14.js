//string functions
let str="Palmer";

// 1.toUpperCase -->
// console.log(str.toUpperCase());// it temporary changes value with method 
// console.log(str);

//2.toLowerCase -->
//Similar

//3.Slice
// console.log(str.slice(2,5)); //does not include end index
// console.log(str.slice(3));//slice value from index 3 to end
// console.log(str);

//4.replace
// console.log(str.replace("mer","monster"));
// console.log(str);

//5.concat
// let friend="Joao Pedro";
// console.log(str.concat(" and ",friend," are attackers"))
// console.log(str)

//6.trim --> trim blank space in front and back
let temp="       Vitinha    ";
console.log(temp.trim());
console.log(temp);

//strings are immutable 
// temp[3]='x';
// console.log(temp);//nothing will change