var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = {};

  storage.length = 0;
  storage.front = 1;
  storage.end = 0;

  _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {};

queueMethods.size = function(){
  return this.length;
};

queueMethods.enqueue = function(value){
  this.length++;
  this.end++;
  this[this.end] = value;
};

queueMethods.dequeue = function(){
  var result;
  if (this.length > 0){
    result = this[this.front];
    this.front++;
    this.length--;
  }
  return result;
};

