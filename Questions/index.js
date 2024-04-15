// Q1. Write a JavaScript function to calculate the sum of two numbers.  

function sumOfTwoNumbers(a, b){
    return a + b;
}

console.log("sum is " , sumOfTwoNumbers(2, 4));


// Q2: Write a JavaScript program to find the maximum number in an array. 

function findMaxNumber(arr){
    return Math.max(...arr)
}
console.log(findMaxNumber([1, 3, 5]));


// Q3: Write a JavaScript program to find the minimum number in an array. 
function findMinNumber(arr){
    return Math.min(...arr)
}


console.log(findMinNumber([1, 3, 5]));


// Q4: Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

function palindrome(word){
    let newWord = word.toLowerCase().split('').reverse().join('')

    return word.toLowerCase() === newWord
}

console.log(palindrome("Madam"));

// Q5: Write a JavaScript program to reverse a given string. 

function reverseString(word){
    return word.split('').reverse().join('')

}
console.log(reverseString("hello"))


//