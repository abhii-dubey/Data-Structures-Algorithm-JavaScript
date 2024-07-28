'use strict';

// Array traversal function that prints each element of the array one-by-one
function traverseArray(input, length) {
    for(let i = 0; i < length; i++){
        let currentElement = input[i];
        console.log(currentElement);
    }
}

// Array Declaration.
let arr = [1,2,3,4,5,6,7,8,9,0];

// Get the length of the array.
let length = arr.length;
traverseArray(arr, length);