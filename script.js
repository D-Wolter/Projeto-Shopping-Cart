const msgLoad = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const totalCart = document.querySelector('.total-price');
const clearButton = document.querySelector('.empty-cart');

let localStorageList = [];

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const elem = document.createElement(element);
  elem.className = className;
  elem.innerText = innerText;
  return elem;
};

const sumTotal = () => {
  const total = localStorageList.reduce(
    (acc, item) => acc + item.price * 100,
    0,
  );
  const totalRounded = total / 100;
  totalCart.innerText = `${totalRounded}`;
};

const cartItemRemove = (event, sku) => {
  cartItems.removeChild(event.target);
  const itemIndex = localStorageList.findIndex((item) => item.id === sku);
  localStorageList.splice(itemIndex, 1);
  sumTotal();
  saveCartItems(JSON.stringify(localStorageList));
};

const createCartNewElement = ({ id: sku, title: name, price: salePrice }) => {
  const newElement = document.createElement('li');
  newElement.className = 'cart__item';
  newElement.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  newElement.addEventListener('click', (event) => cartItemRemove(event, sku));
  return newElement;
};

const addCart = async (sku) => {
  const item = await fetchItem(sku);
  localStorageList.push(item);
  saveCartItems(JSON.stringify(localStorageList));
  const newItem = createCartNewElement(item);
  cartItems.appendChild(newItem);
  sumTotal();
};

const createProductItemElement = ({
  id: sku,
  title: name,
  thumbnail: image,
}) => {
  const newItems = document.createElement('section');
  newItems.className = 'item';
  newItems.appendChild(createCustomElement('span', 'item__sku', sku));
  newItems.appendChild(createCustomElement('span', 'item__title', name));
  newItems.appendChild(createProductImageElement(image));
  const addBtn = createCustomElement(
    'button',
    'item__add',
    'Adicionar ao carrinho!',
  );
  addBtn.addEventListener('click', () => addCart(sku));
  newItems.appendChild(addBtn);

  return newItems;
};

const loadMsg = () => {
  const msg = createCustomElement('p', 'loading', 'carregando...');
  msgLoad.appendChild(msg);
  msgLoad.style.alignItems = 'center';
};

const removeLoadMsg = () => {
  msgLoad.removeChild(msgLoad.firstChild);
  msgLoad.style.alignItems = '';
};

const renderProducts = async () => {
  loadMsg();
  const { results } = await fetchProducts('computador');
  removeLoadMsg();
  results.forEach((item) => {
    const newItem = createProductItemElement(item);
    msgLoad.appendChild(newItem);
  });
};

const renderCart = (list) => {
  list.forEach((item) => {
    const newItem = createCartNewElement(item);
    cartItems.appendChild(newItem);
  });
  sumTotal();
};

clearButton.addEventListener('click', () => {
  localStorageList = [];
  saveCartItems(JSON.stringify(localStorageList));
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
  }
  sumTotal();
});

window.onload = async () => {
  await renderProducts();
  localStorageList = JSON.parse(getSavedCartItems('cartItems')) || [];
  renderCart(localStorageList);
};
