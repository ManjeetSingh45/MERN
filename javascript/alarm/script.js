var audio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
let btn=document.getElementsByClassName("btn")[0];
let stop=document.getElementsByClassName("stop")[0];
let time=document.getElementById("ctime");
let hr=document.getElementById("h");
let mn=document.getElementById("m");
let se=document.getElementById("s");

let a=new Date();
let h=a.getHours();
let m=a.getMinutes();
let s=a.getSeconds();
time.innerHTML=`<h2>TIME -->  ${h} : ${m} : ${s}</h2>`

setInterval(()=>{
    let a=new Date();
    let h=a.getHours();
    let m=a.getMinutes();
    let s=a.getSeconds();
    time.innerHTML=`<h2>TIME -->  ${h} : ${m} : ${s}</h2>`
},1000)

function fun(){
    audio.play();
}
btn.addEventListener('click',()=>{
    let x=parseInt(hr.value)
    let y=parseInt(mn.value)
    let z=parseInt(se.value)
    if(!(x>=0&&x<=23))
    {
        alert("wrong hour value");
        hr.value=0;
        return;
    }
    if(!(y>=0&&y<=59))
    {
        alert("wrong minute value");
        mn.value=0;
        return;
    }
    if(!(z>=0&&z<=59))
    {
        alert("wrong second value");
        se.value=0;
        return;
    }

    
    

    let a=new Date();
    let h=a.getHours();
    let m=a.getMinutes();
    let s=a.getSeconds();

    let d=x>=h?(x-h):(24-h+x)
    let e
    if(y>=m)
    {
        e=y-m;
    }
    else
    {
        console.log("minutes decreased")
        d--;
        if(d==-1)
        {
            d=23
        }
        e=60-m+y
    }

    let f 
    if(z>=s)
    {
        f=z-s
    }
    else
    {
        console.log("seconds decreased")
        e--;
        if(e==-1)
            {
                e=59;
                d--;
                if(d==-1)
                    {
                        d=23
                    }
                }
                f=60-s+z
    }

    console.log(d,e,f)

    let diff=(d*60*60)+(e*60)+f
    console.log(diff)

    setTimeout(fun,diff*1000)
})
stop.addEventListener('click',()=>{
    audio.pause();
    audio.currentTime=0;
})


