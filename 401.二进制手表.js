/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    let result = [];

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            if (bitCount(h) + bitCount(m) === num) {
                result.push(h + (m > 9 ? ':' : ':0') + m);
            }
        }
    }

    return result;

    // let timeArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // const timeArrLength = timeArr.length;
    // let result = [];

    // for (let i = 0; i < num; i++) {
    //     minuteArr[timeArrLength - 1 + i] = 1;
    // }

    // const timeStr = timeArr.join('');

    // while (true) {

    //     const time = parseInt(timeArr.slice(0, 4).join(''), 2);
    //     const minute = parseInt(timeArr.slice(4).join(''), 2);
    //     if (time > 11) continue;
    //     if (minute > 59) continue;
    //     result.push(time + ':' + minute);
    
    //     if (timeStr === timeArr.reverse().join('')) {
    //         break;
    //     }
    // }

    // return result;
};

var bitCount = function(i) {
    i = i - ((i >>> 1) & 0x55555555);
    i = (i & 0x33333333) + ((i >>> 2) & 0x33333333);
    i = (i + (i >>> 4)) & 0x0f0f0f0f;
    i = i + (i >>> 8);
    i = i + (i >>> 16);
    return i & 0x3f;
}

