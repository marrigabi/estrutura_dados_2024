const { decimalParaBinario } = require('./decimalParaBinario'); // Importe a implementação

test('Converter decimal para binário usando pilha', () => {
  expect(decimalParaBinario(10)).toBe('1010');
  expect(decimalParaBinario(0)).toBe('0');
});
