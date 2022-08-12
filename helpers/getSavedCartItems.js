const getSavedCartItems = (id) => localStorage.getItem(id);

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
