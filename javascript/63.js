
//Q1
// const loadscript=(src)=>{
//     return new Promise((resolve,result)=>{
//         let script=document.createElement('script')
//         script.src=src;
//         document.body.appendChild(script)
//         script.onload=()=>{
//             resolve("working")
//         }
//     })
// }

// let func=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js")
// func.then((value)=>{
//     console.log(value)
//     alert("load is complete")
// }).catch((err)=>
// {
//     alert("some error occurred")
// })


//Q2
// const loadscript=async(src)=>{
//     return new Promise((resolve,result)=>{
//         let script=document.createElement('script')
//         script.src=src;
//         document.body.appendChild(script)
//         script.onload=()=>{
//             resolve("working")
//         }
//     })
// }

// const fun2=async()=>{
//     let a= await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js")
//     alert("script running")
// }

// fun2()

//Q3
// let fun1=()=>{
//     return new Promise((resolve,reject)=>
//         {
//             setTimeout(()=>{
//                 reject(new Error("not working"))
//             },3000)
//         })
// }
// console.log("reached here1")

// let fun2=async()=>{

//     console.log("reached here2")
//     try{
        
//         let x=await fun1()
//         console.log(x)
//     }
//     catch(err)
//     {
//         console.log("now we caught the error")
//     }

                                
// }
                            
// fun2()

//Q4
let p1=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1)
        },1000)
    })
}


let p2=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(2)
        },2000)
    })
}


let p3=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(3)
        },4000)
    })
}

let fun=async()=>
{
    console.time("t")
    // let a=await p1()
    // console.log(a)

    // let b=await p2()
    // console.log(b)

    // let c=await p3()
    // console.log(c)

    let a1=p1()
    let a2=p2()
    let a3=p3()

    let x=await Promise.all([a1,a2,a3])
    console.log(x+ " done")

    console.timeEnd("t")
}
    
fun()






