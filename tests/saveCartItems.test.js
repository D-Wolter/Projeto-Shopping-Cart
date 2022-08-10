const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('Teste a função saveCartItems', () => {
  it('Testa se ao executar saveCartItems com o argumento "Item" o método localStorage.setItem é chamado', () => {
    const item = '<ol><li>Item</li></ol>'
    saveCartItems(item);
    expect(localStorage.setItem).toHaveBeenCalled();
    expect.assertions(1);
  });

  it('Testa se ao executar saveCartItems com o argumento Item localStorage.setItem é chamado os parâmetros: cartItems e valor ', () => {
    const item = '<ol><li>Item</li></ol>'
    saveCartItems(item);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', item);
    expect.assertions(1);
  });
});