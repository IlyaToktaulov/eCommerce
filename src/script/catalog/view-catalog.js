export class View_Catalog {
    constructor({itemToBag}) {
        this.catalogNode = document.querySelector('.js-catalog-output');
        this.itemCardNode = document.querySelector('.js-popup-output');
        this.itemToBag = itemToBag;
    }

    render(items) {
        items.forEach(item => {
            this.renderItem(item);
        });
    }

    renderItem = (item) => {
        const div = document.createElement('div');
        const model = document.createElement('p');
        const series = document.createElement('p');
        const img = document.createElement('img');
        const price = document.createElement('p');
        const button = document.createElement('button');

        div.setAttribute('class', 'item-card');
        div.dataset.id = item.id; 
        div.onclick = () => {
            this.renderPopupItem({
                model: item.model,
                series: item.series,
                img: item.img,
                price: item.price,
                description: item.description
            });

            this.itemCardNode.classList.toggle('popup-open');
        }

        model.setAttribute('class', 'item-model');
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

    renderPopupItem = (item) => {
        const div = document.createElement('div');
        const model = document.createElement('p');
        const series = document.createElement('p');
        const img = document.createElement('img');
        const price = document.createElement('p');
        const description = document.createElement('p');
        const closeBtn = document.createElement('btn');


        div.setAttribute('class', 'item-card-content');

        model.setAttribute('class', 'item-card-model');
        model.innerText = item.model;

        series.setAttribute('class', 'item-card-series');
        series.innerText = item.series;

        img.setAttribute('class', 'item-card-img');
        img.setAttribute('src', item.imageURL);

        price.setAttribute('class', 'item-card-price');
        price.innerText = `${item.price} Руб`;

        closeBtn.innerText = '✖';
        closeBtn.onclick = () => {
            this.itemCardNode.classList.toggle('popup-open');
            div.remove();
        }

        div.append(img, model, series, price, closeBtn);
        this.itemCardNode.append(div);
    }
}