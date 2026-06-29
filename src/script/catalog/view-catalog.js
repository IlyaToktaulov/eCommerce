export class View_Catalog {
    constructor({itemToBag}) {
        this.catalogNode = document.querySelector('.js-catalog-output');
        this.itemToBag = itemToBag;
    }

    render(items) {
        items.forEach(item => {
            this.renderItem(item);
        });
    }

    renderItem = (item) => {
        const div = document.createElement('div');
        const model = document.createElement('a');
        const series = document.createElement('p');
        const img = document.createElement('img');
        const price = document.createElement('p');
        const button = document.createElement('button');

        div.setAttribute('class', 'item-card');
        div.dataset.id = item.id; 

        model.setAttribute('class', 'item-model');
        model.setAttribute('href', '');
        model.innerText = item.model;

        series.setAttribute('class', 'item-series');
        series.innerText = item.series;

        img.setAttribute('class', 'item-img');
        img.setAttribute('src', item.imageURL);

        price.setAttribute('class', 'item-price');
        price.innerText = `${item.price} Руб`;

        button.setAttribute('class', 'item-button');
        button.innerText = 'В корзину';

        button.onclick = () => {
            this.itemToBag({
                id: item.id,
                model: item.model,
                imageURL: item.imageURL,
                series: item.series,
                price: item.price,
                description: item.description,
            });
        }

        div.append(img, model, series, price, button);

        if (!this.catalogNode) {
            return;
        } else {
            this.catalogNode.append(div);
        }

    }
}