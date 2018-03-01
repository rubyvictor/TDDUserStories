var Menu = require("../src/Menu");
var Item = require("../src/Item");

describe("Menu", () => {
  it("should have a list of items", () => {
    
    var item1 = new Item("coffee",5);
    var item2 = new Item("toast",2);
    var items = [item1,item2];
    var menu = new Menu(items);

    expect(menu.items).toEqual(items);
    expect(menu.items[0]).toEqual(item1);
  });
});
