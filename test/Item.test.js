var Item = require("../src/Item");

describe('Items on the menu', () => {
    it('has a name and price', () => {

        var itemName = "Coffee";
        var itemPrice = 5;
        var item = new Item(itemName, itemPrice);
        

        expect(item.name).toEqual(itemName);
        expect(item.price).toEqual(itemPrice);
        // expect(item.price).toEqual(price);
    });
});
