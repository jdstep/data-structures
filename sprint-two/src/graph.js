

var Graph = function(){
  // graph contains an object of nodes
  // each node is an object that has:
  //     an array of edges
  // {puppies:[array of edges], kittens: [array of edges], etc..}
  //

};

Graph.prototype.addNode = function(node){
  // debugger;
  this.kittens = [];
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
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



