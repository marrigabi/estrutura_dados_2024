test('Reorganizar lista para pares antes de ímpares', () => {
    const list = new LinkedList();
    list.add(10);
    list.add(11);
    list.add(12);
    list.add(13);
    list.add(14);
    list.add(15);
  
    list.combineImparPar();
  
    expect(list.toArray()).toEqual([11, 13, 15, 10, 12, 14]);
  });
  