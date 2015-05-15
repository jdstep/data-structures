var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  // constant time with respect to number of nodes
  list.addToTail = function(value){
    // debugger;
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  // constant time with respect to number of nodes
  list.removeHead = function(){
    var poppedValue = list.head.value;
    var nextHead = list.head.next;
    list.head = nextHead;
    return poppedValue;
  };

  // linear time with respect to number of nodes
  list.contains = function(target){
    var traverse = function(currentNode) {
      if (currentNode.value === target) {
        return true;
      } else if (currentNode === list.tail) {
        return false;
      } else {
        return traverse(currentNode.next);
      }
    };
    return traverse(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
