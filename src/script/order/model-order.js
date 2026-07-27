export class Model_Order {
    constructor () {
         this.orders = JSON.parse(localStorage.getItem('orders')) || [];
    }

    orderInWork = (order) => {
        this.orders.push({
            name: order.name,
            street: order.street,
            city: order.city,
            pNumber: order.pNumber,
            paySelect: order.paySelect,
            id: crypto.randomUUID(),
        });
        localStorage.setItem('orders', JSON.stringify(this.orders));
    }
}