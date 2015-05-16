var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // this._storage.set(i, v);

  // retrieve k
  //  set the result to arr
  //  if arr is null
  //    set arr to empty array
  //
  //  push v onto arr
  //  call the helper function with arr as the new value

  // var arr = this._storage.get(i);
  //debugger;
  //console.log(arr);
  // if (arr === null || arr === undefined){
  //   arr = [];
  // }
  // console.log(arr);
  if (this._storage[i] === undefined) {
    this._storage[i] = [];
  }
  this._storage[i].push(v);
  //arr.push(v);
  //this._storage.set(i, arr);
  console.log(this._storage);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //debugger;
  // return this._storage.get(i);

  // retrieve the value at i (an array) and store in a temporary array
  // find in temporary array our value k
  //var arr = this._storage.get(i);
  // console.log(arr);
  //var indexOfKey = _.indexOf(arr, k);

  //return arr[indexOfKey];
  // debugger;
  var temp = this._storage[i];
  return temp[0];
  // return this._storage[i][0];

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //this._storage.set(i, null);
  delete this._storage[i];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
