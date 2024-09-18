class AVLTree {
    findMin(node) {
      while (node.left) node = node.left;
      return node.value;
    }
  
    findMax(node) {
      while (node.right) node = node.right;
      return node.value;
    }
  }
  