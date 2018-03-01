var Order = require("../src/Order");
var Item = require("../src/Item");

describe('Orders test', () => {
    test('An Order has an item and customer name', () => {
        
        var item = new Item("biscuits","7");
        var customerName = "Harry Potter"
        var order = new Order(item,customerName);

        expect(order.item).toEqual(item);
        expect(order.customerName).toEqual(customerName);
        

    });
});