import '../pages/index.css';

import { getUserData, editUserImage, editUserInfo, getInitialCards, addCard, deleteCardData } from './api';

import{
  jobInput,
  nameInput,
  profileName,
  profileJob,
  profileFormElement,
  profilePopup,
  profileEditSubmitButton,
  profileOpenButton,
  cardAddButton,
  popups,
  cardForm,
  config,
  avatarEditForm,
  avatarEditContainer,
  avatarImage,
  avatarEditInput,
  avatarEditPopup,
  avatarBtnSubmit,
  renderLoading,
  cardList,
  cardLinkInput,
  cardNameInput,
  cardAddSubmitButton,
  cardAddPopup,
  placeImage,
  placeText,
  imagePopup
} from './utils.js';

import{
  enableValidation,
  toggleButtonState,
  cleanPopupSpanErrors
  //
} from './validate.js';

import{
  createCard
} from './card.js';

import{
  closePopup,
  openPopup,
} from './modal.js';

Promise.all([getUserData(), getInitialCards()])
  .then(([user, cards]) => {
    profileName.textContent = user.name;
    profileJob.textContent = user.about;
    avatarImage.src = user.avatar;
    avatarImage.alt = user.name;
    const userInfo = user._id;
    cards.forEach((card) => {
      cardList.append(createCard(card, userInfo))
    }) //берем массив карточек из сервера и вставляем в нашу разметку
  })
  .catch((err) => {
    console.log(err) //обработка ошибки
  })

// Profile
export function getProfileServerInfo() {
  getUserData()
    .then(data => {
      profileName.textContent = data.name;
      profileJob.textContent = data.about;
      avatarImage.src = data.avatar;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function changeUserInfoHandler(evt) {
  evt.preventDefault();
  renderLoading(true, profileEditSubmitButton, 'Сохранить');
  editUserInfo(nameInput.value, jobInput.value)
  .then((data) => {
    profileName.textContent = data.name;
    profileJob.textContent = data.about
    closePopup(profilePopup);
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    renderLoading(false, profileEditSubmitButton, 'Сохранить');
  })
}

export function changeUserPhotoHandler(evt) {
  evt.preventDefault();
  renderLoading(true, avatarBtnSubmit, 'Сохранить');
  const link = avatarEditInput.value;
  editUserImage(link)
  .then((data) => {
    avatarImage.src = data.avatar;
    closePopup(avatarEditPopup);
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
  renderLoading(false, avatarBtnSubmit, 'Сохранить');
  })
}

// Карточки
export function openCardPopup(){
  cardNameInput.value = '';
  cardLinkInput.value = '';
  cleanPopupSpanErrors(cardAddPopup, [cardNameInput, cardLinkInput], cardAddSubmitButton, config);
  openPopup(cardAddPopup);
}

export function addCardHandler (evt) {
  evt.preventDefault();
  renderLoading(true, cardAddSubmitButton, 'Создать');
  addCard(cardNameInput.value, cardLinkInput.value)
    .then((card) => {
      cardNameInput.value = card.name;
      cardLinkInput.value = card.link
      cardList.prepend(createCard(card, card.owner._id));
      evt.target.reset();
      closePopup(cardAddPopup);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      renderLoading(false, cardAddSubmitButton, 'Создать');
    })
}

export function deleteCardUser(evt) {
  const target = evt.target;
  const card = target.closest('.element');
  deleteCardData(card.dataset.cardId)
    .then(() => {
      card.remove();
    })
    .catch((err) => {
    console.log(err);
    });
}

export function openImagePopup(card) {
  placeImage.src = card.src;
  placeImage.alt = card.alt;
  placeText.textContent = card.alt;
  openPopup(imagePopup);
};

// вызов функций
enableValidation(config);

// Слушатели
popups.forEach(popup =>
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
  }
  if (evt.target.classList.contains('popup__close-button')) {
    closePopup(popup)
  }
  }));

profileFormElement.addEventListener('submit', changeUserInfoHandler);
avatarEditForm.addEventListener('submit', changeUserPhotoHandler);
cardForm.addEventListener('submit', addCardHandler);
cardAddButton.addEventListener('click', openCardPopup);

avatarEditContainer.addEventListener('click', () => {
  avatarEditInput.value = '';
  openPopup(avatarEditPopup);
  toggleButtonState([avatarEditInput], avatarBtnSubmit, config)
});

profileOpenButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(profilePopup);
  toggleButtonState([nameInput, jobInput], profileEditSubmitButton, config)
});
