 // This phrase will be translated into Whale's language
 let input = 'turpentine and turtles';
 // Whales only speak in vowels
 const vowels = ['a', 'e', 'i', 'o', 'u'];
 // Create a variable to store the vowels from the input string
 const resultArray = [];
 // Create a loop to iterate each letter of the input string.
 for (let i = 0; i < input.length; i++) {
     // console.log('i is ' + i);
     for (let j = 0; j < vowels.length; j++) {
         // console.log('j is ' + j);
         if (input[i] === vowels[j]) {
             if (input[i] === 'e') {
                 resultArray.push('ee');
             } else if (input[i] === 'u') {
                 resultArray.push('uu');
             } else {
                 resultArray.push(input[i]);
             }
         }
     }
 }
 console.log(resultArray.join('').toUpperCase());