const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(productName, priceProduct, quantityProduct = 1) {
    const product = {
      productName: productName,
      priceProduct: priceProduct,
      quantityProduct: quantityProduct,
    };
    this.items.push(product);
    this.increaseCount();
    this.count += quantityProduct;
  },
  increaseCount() {
    return this.count;
  },
  calculateItemPrice() {
    return this.items.reduce((acc, { priceProduct, quantityProduct }) =>
      acc + priceProduct * quantityProduct, 0);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(JSON.stringify(this.totalPrice));
  },
}

cart.add('Вино', 450);
cart.add('Пиво', 100, 5);
cart.totalPrice = 100;
cart.print();

