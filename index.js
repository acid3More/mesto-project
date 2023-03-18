const formElement = document.querySelector('.form-profile');
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
const popupImageTitle = document.querySelector('.popup__title');
const popupImagePicture = document.querySelector('.popup__image')
const popupImageCloseButton = document.querySelector('.popup__close-button');
// popap image

// popapi
const popupProfile = document.querySelector('#popup-profile');
const imagePopup = document.querySelector('#image-popup');
const cardAddPopup = document.querySelector('#popup-card');
// popapi

// Добавление карточки
const cardList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#template-card').content;

// Функции открытия/закрытия попапа профиля
function openProfile() {
  popupProfile.classList.add('popup_opened');
  jobInput.value = profileJob.textContent
  nameInput.value = profileName.textContent
}
function closeProfile() {
  popupProfile.classList.remove('popup_opened');
}

// Сохранение имени профиля
function editProfileInfo(evt) {
    evt.preventDefault();
    profileJob.textContent = jobInput.value
    profileName.textContent = nameInput.value
    closeProfile()
}
formElement.addEventListener('submit', editProfileInfo);

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
  closeCardPopup();
};

function addCardPrepend({ name, link }){
  const card = createCardItem(name, link);
  cardList.prepend(card);
};

// open/close card popaps
function openPicturePopup(){
  imagePopup.classList.add('popup_opened');
}

function openCardPopup(){
  cardAddPopup.classList.add('popup_opened');
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
  const card = cardTemplate.cloneNode(true);
  const cardLink = card.querySelector('.element__image');
  const cardName = card.querySelector('.element__name');
  cardLink.src = link;
  cardName.textContent = name;
  cardLink.alt = name;
  cardLink.addEventListener('click', () => {
    popupImagePicture.src = cardLink.src;
    popupImagePicture.alt = cardLink.alt;
    popupImageTitle.textContent = cardLink.alt;
    openPicturePopup();
});
  const cardLikeButton = card.querySelector('.element__button').addEventListener('click', clickLike);
  const buttonCardRemove = card.querySelector('.element__remove-btn').addEventListener('click', removeCard);
  return card;
};

initialCards.forEach(addCardPrepend);
// Добавление карточки

profileOpenButton.addEventListener('click', openProfile);
profileCloseButton.addEventListener('click', closeProfile);
popupImageCloseButton.addEventListener('click', closePicturePopup);
cardAddButton.addEventListener('click', openCardPopup);
cardCloseButton.addEventListener('click', closeCardPopup);
cardForm.addEventListener('submit', addCardFormHandler);
