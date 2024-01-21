let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,',
'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn',
'JavaScript'
];
//console.log(secretMessage);
console.log(secretMessage.length); // 24
// Remove last string of the array
secretMessage.pop();
//console.log(secretMessage);
console.log(secretMessage.length); // 23
// Add two new strings at the end of an array
secretMessage.push('to', 'Program');
//console.log(secretMessage);
console.log(secretMessage.length); // 25
// Replace the old word with new one
secretMessage[7] = 'right';
//console.log(secretMessage);
// Remove the first string of an array
secretMessage.shift();
//console.log(secretMessage);
// Add a new string at the beginning of an array
secretMessage.unshift('Programming');
//console.log(secretMessage);
// Replace multiple strings with one string in an array
secretMessage.splice(6, 5, 'know');
//console.log(secretMessage);
console.log(secretMessage.join(' '));