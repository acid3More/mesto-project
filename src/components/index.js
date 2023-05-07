import '../pages/index.css';

import { getUserData, editUserImage, editUserInfo } from './api';

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
  renderLoading
} from './utils.js';

import{
  enableValidation,
  toggleButtonState
  //
} from './validate.js';

import{
  openCardPopup,
  addCardHandler
} from './card.js';

import{
  closePopup,
  openPopup,
} from './modal.js';

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

export function changeUserInfoHandler(evt) {
  evt.preventDefault();
  renderLoading(true, profileEditSubmitButton, 'Сохранить');
  editUserInfo(nameInput.value, jobInput.value)
  .then(() => {
    getProfileServerInfo();
  });
  renderLoading(false, profileEditSubmitButton, 'Сохранить');
  closePopup(profilePopup);
}

export function changeUserPhotoHandler(evt) {
  evt.preventDefault();
  renderLoading(true, avatarBtnSubmit, 'Сохранить');
  const link = avatarEditInput.value;
  editUserImage(link)
  .then(() => {
    getProfileServerInfo();
  });
  renderLoading(false, avatarBtnSubmit, 'Сохранить');
  closePopup(avatarEditPopup);
}
// ПРОФИЛЬ

// вызов функций
getProfileServerInfo();
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
cardForm.addEventListener('submit', addCardHandler)
cardAddButton.addEventListener('click', openCardPopup)

