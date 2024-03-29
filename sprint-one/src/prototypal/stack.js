var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);

  storage.length = 0;
  return storage;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
};

stackMethods.push = function(value) {
  this.length++;
  this[this.length] = value;
};

stackMethods.pop = function() {
  if (this.length > 0) {
    var result = this[this.length];
    delete this[this.length];
    this.length--;
    return result;
  }
};

