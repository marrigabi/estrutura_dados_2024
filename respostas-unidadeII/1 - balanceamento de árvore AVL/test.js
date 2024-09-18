const { AVLTree, Node } = require('./avlTree'); // Importe a implementação

test('Balanceamento AVL após inserções', () => {
  const tree = new AVLTree();
  let root = null;

  root = tree.insert(root, 10);
  root = tree.insert(root, 20);
  root = tree.insert(root, 30);

  expect(root.value).toBe(20);
  expect(root.left.value).toBe(10);
  expect(root.right.value).toBe(30);
});
