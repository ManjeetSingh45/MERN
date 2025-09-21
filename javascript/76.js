class RailwayForm{
    submit(){
        alert(this.name+" Your form has been submitted for train number :"+this.num)
    }
    cancel(){
        alert(this.name+" Your form has been cancelled for train number :"+ this.num)
    }
    fill(name, num)
    {
        this.name=name
        this.num=num
    }
}
let myform=new RailwayForm()
myform.fill("manjeet",127893)
myform.submit()
myform.cancel()