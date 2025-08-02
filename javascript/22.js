//Guess the number
let x=Math.random()
x*=100
let y=Math.round(x)
let z
let score=0
do{
    z=prompt("guess the number")
    Number.parseInt(z)

    if(z>y)
    {
        alert("number is lesser than guessed number")
        
    }
    else if(z<y)
    {
        alert("number is greater than guessed number")

    }
    else
    {
        alert("number is equal to guessed number")

    }
    score++;

}while(z!=y)

let w=100-score

alert("Your score is "+w)