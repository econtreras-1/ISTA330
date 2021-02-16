/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {

        var max = Math.max(input);

        for (var i = 1; i < input.length; i++){
                if (max > i*2){
                        return true;
                }
                return false;
        }

   
};