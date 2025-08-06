let joke=["Why don’t scientists trust atoms? Because they make up everything."

,"I told my computer I needed a break, and now it won’t stop sending me beach wallpapers."

,"Parallel lines have so much in common… it’s a shame they’ll never meet."

,"Why did the scarecrow win an award? He was outstanding in his field."

,"I’m reading a book about anti-gravity. It’s impossible to put down!"

,"Why don’t skeletons fight each other? They don’t have the guts."

,"I asked my dog what’s two minus two. He said nothing."

,"What do you call fake spaghetti? An impasta."

,"I used to play piano by ear, but now I use my hands."

,"Why was the math book sad? It had too many problems."

,"I only know 25 letters of the alphabet. I don’t know y."

,"What’s orange and sounds like a parrot? A carrot."

,"Why did the bicycle fall over? It was two-tired."

,"I told a joke about a pencil once… it had no point."

,"What do you call cheese that isn’t yours? Nacho cheese."

,"Why don’t eggs tell jokes? They’d crack each other up."

,"I used to be indecisive, but now I’m not so sure."

,"I told my wife she was drawing her eyebrows too high. She looked surprised."

,"Why can’t your nose be 12 inches long? Because then it would be a foot."

,"What do you call a belt made of watches? A waist of time."

,"Did you hear about the restaurant on the moon? Great food, no atmosphere."

,"What did one wall say to the other? I’ll meet you at the corner."

,"I have a joke about construction, but I’m still working on it."

,"What did the grape do when he got stepped on? Nothing, he just let out a little wine."

,"Why don’t some couples go to the gym? Because some relationships don’t work out."]

let ele=document.getElementsByTagName("div")[0];
let ind=Math.floor(Math.random()*joke.length)
ele.innerHTML=joke[ind]
