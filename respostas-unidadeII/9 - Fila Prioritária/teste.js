const { PriorityQueue } = require('./priorityQueue'); // Importe a implementação

test('Enqueue com prioridade', () => {
  const pq = new PriorityQueue();

  pq.enqueueWithPriority('low', 1);
  pq.enqueueWithPriority('high', 3);
  pq.enqueueWithPriority('medium', 2);

  expect(pq.dequeue().element).toBe('high');
  expect(pq.dequeue().element).toBe('medium');
  expect(pq.dequeue().element).toBe('low');
});
