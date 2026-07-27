import { Controller_Catalog } from "./catalog/controller-catalog.js";
import { Controller_Bag } from "./bag/controller-bag.js";
import { Controller_Order } from "./order/controller-order.js";

const catalog = new Controller_Catalog({
    itemFromCatalog: (item) => {
        bag.addItemToBag(item);
    }
});
const bag = new Controller_Bag();
const order = new Controller_Order();

catalog.init();
bag.init();
order.init();