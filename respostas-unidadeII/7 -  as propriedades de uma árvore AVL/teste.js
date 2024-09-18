test('Verificar se a árvore é AVL', () => {
    const tree = new AVLTree();
    let root = null;
  
    root = tree.insert(root, 10);
    root = tree.insert(root, 20);
    root = tree.insert(root, 5);
  
    expect(tree.isAVL(root)).toBe(true);
  });
  