test('Encontrar o maior e menor valor na árvore', () => {
    const tree = new AVLTree();
    let root = null;
  
    root = tree.insert(root, 10);
    root = tree.insert(root, 20);
    root = tree.insert(root, 5);
  
    expect(tree.findMin(root)).toBe(5);
    expect(tree.findMax(root)).toBe(20);
  });
  