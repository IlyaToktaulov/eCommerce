export class Model_Bag {
    constructor({
        getBagItemsForIcons,
        getItemForIcons,
        getBagSum
    }) {
        this.bag = JSON.parse(localStorage.getItem('bag')) || [];
        this.getBagItemsForIcons = getBagItemsForIcons;
        this.getItemForIcons = getItemForIcons;
        this.getBagSum = getBagSum;
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
                description: item.description,
                quantity: 1
            });
            
            this.getItemForIcons(item);
        }

        localStorage.setItem('bag', JSON.stringify(this.bag));
    }

    getBag = () => {
        return this.bag;
    }

    bagSum = (bag) => {
        let sum = 0;

        bag.forEach(item => {
            sum += Number(item.price) * item.quantity;
        });

        this.getBagSum(sum);
    }
}