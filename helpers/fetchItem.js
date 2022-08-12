const fetchItem = async (ID) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${ID}`);
  const item = response.json();
  return item;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
