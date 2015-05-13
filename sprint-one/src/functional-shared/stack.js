var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};

  stack.storage = {};

  stack.length = 0;
  _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {};

stackMethods.size = function(){
  return this.length;
};

stackMethods.push = function(value) {
  this.storage[length] = value;
  this.length++;
};

stackMethods.pop = function(){
  var result;
  if (this.length > 0) {
    result = this.storage[length];
    this.length--;
  }
  return result;
};



