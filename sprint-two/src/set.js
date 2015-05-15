var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

// constant time with respect to number of elements on set
setPrototype.add = function(item){
  this._storage.push(item);
};

// linear time with respect to number of elements on set
setPrototype.contains = function(item){
  return _.contains(this._storage, item);
};

// linear time with respect to number of elements on set
setPrototype.remove = function(item){
  var indexToDelete = _.indexOf(this._storage, item);

  this._storage.splice(indexToDelete, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
