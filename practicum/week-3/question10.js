/*
Given an array of distinct integers, input, 
3 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    input.sort(function(a, b){return a - b});
    let pairs = []
    let max = Infinity
    for (let i = 0; i < input.length; i++){
        if (Math.abs(input[i + 1] - input[i]) <= max){
            if (Math.abs(input[i + 1] - input[i]) < max){
                pairs = []
                max = Math.abs(input[i + 1] - input[i]);
            }
            pairs.push([input[i], input[i+1]]);
        }
    }
    return pairs;
 };