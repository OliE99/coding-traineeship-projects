let story =
'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
console.log(story);

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually'];

// Split the string into individual words and save them in a new array. 
const storyWords = story.split(' ');
console.log(storyWords);

// Log how many words in the storyWords array. 
console.log(storyWords.length); //188

// Filter Unnecessary words in the storyWords array
const betterWords = storyWords.filter(words => !unnecessaryWords.includes(words));
console.log(betterWords);

// Find how many overused words in the storyWords array. 
const countOverusedWords = storyWords.filter(words => overusedWords.includes(words));
console.log(countOverusedWords);
let reallyCount = countOverusedWords.filter(words => words === "really").length;
console.log('really count: ', reallyCount);
let veryCount = countOverusedWords.filter(words => words === "very").length;
console.log('very count: ', veryCount);
let basicallyCount = countOverusedWords.filter(words => words === "basically").length;
console.log('basically count: ', basicallyCount);

// Count how many sentences are there in the story paragraph
let sentencesCount = 0;
for (word of storyWords) {
if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
    sentencesCount += 1;
}
};
console.log(sentencesCount);

// Log the word count, sentence count and number of times each overused word appears
console.log('The word count: ', storyWords.length);
console.log('The sentences count: ', sentencesCount);
console.log('The overused words count: ', countOverusedWords.length);

// Log the betterWords array to the console as a single string
console.log(betterWords.join(' '));