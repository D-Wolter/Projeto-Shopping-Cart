const saveCartItems = (id) => {
  localStorage.setItem('cartItems', id);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
