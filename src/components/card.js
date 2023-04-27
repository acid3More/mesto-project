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
  cleanPopupSpanErrors,
} from "./validate.js";

export function handleCardFormSubmit(event){
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
  cardNameInput.value = '';
  cardLinkInput.value = '';
  cleanPopupSpanErrors(cardAddPopup, [cardNameInput, cardLinkInput], cardAddSubmitButton, config);
  openPopup(cardAddPopup);
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
  const cardImage = cardItem.querySelector('.element__image');
  const cardName = cardItem.querySelector('.element__name');
  cardImage.src = link;
  cardName.textContent = name;
  cardImage.alt = name;
  cardImage.addEventListener('click', () => {
    placeImage.src = cardImage.src;
    placeImage.alt = cardImage.alt;
    placeText.textContent = cardImage.alt;
    openPopup(imagePopup);
});
  const cardLikeButton = cardItem.querySelector('.element__button').addEventListener('click', clickLike);
  const buttonCardRemove = cardItem.querySelector('.element__remove-btn').addEventListener('click', removeCard);
  return cardItem;
};