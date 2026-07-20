export class View_Order {
    constructor() {
        this.nameNode = document.querySelector('.js-name');
        this.streetNode = document.querySelector('.js-street');
        this.cityNode = document.querySelector('.js-city');
        this.phoneNode = document.querySelector('.js-phone-number');
        this.addressBtnNode = document.querySelector('.js-order-address-btn');
        this.addressPopupNode = document.querySelector('.js-popup-output');
        this.paySelectBtnNode = document.querySelector('.js-pay-btn');
        this.paySelectNode = document.querySelector('.js-pay-select');
    }

    customizeAddress = () => {
        if (!this.addressBtnNode) {
            return;
        } 

        this.addressBtnNode.onclick = () => {
            this.renderPopupAddress();
            this.addressPopupNode.classList.toggle('popup-open');
        }
    }

    customizePay = () => {
        if (!this.paySelectBtnNode) {
            return;
        }
        
        this.paySelectBtnNode.onclick = () => {
            this.renderPopupPaySelect();
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
        const saveBtn = document.createElement('p');

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

        saveBtn.setAttribute('class', 'popup-order-save');
        saveBtn.innerText = 'Сохранить';
        saveBtn.onclick  = () => {

            this.nameNode.innerText = nameInput.value;
            this.streetNode.innerText = `Ул.${streetInput.value}`;
            this.cityNode.innerText = cityInput.value;
            this.phoneNode.innerText = numberInput.value;

            this.addressPopupNode.classList.toggle('popup-open');
            div.remove();

            event.stopPropagation(); 
        }

        this.addressPopupNode.onclick = () => {
            this.addressPopupNode.classList.toggle('popup-open');
            div.remove();
        }

        div.setAttribute('class', 'popup-address-content');
        div.onclick = () => {
            event.stopPropagation(); 
        }

        div.append(nameTitle, nameInput, streetTitle, streetInput, cityTitle, cityInput, numberTitle, numberInput, saveBtn);
        this.addressPopupNode.append(div);
    }

    renderPopupPaySelect = () => {
        const div = document.createElement('div');
        const creditCard = document.createElement('p');
        const cash = document.createElement('p');

        div.setAttribute('class', 'popup-address-content');

        creditCard.setAttribute('class', 'pay-list');
        creditCard.innerText = '💳Оплата картой при получении';
        creditCard.onclick = () => {
            this.paySelectNode.innerHTML = creditCard.innerText;

            this.addressPopupNode.classList.toggle('popup-open');
            div.remove();
        }

        cash.setAttribute('class', 'pay-list');
        cash.innerText = '💸Оплата наличными при получении';
        cash.onclick = () => {
            this.paySelectNode.innerHTML = cash.innerText;

            this.addressPopupNode.classList.toggle('popup-open');
            div.remove();
        }

        this.addressPopupNode.onclick = () => {
            this.addressPopupNode.classList.toggle('popup-open');
            div.remove();
        }

        div.setAttribute('class', 'popup-address-content');
        div.onclick = () => {
            event.stopPropagation(); 
        }

        div.append(creditCard, cash);
        this.addressPopupNode.append(div);
    }
}