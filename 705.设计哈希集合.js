/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start

var List = function(val, next) {
  this.val = val;
  this.next = next;
};

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.sets = null;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  if (this.contains(key)) {
    return;
  }
  this.sets = new List(key, this.sets);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  var current = this.sets;
  var last = null;
  while (current) {
    if (current.val === key) {
      if (last === null) {
        this.sets = current.next;
      } else {
        last.next = current.next;
      }
      break;
    }
    last = current;
    current = current.next;
  }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  var current = this.sets;
  while (current) {
    if (current.val === key) {
      return true;
    }
    current = current.next;
  }
  return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

var obj = new MyHashSet()
obj.add(1)
obj.remove(1)
var param_3 = obj.contains(1)
console.log(param_3);