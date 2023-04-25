// import './styles/index.css';

// export const popups =   document.querySelectorAll(".popup")
// export const profileFormElement = document.querySelector('#form-profile');
// export const nameInput = document.querySelector('#name-input');
// export const jobInput = document.querySelector('#job-input');
// export const profileOpenButton = document.querySelector('.profile__edit-button');
// export const profileName = document.querySelector('.profile__title');
// export const profileJob = document.querySelector('.profile__subtitle');
// export const popupCloseButton = document.querySelectorAll('.popup__close-button');

// // add card
// export const cardForm = document.querySelector('#form-card');
// export const cardNameInput = document.querySelector('#card-name-input');
// export const cardLinkInput = document.querySelector('#card-link-input');
// export const cardAddButton = document.querySelector('.profile__add-button');
// export const cardAddSubmitButton = document.querySelector('#card-submit');
// // add card

// // popap image
// export const placeText = document.querySelector('.popup__title');
// export const placeImage = document.querySelector('.popup__image');
// export const profileEditSubmitButton = document.querySelector('#profile-submit');
// // popap image

// // popapi
// export const profilePopup = document.querySelector('#popup-profile');
// export const imagePopup = document.querySelector('#image-popup');
// export const cardAddPopup = document.querySelector('#popup-card');
// // popapi

// // Добавление карточки
// export const cardList = document.querySelector('.elements__list');
// export const cardTemplate = document.querySelector('#template-card').content;

// // form

// // Настройки для валидации форм
// export const config = {
//   popupForm: ".popup__form",
//   popupInput: ".popup__input",
//   popupButtonSubmit: ".popup__submit-button",
//   popupError: ".popup__input-error",
// };

// Общее открытие попапов
// export function openPopup(popup){
//   popup.classList.add('popup_opened');
// }

// // Общее закрытие попапов
// export function closePopup(){
//   document.querySelector('.popup_opened').classList.remove('popup_opened');
// }

// // Закрытие попапов по клику
// export function clickClosePopup(event){
//   if(event.currentTarget === event.target){
//     event.target.classList.remove("popup_opened")
//   }
// }

// Закрытие попапов по нажатию ESC
// const closePopupEscape = window.onkeydown = function( event ) {
//   if ( event.key === "Escape") {
//     document.querySelector('.popup_opened').classList.remove('popup_opened');
//   }
// };

// Вынес присваивание для инпутов, чтобы проходила валидация
jobInput.value = profileJob.textContent
nameInput.value = profileName.textContent

// Функции открытия/закрытия попапа профиля
export function openProfileEditPopup() {
  cleanPopupSpanErrors(profilePopup, [nameInput, jobInput], profileEditSubmitButton, config);
  jobInput.value = profileJob.textContent
  nameInput.value = profileName.textContent
  openPopup(profilePopup);
}

// Сохранение имени профиля
export function submitProfileInfo(event) {
    event.preventDefault();
    profileJob.textContent = jobInput.value
    profileName.textContent = nameInput.value
    closePopup()
}

// Массив карт
// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];
// Массив карт

// Функция добавление карточки
// function addCardFormHandler(event){
//   event.preventDefault();
//   const item = { name: cardNameInput.value, link: cardLinkInput.value};
//   addCardPrepend(item);
//   closePopup();
// };

// // Функция добавление карточки в массив
// function addCardPrepend({ name, link }){
//   const cardItem = createCardItem(name, link);
//   cardList.prepend(cardItem);
// };

// // Открытие попапа карточки
// function openCardPopup(){
//   cleanPopupSpanErrors(cardAddPopup, [cardNameInput, cardLinkInput], cardAddSubmitButton, config);
//   openPopup(cardAddPopup);
//   cardNameInput.value = '';
//   cardLinkInput.value = '';
// }

// // Функция удаления карточки
// function removeCard(event){
//   const cardDelete = event.target.closest('.element');
//   cardDelete.remove();
// }

// // Функция лайка
// function clickLike(event){
//   event.target.classList.toggle('element__button_active');
// }

// // Функция создания карточки и открытия попапа с картинкой
// function createCardItem(name, link){
//   const cardItem = cardTemplate.cloneNode(true);
//   const cardLink = cardItem.querySelector('.element__image');
//   const cardName = cardItem.querySelector('.element__name');
//   cardLink.src = link;
//   cardName.textContent = name;
//   cardLink.alt = name;
//   cardLink.addEventListener('click', () => {
//     placeImage.src = cardLink.src;
//     placeImage.alt = cardLink.alt;
//     placeText.textContent = cardLink.alt;
//     openPopup(imagePopup);
// });
//   const cardLikeButton = cardItem.querySelector('.element__button').addEventListener('click', clickLike);
//   const buttonCardRemove = cardItem.querySelector('.element__remove-btn').addEventListener('click', removeCard);
//   return cardItem;
// };



// Проверка валидации
// export function isValid(form, input) {
//   if (!input.validity.valid) {
//     showInputError(form, input, input.validationMessage);
//   } else {
//     hideInputError(form, input);
//   }
// }

// // Показать текст ошибки инпута
// export function showInputError(form, inputElement, errorMessage) {
//   const errorElement = form.querySelector(`.${inputElement.id}-error`);
//   errorElement.textContent = errorMessage;
//   inputElement.classList.add('popup__input_type_error');
// }

// // Скрыть текст ошибки инпута
// export function hideInputError(form, inputElement) {
//   const errorElement = form.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove('popup__input_type_error');
//   errorElement.textContent = "";
// }

// // Проверка валидации при заполнении инпута
// export function formHandler(form) {
//   const inputList = Array.from(form.querySelectorAll(config.popupInput));
//   inputList.forEach((input) => {
//     const button = form.querySelector(config.popupButtonSubmit);
//     input.addEventListener("input", () => {
//       isValid(form, input);
//       toggleButtonState(inputList, button);
//     });
//   });
// }

// // Удаление текста ошибки в span
// export function cleanPopupSpanErrors(popup, inputs, button, config) {
//   inputs.forEach(input => hideInputError(popup, input, config));
//   toggleButtonState(inputs, button);
// }

// // Проверка инпута на валидность
// export function hasInvalidInput(inputList) {
//   return inputList.some((input) => {
//     return !input.validity.valid;
//   });
// }

// //
// export function toggleButtonState(inputList, buttonElement) {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.disabled = true;
//     buttonElement.classList.add('popup__submit-button_inactive');
//   } else {
//     buttonElement.disabled = false;
//     buttonElement.classList.remove('popup__submit-button_inactive');
//   }
// }

// export function enableValidation(config) {
//   const formList = Array.from(document.querySelectorAll(config.popupForm));
//   formList.forEach((form) => {
//     formHandler(form);
//   });
// }


// вызов функций
initialCards.forEach(addCardPrepend);
enableValidation(config);
closePopupEscape();

// Слушатели
popups.forEach(popup =>
  popup.addEventListener("click", clickClosePopup));
profileOpenButton.addEventListener('click', openProfileEditPopup);
cardAddButton.addEventListener('click', openCardPopup);
profileFormElement.addEventListener('submit', submitProfileInfo);
cardForm.addEventListener('submit', addCardFormHandler);
popupCloseButton.forEach(button => {
  button.addEventListener('click', closePopup)
});


