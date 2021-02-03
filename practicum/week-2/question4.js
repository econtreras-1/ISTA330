/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    count = 0;

    for (i;i<A.length;i++){
        if (A[i]===B[i]){
            count+=1
        }
    }
    return count;

};