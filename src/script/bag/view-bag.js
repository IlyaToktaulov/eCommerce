export class View_Bag {
    constructor () {
        this.bagOutputNode = document.querySelector('.js-bag-output');
        this.bagOverviewOutputNode = document.querySelector('.js-bag-overview-output');
    }

    getRenderIcon = (items) => { 

        if (!items || items.length ===0) {
            return;
        } else {
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
            this.bagOverviewOutputNode.innerHTML = 'Корзина пуста';
            return;
        } else {
            if (!this.bagOverviewOutputNode) {
                return;
            } else {
                this.bagOverviewOutputNode.innerHTML = '';
    
                items.forEach(item => {
                    console.log(item);
                    
                    this.bagOverviewOutputNode.innerHTML += `
                        <div class='overview-card'>
                            <img class='bag-card-img' src=${item.imageURL}>
                            <div class='bag-card-info'>
                                <h3 class='bag-card-title'>${item.model}</h3>
                                <p class='bag-card-series'>${item.series}</p>
                                <p class='bag-card-description'>${item.description}</p>
                                <p class='bag-card-price'>${item.price} Руб x ${item.quantity}</p>
                                <p class='bag-card-quantity'>${item.quantity} шт</p>
                            </div>
                        </div>
                    `;
                });
            }
        }
    }
}