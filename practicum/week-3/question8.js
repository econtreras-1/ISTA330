/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {

    var counts = {};
    input.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    
    let result = [];

    for (var key in counts){
        var value = counts[key];

        if(key == value){
            result.push(key);
        }
    }
    
    var max = result.reduce(function(a, b) {
        return Math.max(a, b);
    });

    return max;

};