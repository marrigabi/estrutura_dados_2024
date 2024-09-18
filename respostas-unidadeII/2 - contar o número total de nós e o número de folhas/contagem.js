class AVLTree {
    countNodes(node) {
      if (!node) return 0;
      return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }
  
    countLeaves(node) {
      if (!node) return 0;
      if (!node.left && !node.right) return 1;
      return this.countLeaves(node.left) + this.countLeaves(node.right);
    }
  }
  