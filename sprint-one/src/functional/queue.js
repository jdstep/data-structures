var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numItems = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    numItems++;
  };

  someInstance.dequeue = function(){
    if (numItems > 0) {
    numItems--;

    }
  };

  someInstance.size = function(){
    return numItems;
  };

  return someInstance;
};
