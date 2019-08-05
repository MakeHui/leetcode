/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 *
 * https://leetcode-cn.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (47.68%)
 * Total Accepted:    17.7K
 * Total Submissions: 37.1K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 * 
 * 
 * push(x) -- 将元素 x 推入栈中。
 * pop() -- 删除栈顶的元素。
 * top() -- 获取栈顶元素。
 * getMin() -- 检索栈中的最小元素。
 * 
 * 
 * 示例:
 * 
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 * 
 * 
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.mixStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    const mix = this.getMin();
    this.mixStack.push((mix === undefined || mix > x) ? x : mix);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.mixStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length - 1] : undefined;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mixStack.length ? this.mixStack[this.mixStack.length - 1] : undefined;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// const minStack = new MinStack();
// minStack.push(-2)
// console.log(minStack.stack);
// minStack.push(0)
// console.log(minStack.stack);
// minStack.push(-3)
// console.log(minStack.stack);
// console.log(minStack.mixStack);
// console.log(minStack.getMin());
// console.log(minStack.pop());
// console.log(minStack.top());
// console.log(minStack.getMin());

