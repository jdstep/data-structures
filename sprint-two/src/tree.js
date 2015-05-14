var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){

  var newChild = Tree(value);
  this.children.push(newChild);

};

treeMethods.contains = function(target){
    //
  // if (this.children.length === 0) {
  //   return this.value === target;
  // } else {
  //   _.each(this.children, function(innerNode){
  //     return innerNode.value === target;
  //   });
  // }


  var hasTarget = false;


  var traverse = function(node) {
    if (node.value === target){
      hasTarget = true;
    } else {
      _.each(node.children, function(innerNode){
          traverse(innerNode);
        });
      }
  };

  if (this.value === target) {
    hasTarget = true;
  } else {
    _.each(this.children, function(innerNode){
      traverse(innerNode);
    });
  }

  return hasTarget;

};

// traverse accepts node and target
// returns the node that matches target
// otherwise matches undefined

/*
 * Complexity: What is the time complexity of the above functions?
 */
