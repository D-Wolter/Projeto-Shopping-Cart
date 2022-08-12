const localStorageSimulator = require("../mocks/localStorageSimulator");
const getSavedCartItems = require("../helpers/getSavedCartItems");

localStorageSimulator("getItem");

describe("Teste a função getSavedCartItems", () => {
  test("Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado;", () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', async () => {
    getSavedCartItems("cartItems");
    expect(localStorage.getItem).toHaveBeenCalledWith("cartItems");
  });
});