var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);

  storage.front = 1;
  storage.length = 0;
  storage.end = 0;

  return storage;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
};

queueMethods.enqueue = function(value) {
  this.length++;
  this.end++;
  this[this.end] = value;
};

queueMethods.dequeue = function() {
  if (this.length > 0) {
    var result = this[this.front];
    this.front++;
    this.length--;
    return result;
  }
};
