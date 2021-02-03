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
    let str1 = A.split("")
    let str2 = B.split("")

    for (;i<str1.length;i++){
        for (j=0; j<str2.length;j++){
            if (str1[i] == str2[j]){
                count +=1
            }
        }
    }
    return count;

};