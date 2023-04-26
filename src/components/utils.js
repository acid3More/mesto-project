export const popups =   document.querySelectorAll(".popup")
export const profileFormElement = document.querySelector('#form-profile');
export const nameInput = document.querySelector('#name-input');
export const jobInput = document.querySelector('#job-input');
export const profileOpenButton = document.querySelector('.profile__edit-button');
export const profileName = document.querySelector('.profile__title');
export const profileJob = document.querySelector('.profile__subtitle');
export const popupCloseButton = document.querySelectorAll('.popup__close-button');
// add card
export const cardForm = document.querySelector('#form-card');
export const cardNameInput = document.querySelector('#card-name-input');
export const cardLinkInput = document.querySelector('#card-link-input');
export const cardAddButton = document.querySelector('.profile__add-button');
export const cardAddSubmitButton = document.querySelector('#card-submit');
// add card

// popap image
export const placeText = document.querySelector('.popup__title');
export const placeImage = document.querySelector('.popup__image');
export const profileEditSubmitButton = document.querySelector('#profile-submit');
// popap image

// popapi
export const profilePopup = document.querySelector('#popup-profile');
export const imagePopup = document.querySelector('#image-popup');
export const cardAddPopup = document.querySelector('#popup-card');
// popapi

// Добавление карточки
export const cardList = document.querySelector('.elements__list');
export const cardTemplate = document.querySelector('#template-card').content;

// валидация настройки
export const config = {
  popupForm: ".popup__form",
  popupInput: ".popup__input",
  popupButtonSubmit: ".popup__submit-button",
  popupInactiveButton: ".popup__submit-button_inactive",
  popupError: ".popup__input-error",
  popupInputError: ".popup__input_type_error"
};

// массив карточек для вставки
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];