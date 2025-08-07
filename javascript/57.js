
const loadscript=(src)=>
{
    return new Promise((resolve,reject)=>{
        let script=document.createElement("script");
        script.src=src;
        document.body.appendChild(script)
        script.onload=()=>{
            resolve("working ")
        }
        script.onerror=()=>{
            reject("not working")
        }
    })
}

let func=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js")
func.then((value)=>{
    console.log(value)
    console.log("no error")
}).catch((error)=>
{
    console.log("some error")
})

// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Step 1"), 1000);
//     });
// }

// function step2(prev) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(prev + " → Step 2"), 1000);
//     });
// }

// function step3(prev) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(prev + " → Step 3"), 1000);
//     });
// }

// step1()
//   .then(step2)
//   .then(step3)
//   .then((finalResult) => {
//       console.log("Final Result:", finalResult);
//   })
//   .catch((err) => {
//       console.error("Error occurred:", err);
//   });
