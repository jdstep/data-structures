var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numItems = 0;
  var lowestItem = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    lowestItem++;
    storage[lowestItem] = value;
    numItems++;
  };

  someInstance.dequeue = function(){

    if (numItems > 0) {
    var result = storage[lowestItem];
    numItems--;
    lowestItem++;
    return result;
    }
  };

  someInstance.size = function(){
    return numItems;
  };

  return someInstance;
};
