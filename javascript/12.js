// object.keys(marks)-->array of keys of marks
//object.values(marks)--> array of values of marks

// let marks={
//     harry:98,
//     rahul:45,
//     ajay:78,
//     raunak:75
// };
// for(let i=0;i<Object.keys(marks).length;i++)
// {
//     console.log("marks of ",Object.keys(marks)[i]," are ",Object.values(marks)[i]);
// }
// for(let x in marks)
// {
//     console.log("marks of ",x," are ",marks[x]);
// }

//until user prints correct number
// let correctnumber=43;
// let i;
// while(i!=correctnumber)
// {
//     i=prompt("enter the correct number");
// }
// console.log("you entered the correct number");

//function for mean

const meanfun=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}
console.log("mean -->",meanfun(3,9,5,1,4));
