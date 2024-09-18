class AVLTree {
    findSuccessor(node, value) {
      let successor = null;
      while (node) {
        if (value < node.value) {
          successor = node;
          node = node.left;
        } else {
          node = node.right;
        }
      }
      return successor ? successor.value : null;
    }
  
    findPredecessor(node, value) {
      let predecessor = null;
      while (node) {
        if (value > node.value) {
          predecessor = node;
          node = node.right;
        } else {
          node = node.left;
        }
      }
      return predecessor ? predecessor.value : null;
    }
  }
  