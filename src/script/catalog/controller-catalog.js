import { Model_Catalog } from './model-catalog.js';
import { View_Catalog } from './view-catalog.js';

export class Controller_Catalog {
    constructor({itemFromCatalog}) {
        this.model = new Model_Catalog({
            catalogDataFromFirebase: this.renderCatalogFromFirebase
        });
        this.view = new View_Catalog({
            itemToBag: this.getItemInBag
        });
        this.itemFromCatalog = itemFromCatalog;
    }

    init() {
        this.model.readItems();
    }

    renderCatalogFromFirebase = (items) => {
        this.view.render(items);
    }

    getItemInBag = (item) => {
        this.itemFromCatalog(item);
    }
}