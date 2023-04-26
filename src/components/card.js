import {
  openPopup,
  closePopup
} from "./modal.js";

import {
  cardTemplate,
  cardList,
  imagePopup,
  placeImage,
  placeText,
  cardNameInput,
  cardLinkInput,
  cardAddSubmitButton,
  config,
  cardAddPopup
} from "./utils.js";

import {
  cleanPopupSpanErrors
} from "./validate.js";

export function addCardFormHandler(event){
  event.preventDefault();
  const item = { name: cardNameInput.value, link: cardLinkInput.value};
  addCardPrepend(item);
  closePopup(cardAddPopup);
};

// Функция добавление карточки в массив
export function addCardPrepend({ name, link }){
  const cardItem = createCardItem(name, link);
  cardList.prepend(cardItem);
};

// Открытие попапа карточки
export function openCardPopup(){
  cleanPopupSpanErrors(cardAddPopup, [cardNameInput, cardLinkInput], cardAddSubmitButton, config);
  openPopup(cardAddPopup);
  cardNameInput.value = '';
  cardLinkInput.value = '';
}

// Функция удаления карточки
export function removeCard(event){
  const cardDelete = event.target.closest('.element');
  cardDelete.remove();
}

// Функция лайка
export function clickLike(event){
  event.target.classList.toggle('element__button_active');
}

// Функция создания карточки и открытия попапа с картинкой
export function createCardItem(name, link){
  const cardItem = cardTemplate.cloneNode(true);
  const cardLink = cardItem.querySelector('.element__image');
  const cardName = cardItem.querySelector('.element__name');
  cardLink.src = link;
  cardName.textContent = name;
  cardLink.alt = name;
  cardLink.addEventListener('click', () => {
    placeImage.src = cardLink.src;
    placeImage.alt = cardLink.alt;
    placeText.textContent = cardLink.alt;
    openPopup(imagePopup);
});
  const cardLikeButton = cardItem.querySelector('.element__button').addEventListener('click', clickLike);
  const buttonCardRemove = cardItem.querySelector('.element__remove-btn').addEventListener('click', removeCard);
  return cardItem;
};