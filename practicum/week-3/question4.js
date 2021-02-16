/*
Given an array of integers, 
return true if the array contains any duplicates.
Your function should return true 
if any value appears at least twice 
in the array, 
and it should return false 
if every element is distinct.
 
Example:
 input: [19,1,1,23,23,4,3,23,1,2]
 output: true
*/

var hasDuplicates = function(input) {
    let counts = {}

    for(let i =0; i < a.length; i++){ 
        if (counts[a[i]]){
        counts[a[i]] += 1
        } else {
        counts[a[i]] = 1
        }
    }  
    for (let prop in counts){
        if (counts[prop] >= 2){
            return true;
        }
    }

};