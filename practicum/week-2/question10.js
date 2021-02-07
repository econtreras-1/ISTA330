/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    arr = Array.from(String(n), Number);

    var max = arr.reduce(function(a, b) {
        return Math.max(a, b);
    });
    var min = arr.reduce(function(a, b) {
        return Math.min(a, b);
    });
    return max - min

};