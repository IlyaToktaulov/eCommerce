import { Model_Bag } from "./model-bag";
import { View_Bag } from "./view-bag";

export class Controller_Bag {
    constructor() {
        this.model = new Model_Bag();
        this.view = new View_Bag();
    }

    addItemToBag = (item) => {
        this.model.add(item);
    }
}