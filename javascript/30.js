
while(true)
{
    let a=prompt("Select snake water or gun by typing s,w or g respectively")
    let b=Math.random()*3;
    b=Math.ceil(b)
    if(a=='s')
    {
        if(b==1)
        {
            alert("both snake nobody wins")
        }
        else if(b==2)
        {
            alert("snake drinks water user wins")
        }
        else
        {
            alert("gun shoots snake user loses")
        }
    }
    else if(a=='w')
    {
        if(b==1)
        {
            alert("snake drinks water user loses")
        }
        else if(b==2)
        {
            alert("both water nobody wins ")
        }
        else
        {
            alert("gun sink in water user wins")
        }
    }
    else if (a=='g')
    {
        if(b==1)
        {
            alert("gun shoots snake user wins")
        }
        else if(b==2)
        {
            alert("gun sinks in water user loses ")
        }
        else
        {
            alert("both guns nobody wins")
        }
    }
    else
    {
        alert("invalid input")
    }

    let x=confirm("want to play again ?")
    if(!x)
        break
    
    
}