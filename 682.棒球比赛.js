/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let result = [];
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === 'C') {
            for (let z = result.length - 1; z >= 0; z--) {
                if (result[z] !== null) {
                    result[z] = null;
                    break;
                }
            }
        }
        else if (ops[i] === 'D') {
            for (let z = result.length - 1; z >= 0; z--) {
                if (result[z] !== null) {
                    result.push(parseInt(result[z], 10) * 2);
                    break;
                }
            }
        }
        else if (ops[i] === '+') {
            let temp = 0, flag = false;
            for (let z = result.length - 1; z >= 0; z--) {
                if (result[z] !== null) {
                    temp += parseInt(result[z], 10);
                    if (flag) break;
                    flag = true;
                }
            }
            result.push(temp);
        }
        else {
            result.push(parseInt(ops[i], 10));
        }
    }
    return result.reduce((sum, current) => sum + current);
};
// console.log(calPoints(["5","-2","4","C","D","9","+","+"]))
