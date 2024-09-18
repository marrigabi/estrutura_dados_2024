test('Encontrar sucessor e predecessor', () => {
    const tree = new AVLTree();
    let root = null;
  
    root = tree.insert(root, 10);
    root = tree.insert(root, 20);
    root = tree.insert(root, 5);
  
    expect(tree.findSuccessor(root, 10)).toBe(20);
    expect(tree.findPredecessor(root, 10)).toBe(5);
  });
  