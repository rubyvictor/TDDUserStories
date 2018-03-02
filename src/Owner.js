class Owner {
  constructor() {
    this.orders = [];
  }

  createOrder(orderParam) {
      this.orders.push(orderParam);
  }
}

module.exports = Owner;
