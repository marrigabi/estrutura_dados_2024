const { LinkedList } = require('./linkedList'); // Importe a implementação

test('Intercalar duas listas encadeadas', () => {
  const list1 = new LinkedList();
  const list2 = new LinkedList();

  list1.add(1);
  list1.add(3);
  list2.add(2);
  list2.add(4);

  const intercalatedList = list1.intercalarNosListas(list2);
  expect(intercalatedList.toArray()).toEqual([1, 2, 3, 4]);
});
