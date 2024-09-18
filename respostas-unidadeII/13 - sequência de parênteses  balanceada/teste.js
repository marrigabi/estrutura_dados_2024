const { isBalanceado } = require('./balanceamento'); // Importe a implementação

test('Verificar se parênteses estão balanceados', () => {
  expect(isBalanceado('(]')).toBe(false);
  expect(isBalanceado('{[()]}')).toBe(true);
});
