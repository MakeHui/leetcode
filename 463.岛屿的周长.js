/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let sideCount = 0;
    const height = grid.length, width = grid[0].length;
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            if (grid[h][w] === 0) continue;
            if (h === 0) sideCount += 1;
            else if (grid[h - 1][w] === 0) sideCount += 1;
            if (w === 0) sideCount += 1;
            else if (grid[h][w - 1] === 0) sideCount += 1;
            if (h === height - 1) sideCount += 1;
            else if (grid[h + 1][w] === 0) sideCount += 1;
            if (w === width - 1) sideCount += 1;
            else if (grid[h][w + 1] === 0) sideCount += 1;
        }
    }
    return sideCount;
};
// console.log(islandPerimeter([[0,1,0,0],
//     [1,1,1,0],
//     [0,1,0,0],
//     [1,1,0,0],
//     [1,1,0,0]]))
