import { Controller_Catalog } from "./catalog/controller-catalog.js";
import { Controller_Bag } from "./bag/controller-bag.js";

const catalog = new Controller_Catalog({
    itemFromCatalog: (item) => {
        bag.addItemToBag(item);
    }
});
const bag = new Controller_Bag();

catalog.init();
bag.initBagIcons();