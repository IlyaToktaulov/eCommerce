import { Model_Bag } from "./model-bag";
import { View_Bag } from "./view-bag";

export class Controller_Bag {
    constructor() {
        this.model = new Model_Bag({
            getBagItemsForIcons: this.bagItemsForIcons,
            getItemForIcons: this.itemForIcon,
            getBagSum: this.getSumForRender,
            getRemoveList: this.init,
        });
        this.view = new View_Bag({
            deliteThisItem: this.deliteItemFromBag
        });
    }

    init = () => {
        const bag = this.model.getBag();
        this.view.getRenderIcon(bag);
        this.view.renderBagOverview(bag);
        this.model.bagSum(bag);
    }

    addItemToBag = (item) => {
        this.model.add(item); 
    }

    deliteItemFromBag = (item) => {
        this.model.remove(item);
    }

    bagItemsForIcons = (items) => {
        this.view.getRenderIcon(items);
    }

    itemForIcon = (item) => {
        this.view.renderIcon(item);
    }

    getSumForRender = (sum) => {
        this.view.renderBagSum(sum);
    }
}