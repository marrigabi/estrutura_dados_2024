class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.height = 1;
    }
  }
  
  class AVLTree {
    getHeight(node) {
      return node ? node.height : 0;
    }
  
    getBalanceFactor(node) {
      return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
  
    rightRotate(y) {
      let x = y.left;
      let T2 = x.right;
  
      x.right = y;
      y.left = T2;
  
      y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
      x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
  
      return x;
    }
  
    leftRotate(x) {
      let y = x.right;
      let T2 = y.left;
  
      y.left = x;
      x.right = T2;
  
      x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
      y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
  
      return y;
    }
  
    insert(node, value) {
      if (!node) return new Node(value);
  
      if (value < node.value) node.left = this.insert(node.left, value);
      else if (value > node.value) node.right = this.insert(node.right, value);
      else return node;
  
      node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  
      let balance = this.getBalanceFactor(node);
  
      // Rotação à direita
      if (balance > 1 && value < node.left.value) return this.rightRotate(node);
  
      // Rotação à esquerda
      if (balance < -1 && value > node.right.value) return this.leftRotate(node);
  
      // Rotação esquerda-direita
      if (balance > 1 && value > node.left.value) {
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
  
      // Rotação direita-esquerda
      if (balance < -1 && value < node.right.value) {
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
      }
  
      return node;
    }
  }
  