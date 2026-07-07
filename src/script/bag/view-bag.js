export class View_Bag {
    constructor ({deliteThisItem}) {
        this.bagOutputNode = document.querySelector('.js-bag-output');
        this.bagOverviewOutputNode = document.querySelector('.js-bag-overview-output');
        this.bagSumOutputNode = document.querySelector('.js-bag-sum-output');
        this.deliteThisItem = deliteThisItem;
    }

    getRenderIcon = (items) => { 

        if (!items || items.length ===0) {
            return;
        } else {
            this.bagOutputNode.innerHTML = '';
            items.forEach(item => {
                this.renderIcon(item);
            });
        }
    }

    renderIcon = (item) =>  {
            const div = document.createElement('div');
            const img = document.createElement('img');

            div.setAttribute('class', 'ico-bag');
            div.dataset.id = item.id;

            img.setAttribute('class', 'ico-bag-img');
            img.setAttribute('src', item.imageURL);

            div.append(img);
            this.bagOutputNode.append(div);
    }

    renderBagOverview = (items) => {

        if (!items || items.length === 0) {
            this.bagOverviewOutputNode.innerHTML = `<p class='empty-bag-text'>Корзина пустая</p>`;
            return;
        } else {
            if (!this.bagOverviewOutputNode) {
                return;
            } else {
                this.bagOverviewOutputNode.innerHTML = '';
                items.forEach(item => {
                    this.renderBagOverviewCard(item);
                });
            }
        }
    }

    renderBagOverviewCard = (item) => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const divBagInfo = document.createElement('div');
        const title = document.createElement('h3');
        const series = document.createElement('p');
        const description = document.createElement('p');
        const price = document.createElement('p');
        const quantity = document.createElement('p');
        const deliteBtn = document.createElement('btn');

        div.setAttribute('class', 'overview-card');

        img.setAttribute('class', 'bag-card-img');
        img.setAttribute('src', item.imageURL);

        divBagInfo.setAttribute('class', 'bag-card-info');
        
        title.setAttribute('class', 'bag-card-title');
        title.innerText = item.model;

        series.setAttribute('class', 'bag-card-series');
        series.innerText = item.series;

        description.setAttribute('class', 'bag-card-description');
        description.innerText = item.description;

        price.setAttribute('class', 'bag-card-price');
        price.innerText = item.price*item.quantity;

        quantity.setAttribute('class', 'bag-card-quantity');
        quantity.innerText = item.quantity;

        deliteBtn.innerText = 'Удалить';
        deliteBtn.onclick = () => {
            this.deliteThisItem(item);
        }

        divBagInfo.append(title, series, description, price, quantity, deliteBtn);
        div.append(img, divBagInfo);

        this.bagOverviewOutputNode.append(div);
    }

    renderBagSum = (sum) => {

        if(!this.bagSumOutputNode) {
            return;
        } else {
            this.bagSumOutputNode.innerHTML = `
                <p class='bag-sum'>Сумма: ${sum} Руб.</p>
            ` ;
        }
        
    }
}