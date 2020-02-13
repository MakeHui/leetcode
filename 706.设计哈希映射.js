/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start

var Node = function(key, val, next) {
  this.key = key;
  this.val = val;
  this.next = next;
};

/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.sets = null;
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  var node = this.getNode(key);
  if (node) {
    node.val = value;
    return;
  }
  this.sets = new Node(key, value, this.sets);
};

MyHashMap.prototype.getNode = function(key) {
  var current = this.sets;
  while (current) {
    if (current.key === key) {
      return current;
    }
    current = current.next;
  }
  return null;
}

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  var node = this.getNode(key);
  return node ? node.val : -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  var current = this.sets;
  var last = null;
  while (current) {
    if (current.key === key) {
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
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
var obj = new MyHashMap()
obj.put(key,value)
var param_2 = obj.get(key)
obj.remove(key)
console.log(param_2);
