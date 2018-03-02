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
  var item2 = new Item("Cocoa powder",5);
  var customerName = "Mary";
  var items = [item,item2];
  var order = new Order(items,customerName);

  
  var owner = new Owner();
  expect(owner.orders).toHaveLength(0);
  owner.createOrder(order);

  // expect(owner.orders).toEqual(order);
  expect(owner.orders).toContain(order);
  expect(owner.orders).toHaveLength(1);
});  
});