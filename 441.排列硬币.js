/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 * (n * n + n) / 2 = maxCoin
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 1, right = n;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const coin = maxCoin(mid);
        if (coin === n) {
            return mid;
        }
        else if (coin > n) {
            if (maxCoin(mid - 1) < n) return mid - 1;
            else right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return n;
};

var maxCoin = function(n) {
    return (n * n + n) / 2;
}

