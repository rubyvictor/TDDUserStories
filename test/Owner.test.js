var Owner = require("../src/Owner");
var Item = require("../src/Item");
var Order = require("../src/Order");

describe("Owner", () => {
  it("should create an owner successfully", () => {
    var owner = new Owner();

    expect(owner).toBeDefined();
    expect(owner).toBeInstanceOf(Owner);
  });
});

describe('Owner', () => {
it("has an item and customer name", () => {
  var item = new Item("Milk Tea", 4);
  var customerName = "Mary";
  var order = new Order(item,customerName);
  var owner = new Owner(order);

  // expect(owner.orders).toEqual(order);
  expect(owner.orders).toContain(order);
  expect(owner.orders).toHaveLength(1);
});  
});