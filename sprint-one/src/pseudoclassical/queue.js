var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //

  this.length = 0;
  this.front = 1;
  this.end = 0;
};

Queue.prototype.size = function (){
  return this.length;
};

Queue.prototype.enqueue = function(value){
  this.length++;
  this.end++;
  this[this.end] = value;
};

Queue.prototype.dequeue = function(){
  if (this.length > 0) {
    var result =  this[this.front];
    this.length--;
    this.front++;
    return result;
  }
};

