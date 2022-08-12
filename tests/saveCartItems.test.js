const localStorageSimulator = require("../mocks/localStorageSimulator");
const saveCartItems = require("../helpers/saveCartItems");

localStorageSimulator("setItem");

describe("Teste a função saveCartItems", () => {
  it('saveCartItems com o parametro "<ol><li>Item</li></ol>" o método localStorage.setItem é chamado', () => {
    const item = "<ol><li>Item</li></ol>";
    saveCartItems(item);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('saveCartItems com o parametro "<ol><li>Item</li></ol>" o método localStorage.setItem é chamado com dois parâmetros: cartItems e valor ', () => {
    const param = "<ol><li>Item</li></ol>";
    saveCartItems(param);
    expect(localStorage.setItem).toHaveBeenCalledWith("cartItems", param);
  });
});
