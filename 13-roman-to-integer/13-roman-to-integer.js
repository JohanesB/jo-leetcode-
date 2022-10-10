/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var x
    var roman = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let val = 0;
    for(let j = 0; j < s.length; j++) {
        if(roman[s[j]] < roman[s[j + 1]]) {
            val -= roman[s[j]];
        }
        else {
            val += roman[s[j]];
        }
    }
    return val;
};