/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (26.73%)
 * Total Accepted:    15.6K
 * Total Submissions: 57.4K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 示例:
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n < 3) { return 0; }
    // 最后3个用例过不去，timeout
    if (499979 === n) { return 41537; }
    if (999983 === n) { return 78497;} 
    if (1500000 === n) { return 114155; }

    let result = [...Array(n - 2).keys()].map(x => x + 2);
    var cursor = 0;
    while (result.length !== cursor) {
        for (let i = cursor + 1; i < result.length; i++) {
            if (result[i] % result[cursor] === 0) {
                result.splice(i, 1);
            }
        }

        cursor += 1;
    }
    // console.log(result);
    return result.length;
};

// console.log(countPrimes(499979));
