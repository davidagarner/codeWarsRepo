

 const Vowels = ["a", "e", "i", "o", "u"]

 function vowelsCounter(text) {
     // Initialize counter
     let counter = 0;
 
     for (let letter of text.toLowerCase()) {
         if (vowels.includes(letter)) {
             counter++
         }
     }
      return counter
 }