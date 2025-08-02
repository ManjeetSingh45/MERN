//7 delete method 
//length remains same even after deleting
// let d=[5,9,11,4,26]
// console.log(d.length)
// delete d[3]
// console.log(d)
// console.log(d.length)

//8 concat 
// let a1=[5,8,11,4]
// let a2=[2,3]
// let a3=[17,6]
// let x=a1.concat(a2,a3)

// console.log(x)


//9 sort 
//sort alphabetically assuming string 
//can create a compare function to implement other logics
// let compare=(a,b)=>{
//     return a-b
// }
// let arr=[2,5,29,32,43,55,null,"ab","bcd","z"]
// arr.sort()
// console.log(arr)
// arr.sort(compare)
// console.log(arr)

//10 reverse 


//11 splice
//modifies original array and add and remove elements from array based on an index
//returns array of deleted elements
// let x=[1,5,9,12,3,7,14]
// let y=x.splice(3,3,45,46,47,48)
// console.log(y);
// console.log(x)


//12 slice 
let x=[34,5,67,8,9,15,42,23]
let y =x.slice(3,6)
console.log(y)
console.log(x)
