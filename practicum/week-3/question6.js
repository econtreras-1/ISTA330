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

var m_element = function(input) {
    let m = -1;
    let i = 0;

    for (let j = 0; j < input.length; j++)
    {
        if (i == 0)
        {
            m = [j];
            i = 1;
        }
        else if (m == A[j]) {
            i++;
        }
        else {
            return -1;
        }
    }
    return m;
};