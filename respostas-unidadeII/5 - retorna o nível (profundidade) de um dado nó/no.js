class AVLTree {
    findLevel(node, value, level = 1) {
      if (!node) return -1;
      if (node.value === value) return level;
      if (value < node.value) return this.findLevel(node.left, value, level + 1);
      return this.findLevel(node.right, value, level + 1);
    }
  }
  