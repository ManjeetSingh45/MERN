let func = ()=>
{
    console.log("running")
    document.querySelector(".bulb").classList.toggle("ylw");
}

setInterval(func,500)
