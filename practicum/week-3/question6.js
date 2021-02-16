/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input){
    let n = input.length();
    sort(A, n);
    let i = 1;
    let count = 1;

    while ( i < n )
    {
        while ( i < n & input[i] == input[i-1] )
        {
            i = i + 1
            count = count + 1
        }
       if ( count > n/2 )
            return input[i-1]
        count = 1
        i = i + 1
    }
    return -1
};