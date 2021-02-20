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
//Update

var d_integer = function(input) {
    let result = 0;
    let current = 0;
    let dint = -1;

    for(let i=0; i < input.length; i++){
        current = input[i];
        let count = 0;

        for(let j=0; j < input.length; j++){
            if(current == input[j]){
                count++;
            }
        }

        if(count == current && count > result){
            dint = count;
            result = count;
        }
    }
    return dint;
};