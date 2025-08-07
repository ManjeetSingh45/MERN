let p1= new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve(true),2000)
})
// let p2= new Promise((resolve,reject)=>{
//     setTimeout(()=>reject(new Error(' error happened')),2000)
// })

p1.then(()=>console.log("code ran successfully"),(error)=>console.log("some error occurred"))
// p2.then(()=>console.log("code ran successfully"),(error)=>console.log("some error occurred"))