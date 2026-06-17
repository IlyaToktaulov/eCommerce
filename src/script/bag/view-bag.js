export class View_Bag {
    constructor () {
        this.bagOutputNode = document.querySelector('.js-bag-output');
    }

    getRenderIcon = (items) => { 
        items.forEach(item => {
            this.renderIcon(item);
        });
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
}