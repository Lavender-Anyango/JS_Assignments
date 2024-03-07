// Extract the last four characters from the string below;"extravaganza"

let word = "extravaganza";

// console.log(word.length);

  let  new_word = word[8] + word[9] + word[10] + word[11];
  console.log(new_word);





//   Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

const food = "The quick fox jumped over the lazy dog";
const insertedFood = food.slice(0, 4) + "eat" + food.slice(4);
console.log(insertedFood);





// Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const story= "The quick brown fox jumps over the lazy dog";

function countOccurrences(str, word) {
 return str.split(word).length - 1;
}

// Count occurrences of "the"
const theCount = countOccurrences(story, "the");
console.log({theCount});

// Count occurrences of "brown"
const brownCount = countOccurrences(story, "brown");
console.log({brownCount});






// Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"

const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";

// Checking  if "are" is in string1
const isAreInString1 = string1.includes("are");
console.log({isAreInString1});

// Checking  if "sitting" is in string2
const isSittingInString2 = string2.includes("sitting");
console.log({isSittingInString2});





// Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"

let text1 = "wonderful".toUpperCase();
console.log(text1);

let text2 = "amazing".toLowerCase();
console.log(text2)

let text3 = "UndERneath".toLowerCase();
console.log(text3);

const titleCase = "A wonderful world".toLowerCase().split(' ').map(text4 => text4.charAt(0).toUpperCase() + text4.slice(1)).join(' ');
console.log(titleCase);

