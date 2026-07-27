import { View_Order } from "./view-order.js";
import { Model_Order } from "./model-order.js";

export class Controller_Order {
    constructor() {
        this.model = new Model_Order();
        this.veiw = new View_Order({
            getNewOrder: this.setNewOrder
        });
    }

    init = () => {
        this.veiw.customizeAddress();
        this.veiw.customizePay();
    }

    setNewOrder = (order) => {
        this.model.orderInWork(order);
    }
}