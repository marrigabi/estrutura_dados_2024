test('Serialização e deserialização da árvore', () => {
    const tree = new AVLTree();
    let root = null;
  
    root = tree.insert(root, 10);
    root = tree.insert(root, 20);
    root = tree.insert(root, 5);
  
    const serialized = tree.serialize(root);
    const deserialized = tree.deserialize(serialized);
  
    expect(tree.findMin(deserialized)).toBe(5);
    expect(tree.findMax(deserialized)).toBe(20);
  });
  