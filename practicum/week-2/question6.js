/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    input.sort(function(a, b) {
        return a - b;
      });
      var mid = input.length / 2;
      return mid % 1 ? input[mid - 0.5] : (input[mid - 1] + input[mid]) / 2;

};