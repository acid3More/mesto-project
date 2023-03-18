const profileFormElement = document.querySelector('.form-profile');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const profileCloseButton = document.querySelector('.form-profile__close-button');
const profileOpenButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

// add card
const cardForm = document.querySelector('.form-card');
const cardNameInput = document.querySelector('#card-name');
const cardLinkInput = document.querySelector('#card-link');
const cardCloseButton = document.querySelector('.form-card__close-button');
const cardAddButton = document.querySelector('.profile__add-button');
// add card

// popap image
const placeText = document.querySelector('.popup__title');
const placeImage = document.querySelector('.popup__image');
const placeCloseButton = document.querySelector('.popup__close-button');
// popap image

// popapi
const profilePopup = document.querySelector('#popup-profile');
const imagePopup = document.querySelector('#image-popup');
const cardAddPopup = document.querySelector('#popup-card');
// popapi

// Добавление карточки
const cardList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#template-card').content;

function openPopup(popup){
  popup.classList.add('popup_opened');
}

function closePopup(){
  document.querySelector('.popup_opened').classList.remove('popup_opened');
}

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
// Добавление карточки
initialCards.forEach(addCardPrepend);

// Слушатели
profileOpenButton.addEventListener('click', openProfileEditPopup);
cardAddButton.addEventListener('click', openCardPopup);
profileFormElement.addEventListener('submit', submitProfileInfo);
cardForm.addEventListener('submit', addCardFormHandler);
profileCloseButton.addEventListener('click', closePopup);
placeCloseButton.addEventListener('click', closePopup);
cardCloseButton.addEventListener('click', closePopup);
