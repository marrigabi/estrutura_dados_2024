test('Rotacionar lista encadeada para a direita', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
  
    list.rotacionarDireita(2);
  
    expect(list.toArray()).toEqual([4, 5, 1, 2, 3]);
  });
  