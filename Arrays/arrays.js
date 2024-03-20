//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]

arr1 = [3,7,34,90,12];
let last1 = arr1.slice(-1);
console.log({last1});

arr2 = [true, "green", "where",12,56];
let last2 = arr2.slice(-1);
console.log({last2});


// Write a JS program that will join the following array elements into a string myPets = ["Cow", "Bird", "Snake", "Dog"];

myPets = ["Cow", "Bird", "Snake", "Dog"];
let myString = myPets.join('');
console.log({myString});

// Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

let sortedArray = arr3.sort()
console.log({sortedArray});



// Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates

let arr = ["boy", "man", "girl",            "school", "girl", "woman"];

// unique array
let uniqueArray = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
});
console.log({uniqueArray});

// Array with only duplicates
let duplicatesArray = arr.filter((item, index) => {
    return arr.indexOf(item) !== index;
});
console.log({duplicatesArray});




// Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];

let arr5 = ["the", "way", "x", 4];
var txt = "food";

if (arr5.includes(txt)) {
    console.log(txt);
} else {
    console.log("the search word was not found");
}



// Write a JS script to sort the following string:let word = "renniw"

let word = "renniw";
let characters = word.split('');
characters.sort();

let sortedWord = characters.join('');
console.log(sortedWord);



// Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 

let fruits = ["Mango", "Apple", "Guava", "Pipeaple", "Avocado", "Orange", "Grapes", "Pears", "Papaya", "Melon"];

fruits.splice(4, 0, "Tomato");
console.log(fruits);
