/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    for (let i = 0; i < bits.length; i++) {
      const element = bits[i];
      if (i === bits.length - 1) {
        return true;
      }
      if (element === 1) {
        i += 1;
      }
    }
    return false;
};
// @lc code=end

