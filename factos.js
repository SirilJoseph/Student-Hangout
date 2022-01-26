var facts = ['FUN FACT: I got emotions.', 
				'FUN FACT: If you are reading this, then you are reading this.', 
				'FUN FACT: The person next to you is a genius.', 
				'FUN FACT: I am a human.', 
				'FUN FACT: Memes and food keeps me company.', 
				'FUN FACT: Pound cake got its name from its recipe.', 
				'FUN FACT: The most expensive pizza in the world costs $12,000 dollars.', 
				'FUN FACT: White chocolate isn’t chocolate.', 
				'FUN FACT: I am kinda high on food right now.So it is becoming hard to type on. ', 
				'FUN FACT: Damn why are the parents being weird asking about girls, why do they become so irresponsible by not asking about studies?',
				'FUN FACT: Guess what is the time I am typing this? It is 8 in the morning and I frigging forgot to sleep! Lol😂']
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById('factos').innerHTML = facts[randomNumber];
}
