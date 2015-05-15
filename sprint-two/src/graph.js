

var Graph = function(){
  // graph contains an object of nodes
  // each node is an object that has:
  //     an array of edges
  // {puppies:[array of edges], kittens: [array of edges], etc..}
  //

};

Graph.prototype.addNode = function(node){
  // debugger;
  this[node] = [];
};

Graph.prototype.contains = function(node){
  // var foundNode = false;
  // _.each(this, function(key){
  //   debugger;
  //   if (key === node) {
  //     foundNode = true;;
  //   }
  // });
  // return foundNode;
  for (var key in this) {
    if (node === key) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  // debugger;
  delete this[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this[fromNode].indexOf(toNode) > -1) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].push(toNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
  // for (var key in this) {
  //   cb(this.key)
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



