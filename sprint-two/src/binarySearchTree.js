var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree.actions);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

BinarySearchTree.actions = {};

BinarySearchTree.actions.insert = function(value) {
  // if the return from traverse is null
  //   set the return from traverse to be a new tree with given value

var myNode = BinarySearchTree(value);

var traverse = function(node){

  if (value < node.value) {
    if (node.left === null) {
      node.left = myNode;
    } else {
      traverse(node.left);
    }
  }

  if (value > node.value) {
    if (node.right === null) {
      node.right = myNode;
    } else {
      traverse(node.right);
    }
  }

};

traverse(this);

};

BinarySearchTree.actions.contains = function(value) {

  var hasValue = false;

  var traverse = function(node){
    if (value === node.value) {
      hasValue = true;
    } else {
      // pass in node.left into traverse
      if (node.left !== null) {
        traverse(node.left);
      }
      if (node.right !== null){
        traverse(node.right);
      }
    }
  };

  traverse(this);

  return hasValue;
};

BinarySearchTree.actions.depthFirstLog = function(callback) {

  var traverse = function(node){

    callback(node.value);

    if (node.left !== null) {
      traverse(node.left);
    }

    if (node.right !== null) {
      traverse(node.right);
    }

  };

  traverse(this);

};

BinarySearchTree.actions.traverse = function(node, target, test) {
  // add another parameter for a callback
  // if callback is provided, run callback on each node
  //   note: put the node.value part inside the callback
  //
  // if no callback is provided then execute the rest of the code

  // OR
  //
  // make two traverse functions
  // traverseEach traverses the entire tree and calls
  //   a callback on each node value
  // traversePluck traverses the entire tree and
  //   returns a single node that passes a truth test
  //
  // this allows there to be two separate functions
  //   that each have their own return type and can be
  //   re-used in later code
  if (test(node)) {
    return node;
  } else if (node.value > target) {
    return traverse(node.left, target, test);
  } else if (node.value < target) {
    return traverse(node.right, target, test);
  }
};

BinarySearchTree.actions.traversePluck = function(node, test, target){

  if (test(node)) {
    return node;
  } else if (node.left !== null) {
    return node.traversePluck(node.left, test);
  } else if (node.right !== null){
    return note.traversePluck(node.right, test);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
