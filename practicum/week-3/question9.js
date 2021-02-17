/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    let count = {};
    let curMax = 0;
    let ans = 0;
    for (let i = 1; i <= n; ++ i) {
        let j = i;
        let r = 0;
        while (j > 0) {
            r += (j % 10);
            j /= 10;
        }
        count[r] ++;
        if (count[r] > curMax) {
            curMax = count[r];
            ans = 1;
        } else if (count[r] == curMax) {
            ans ++;
        }
    }
    return ans;
};