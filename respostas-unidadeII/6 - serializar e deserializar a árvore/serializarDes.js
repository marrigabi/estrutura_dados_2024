class AVLTree {
    serialize(node) {
      if (!node) return '#';
      return `${node.value},${this.serialize(node.left)},${this.serialize(node.right)}`;
    }
  
    deserialize(data) {
      let nodes = data.split(',');
      function buildTree() {
        let value = nodes.shift();
        if (value === '#') return null;
        let node = new Node(parseInt(value));
        node.left = buildTree();
        node.right = buildTree();
        return node;
      }
      return buildTree();
    }
  }
  