
let func=()=>
{
    let d=new Date();

    let h=d.getHours();

    let m=d.getMinutes();

    let s=d.getSeconds();
    console.log("in func");

    let y=document.getElementsByTagName("div")[1];
    let z=document.getElementsByTagName("div")[2];
    console.log(y)
    console.log(z)

    z.innerHTML=`TIME - ${h} : ${m} : ${s}`
    y.innerHTML=`DATE - ${d}`



    

}

setInterval(func,1000);
