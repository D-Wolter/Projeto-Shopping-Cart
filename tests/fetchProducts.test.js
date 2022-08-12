require("../mocks/fetchSimulator");
const { fetchProducts } = require("../helpers/fetchProducts");
const computadorSearch = require("../mocks/search");

describe("Teste a função fetchProducts", () => {
  it("Teste se fetchProducts é uma função", () => {
    expect(typeof fetchProducts).toBe("function");
  });

  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalled();
  });

  it("Teste se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint", async () => {
    await fetchProducts("computador");
    expect(fetch).toBeCalledWith(
      "https://api.mercadolibre.com/sites/MLB/search?q=computador"
    );
  });

  it("o retorno da função fetchProducts com o argumento computador é igual ao objeto computadorSearch", async () => {
    const response = await fetchProducts("computador");
    expect(typeof response).toBe(typeof computadorSearch);
    expect(response).toEqual(computadorSearch);
  });

  it("Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem:", async () => {
    try {
      await fetchProducts();
    } catch (err) {
      expect(err).toEqual(new Error("You must provide an url"));
    }
  });
});
