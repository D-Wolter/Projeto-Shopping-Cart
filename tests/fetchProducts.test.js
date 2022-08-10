require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
    expect.assertions(1);
  })

  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    await expect(fetchProducts('computador')).toBeenCalled()
    expect.assertions(1);
  })

  it('Teste se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    expect.assertions(1);
  })

  it('o retorno da função fetchProducts com o argumento computador é igual ao objeto computadorSearch', async () => {
    await expect(fetchProducts('computador')).toEqual(computadorSearch);
    expect.assertions(1);
  })
  
  test('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem:', async () => {
  expect.assertions(1);
    try {
      await fetchProducts();
    } catch (err) {
    expect(err).toEqual(new Error('You must provide an url'));
    }
})
});