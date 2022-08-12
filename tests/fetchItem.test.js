require("../mocks/fetchSimulator");
const { fetchItem } = require("../helpers/fetchItem");
const item = require("../mocks/item");

describe("2 - Teste a função fetchItem", () => {
  test("testa se fetchItem é uma função", () => {
    expect(typeof fetchItem).toBe("function");
  });
  test("Execute a função fetchItem com o argumento 'MLB1615760527' e teste se fetch foi chamada;", async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalled();
  });
  test('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";', async () => {
    const url = "https://api.mercadolibre.com/items/MLB1615760527";
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalledWith(url);
  });
  test("Teste se o retorno da função fetchItem com o argumento 'MLB1615760527' é uma estrutura de dados igual ao objeto item;", async () => {
    const result = await fetchItem("MLB1615760527");
    expect(result).toEqual(item);
  });
  test("chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url;", async () => {
    try {
      await fetchItem();
    } catch (e) {
      expect(e).toEqual(new Error("You must provide an url"));
    }
  });
});
