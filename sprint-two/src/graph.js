

var Graph = function(){
  // graph contains an object of nodes
  // each node is an object that has:
  //     an array of edges
  // {puppies:[array of edges], kittens: [array of edges], etc..}
  //

};

// constant time with respect to the number of nodes
// because objects use hash tables for property lookup
Graph.prototype.addNode = function(node){
  this[node] = [];
};

// linear time with respect to the number of nodes
// because we are using an iterative loop
Graph.prototype.contains = function(node){
  for (var key in this) {
    if (node === key) {
      return true;
    }
  }
  return false;
};

// constant time with respect to the number of nodes
// because objects use hash tables for property lookup
Graph.prototype.removeNode = function(node){
  delete this[node];
};

// linear time with respect to the number of edges on fromNode
Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this[fromNode].indexOf(toNode) > -1) {
    return true;
  } else {
    return false;
  }
};

// constant time with respect to number of edges on fromNode
Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// linear time with respect to number of edges on fromNode and toNode
Graph.prototype.removeEdge = function(fromNode, toNode){
  // debugger;
  var indexToDelete = this[fromNode].indexOf(toNode);
  this[fromNode].splice(indexToDelete, 1);
  indexToDelete = this[toNode].indexOf(fromNode);
  this[toNode].splice(indexToDelete, 1);
};

// linear time with respect to number of nodes
Graph.prototype.forEachNode = function(cb){
  for (var key in this) {
    if (this.hasOwnProperty(key)){
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



