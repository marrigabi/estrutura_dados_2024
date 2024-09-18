const { UndoSystem } = require('./undoSystem'); // Importe a implementação

test('Teste undo para desfazer operações', () => {
  const undoSystem = new UndoSystem();

  undoSystem.addOperation('op1');
  undoSystem.addOperation('op2');
  expect(undoSystem.undo()).toBe('op2');
  expect(undoSystem.undo()).toBe('op1');
  expect(undoSystem.undo()).toBe(null);
});
