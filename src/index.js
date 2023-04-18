const popups =   document.querySelectorAll(".popup")
const profileFormElement = document.querySelector('#form-profile');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#job-input');
const profileOpenButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const popupCloseButton = document.querySelectorAll('.popup__close-button');

// add card
const cardForm = document.querySelector('#form-card');
const cardNameInput = document.querySelector('#card-name');
const cardLinkInput = document.querySelector('#card-link');
const cardAddButton = document.querySelector('.profile__add-button');
// add card

// popap image
const placeText = document.querySelector('.popup__title');
const placeImage = document.querySelector('.popup__image');
// popap image

// popapi
const profilePopup = document.querySelector('#popup-profile');
const imagePopup = document.querySelector('#image-popup');
const cardAddPopup = document.querySelector('#popup-card');
// popapi

// Добавление карточки
const cardList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#template-card').content;

// form
const popupForm = document.querySelector('.popup__form');
const popupInput = popupForm.querySelector('.popup__input');

function openPopup(popup){
  popup.classList.add('popup_opened');
}

function closePopup(){
  document.querySelector('.popup_opened').classList.remove('popup_opened');
}

function clickClosePopup(event){
  if(event.currentTarget === event.target){
    event.target.classList.remove("popup_opened")
  }
}

window.onkeydown = function( event ) {
  if ( event.key === "Escape") {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
  }
};



// Функции открытия/закрытия попапа профиля
function openProfileEditPopup() {
  jobInput.value = profileJob.textContent
  nameInput.value = profileName.textContent
  openPopup(profilePopup);
}

// Сохранение имени профиля
function submitProfileInfo(event) {
    event.preventDefault();
    profileJob.textContent = jobInput.value
    profileName.textContent = nameInput.value
    closePopup()
}

// Массив карт
const initialCards = [
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
// Массив карт


function addCardFormHandler(event){
  event.preventDefault();
  const item = { name: cardNameInput.value, link: cardLinkInput.value};
  addCardPrepend(item);
  closePopup();
};

function addCardPrepend({ name, link }){
  const cardItem = createCardItem(name, link);
  cardList.prepend(cardItem);
};

// open/close card popaps
function openCardPopup(){
  openPopup(cardAddPopup);
  cardNameInput.value = '';
  cardLinkInput.value = '';
}

function closeCardPopup(){
  cardAddPopup.classList.remove('popup_opened');
};

function closePicturePopup(){
  imagePopup.classList.remove('popup_opened');
}
//  open/close card popaps

function removeCard(event){
  const cardDelete = event.target.closest('.element');
  cardDelete.remove();
}

function clickLike(event){
  event.target.classList.toggle('element__button_active');
}

function createCardItem(name, link){
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


// валидация
function showInputError(formElement, inputElement, errorMessage){
  const errorElement  = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

function hideInputError(formElement, inputElement) {
  const errorElement  = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = "";
};

function isValid(formElement, inputElement) {
  if (!popupInput.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__submit-button');

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

function toggleButtonState(inputList, buttonElement){
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__submit-button_inactive');
    buttonElement.disabled = true;
  }
  if(!hasInvalidInput(inputList)) {
    buttonElement.classList.remove('popup__submit-button_inactive');
    buttonElement.disabled = false;
  }

};

function enableValidation(){
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

// валидация





// вызов функций
initialCards.forEach(addCardPrepend);
enableValidation()

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


