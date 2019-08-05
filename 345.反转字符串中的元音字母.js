/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if (s.length <= 1) return s;
    s = s.split('');
    const vowel = 'aoeiuAOEIU';
    let left = 0, right = s.length - 1;
    while (left <= right) {
        if (vowel.indexOf(s[left]) === -1) {
            left += 1;
            continue;
        }

        const temp = s[left];

        while (left <= right) {
            if (vowel.indexOf(s[right]) === -1) {
                right -= 1;
                continue;
            }

            s[left] = s[right];
            s[right] = temp;
            break;
        }

        left += 1;
        right -= 1;
    }
    return s.join('');
};

