document.write("setInterval and setTimeout")
const func2=()=>
{
    clearInterval(timerid)
}

setTimeout(func2,5000)

const func= (a,b)=>{
    console.log("inside setInterval  "+(a+b))
    console.log(timerid)
    alert("setInterval")
}

let timerid=setInterval(func,2000,5,8)

