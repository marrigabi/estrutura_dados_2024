const { Fila } = require('./fila'); // Importe a implementação

test('Compactar intervalos consecutivos na fila', () => {
  const fila = new Fila();
  fila.queue = [1, 2, 3, 5, 6, 7];

  expect(fila.compactarIntervalos()).toEqual(['1-3', '5-7']);
});
