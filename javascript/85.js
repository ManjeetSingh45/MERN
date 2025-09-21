class CreatePassword{
    constructor()
    {
        console.log("Create Password Initialized")
        this.pass=""

    }
    GeneratePassword(len){
        let char="abcdefghijklmnopqrstuvwxyz"
        let num="0123456789"
        let special="!@#$%^&*"
        if(len<3)
        {
            console.log("length is invalid")
        }
        else
        {
            for(let i=0;i<this.len;i++)
            {
                if(i%3==0)
                {
                    let  n=Math.floor(Math.random()*char.length)
                    this.pass+=char[n];
                }
                else if(i%3==1)
                {
                    let  n=Math.floor(Math.random()*num.length)
                    this.pass+=num[n];
                }
                else
                {
                    let  n=Math.floor(Math.random()*special.length)
                    this.pass+=special[n];
                }
            }
        }
        return this.pass;
        }
    
}

let obj=new CreatePassword()
console.log(obj.GeneratePassword(2))
