
let ele=document.getElementsByClassName("hacker-text")[0]
ele.innerHTML="......... "


let p1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            ele.innerHTML="Initializing Hack program........"
        resolve(1)},1000)
    })    
}
let p2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            ele.innerHTML="Hacking Ankit username....."
        resolve(1)},3000)
            
        })    
    }
    let p3=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                ele.innerHTML="Username found Ankit49....."
                resolve(1);},4000)
        })    
    }
    let p4=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                ele.innerHTML="Connecting to facebook....."
                resolve(1) },4000)
            
        })    
    }
    
    let fun=async()=>{
        await p1()
        await p2()
        await p3()
        await p4()
    }

fun()

//let arr=[Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti nihil nulla quae tempore. Tenetur, laborum illum ratione ab ad quia? Aliquam ad aut fuga, harum, cupiditate eum porro reiciendis sunt iure iste ullam cum ipsam praesentium, quis repellat quos accusamus? Laboriosam doloribus at voluptas maxime sequi aut sapiente incidunt?]