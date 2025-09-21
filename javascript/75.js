let a={
    name:'saurabh', 
    language: 'javascript'
}

let p={
    run: ()=>{
        alert("run")
    }
}
a.__proto__=p
a.run()