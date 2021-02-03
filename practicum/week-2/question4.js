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
    let count = 0;
    let i = 0;
    let j = 0;
    let A = A.split("")
    let B = B.split("")

    for (;i<A.length;i++){
        for (j=0; j<B.length;j++){
            if (A[i] == B[j]){
                count +=1
            }
        }
    }
    return count;

};