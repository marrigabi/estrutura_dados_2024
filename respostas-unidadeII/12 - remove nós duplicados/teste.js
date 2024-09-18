test('Remover nós duplicados de uma lista encadeada', () => {
    const list = new LinkedList();
  
    list.add(1);
    list.add(2);
    list.add(1);
  
    list.removeTodosDuplicados();
  
    expect(list.toArray()).toEqual([2]);
  });
  