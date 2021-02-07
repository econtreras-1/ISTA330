/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    var array = [];

    for(var i=0; i<input.length; i++){
        var count = 0;
        if (input[i] < input[i+1] && input[i+1]%2==0){
            count++;
        }
        array.push(count);
    }
    return array
};