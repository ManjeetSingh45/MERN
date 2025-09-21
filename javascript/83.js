class Complex{
    constructor(real, imaginary)
    {
        this.real=real
        this.imaginary=imaginary
    }

    show(){
        console.log(this.real+" + "+this.imaginary+"i")
    }

    sum(c)
    {
        
        this.real=this.real+c.real
        this.imaginary=this.imaginary+c.imaginary
    }

}

let c1=new Complex(4,7)
let c2=new Complex(15,3)
c1.sum(c2)
c1.show()