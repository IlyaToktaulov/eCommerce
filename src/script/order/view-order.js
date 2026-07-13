export class View_Order {
    constructor() {
        this.nameNode = document.querySelector('.js-name');
        this.streetNode = document.querySelector('.js-street');
        this.cityNode = document.querySelector('.js-city');
        this.phoneNode = document.querySelector('.js-phone-number');
        this.addressBtnNode = document.querySelector('.js-order-address-btn');
        this.addressPopupNode = document.querySelector('.js-popup-output');
    }

    customizeAddress = () => {
        this.addressBtnNode.onclick = () => {
            this.renderPopupAddress();
            this.addressPopupNode.classList.toggle('popup-open');
        }
    }

    renderPopupAddress = () => {
        const div = document.createElement('div');
        const nameTitle = document.createElement('p');
        const nameInput = document.createElement('input');
        const streetTitle = document.createElement('p');
        const streetInput = document.createElement('input');
        const cityTitle = document.createElement('p');
        const cityInput = document.createElement('input');
        const numberTitle = document.createElement('p');
        const numberInput = document.createElement('input');
        const closeBtn = document.createElement('p');

        nameTitle.setAttribute('class', 'popup-address-title');
        nameTitle.innerText = 'Имя';
        nameInput.setAttribute('class', 'popup-address-input');
        nameInput.setAttribute('placeholder', 'Введите имя');

        streetTitle.setAttribute('class', 'popup-address-title');
        streetTitle.innerText = 'Улица';
        streetInput.setAttribute('class', 'popup-address-input');
        streetInput.setAttribute('placeholder', 'Введите Улицу');

        cityTitle.setAttribute('class', 'popup-address-title');
        cityTitle.innerText = 'Город';
        cityInput.setAttribute('class', 'popup-address-input');
        cityInput.setAttribute('placeholder', 'Введите Город');

        numberTitle.setAttribute('class', 'popup-address-title');
        numberTitle.innerText = 'Номер телефона';
        numberInput.setAttribute('class', 'popup-address-input');
        numberInput.setAttribute('placeholder', 'Введите Номер Телефона');

        closeBtn.setAttribute('class', 'close-btn-item-card');
        closeBtn.innerText = '⬅ Назад';
        closeBtn.onclick  = () => {
            this.addressPopupNode.classList.toggle('popup-open');
            div.remove();
        }

        div.setAttribute('class', 'popup-address-content');

        div.append(nameTitle, nameInput, streetTitle, streetInput, cityTitle, cityInput, numberTitle, numberInput, closeBtn);
        this.addressPopupNode.append(div);
    }
}