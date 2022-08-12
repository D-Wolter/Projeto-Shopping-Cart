const fetchProducts = async (id) => {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${id}`,
  );
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
