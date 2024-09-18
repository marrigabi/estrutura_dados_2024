test('Encontrar nível do nó', () => {
    const tree = new AVLTree();
    let root = null;
  
    root = tree.insert(root, 10);
    root = tree.insert(root, 20);
    root = tree.insert(root, 5);
  
    expect(tree.findLevel(root, 20)).toBe(2);  // Nível do nó 20
  });
  