export class Model_Bag {
    constructor() {
        this.bag = JSON.parse(localStorage.getItem('bag')) || [];
    }

    add = (item) => {
        const existingItem = this.bag.find(cardItem => cardItem.id === item.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.bag.push({
                id: item.id,
                model: item.model,
                imageURL: item.imageURL,
                series: item.series,
                price: item.price,
                quantity: 1
            });
        }

        localStorage.setItem('bag', JSON.stringify(this.bag));
    }
}