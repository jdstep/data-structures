var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = {};

  storage.length = 0;
  storage.front = 0;
  storage.end = 0;

  _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {};

queueMethods.size = function(){
  return 0;
};



