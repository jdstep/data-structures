var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// constant time with respect to number of keys
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if (bucket === undefined){
    this._storage.set(i, []);
    bucket = [];
  }

  bucket.push([k, v]);

  this._storage.set(i, bucket);
};

// linear with respect to values in the bucket
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  for (var x = 0; x < bucket.length; x++){
    if (bucket[x][0] === k){
      return bucket[x][1];
    }
  }

};

// linear with respect to values in the bucket
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  for (var x = 0; x < bucket.length; x++){
    if (bucket[x][0] === k){
      bucket[x][1] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
