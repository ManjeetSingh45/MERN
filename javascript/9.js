//for loop

// let n=prompt("Enter the value for factorial")
// let ans=1;
// for(let i=2;i<=n;i++)
// {
//     ans*=i;
// }
// console.log("factorial for ",n," is -->",ans);

//for in loop for keys of object and used in arrays

let obj={
    a:67,
    b:88,
    c:93,
    d:82,
    e:77
}

// for(let x in obj)
// {
//     console.log("marks of "+x+" are ",obj[x])
// }

// for of loop used for values in objects and with arrays and string 
//obj needs to be iterable

for(let val of Object.values(obj))
{
    console.log(val)
}
for(let x of "Manjeet")
{
    console.log(x);
}