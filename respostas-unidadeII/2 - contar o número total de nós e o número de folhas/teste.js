test('Contagem de nós e folhas', () => {
    const tree = new AVLTree();
    let root = null;
  
    root = tree.insert(root, 10);
    root = tree.insert(root, 20);
    root = tree.insert(root, 5);
  
    expect(tree.countNodes(root)).toBe(3);
    expect(tree.countLeaves(root)).toBe(2); // Nós folhas: 5 e 20
  });
  