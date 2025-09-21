const fs = require('node:fs');
const path= require('path')
const find='john'
const replace='messi'
const preview =false
const folder=__dirname

try {
  const data = fs.readdir("data",(err,data)=>{
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let newFile=path.join(folder,item).replaceAll(find,replace)
            let oldFile=path.join(folder,item)
            if(!preview)
            {
                fs.rename(oldFile,newFile,()=>{
                    console.log("rename success")
                })
            
            }  
            else{
                console.log("rename from -->","data/"+item,"to",newFile)
            }  
                
        }
  })
} catch (err) {
  console.error(err);
}
