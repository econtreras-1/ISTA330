/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input){

    const threshold = Math.floor(input.length / 2);
    const array = {};

    for (let i = 0; i < input.length; i++) {
       const value = input[i];
       array[value] = array[value] + 1 || 1;
       if (array[value] > threshold)
          return value
    };
    return -1;
};