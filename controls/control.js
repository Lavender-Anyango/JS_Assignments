// Q1: Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values

const numbers = (array) =>{
    let fistFour = array.slice(0, 4).map(item => item * item);
    let lastTwo = array.slice(-2).map(item => item + 10);
    let middle = array.slice(4, -2)

    let newArray = [...fistFour, ...middle, ...lastTwo]
    console.log(newArray);
}
numbers([1,2,3, 4, 5, 6, 7, 8,9]);



// Q2: Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

let arrNum = [1,2,3,4,5,6,7,8,9];

const arrayCheck = (arrNum) => {
    let index = 0; 
    while (index < arrNum.length) { 
        if (arrNum[index] === arrNum[3]) {
            break;
        }
        console.log(arrNum[index]);
        index++;
    }
};

arrayCheck(arrNum);

//  Q3: Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

function checkFruits(array){
    for(let i=0; i < array.length; i++){
        if(array[i] === array[1]){
            continue;
        }
        console.log(array[i]);
    }
}

//Example
let fruits= ['apple','plum','banana','strawberries','kiwi']

checkFruits(fruits)


// Q4: Write a function that accepts an array of strings and console.logs each element using a for loop.

function  logArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

logArray(fruits);



// Q5:Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 

function reverseString(str) {
    let reversedStr = ""; 
    let i = str.length - 1; 

    while (i >= 0) {
        reversedStr += str[i]; 
        i--;
    }

    return reversedStr; 
}

// Example

console.log(reverseString("Akirachix"));

