import '../pages/index.css';

import{
  initialCards,
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
} from './utils.js';

import{
  cleanPopupSpanErrors,
  enableValidation,
  toggleButtonState
  //
} from './validate.js';

import{
  handleCardFormSubmit,
  openCardPopup,
  addCardPrepend,
} from './card.js';

import{
  closePopup,
  openPopup,
} from './modal.js';
// Вынес присваивание для инпутов, чтобы проходила валидация
// Функции открытия/закрытия попапа профиля


function openProfileEditPopup() {
  jobInput.value = profileJob.textContent;
  nameInput.value = profileName.textContent;
  toggleButtonState([nameInput, jobInput], profileEditSubmitButton, config);
  cleanPopupSpanErrors(profilePopup, [nameInput, jobInput], profileEditSubmitButton, config);
  openPopup(profilePopup);
}

// Сохранение имени профиля
function submitProfileInfo(event) {
    event.preventDefault();
    profileJob.textContent = jobInput.value
    profileName.textContent = nameInput.value
    closePopup(profilePopup)
}

// вызов функций
initialCards.forEach(addCardPrepend);
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

profileOpenButton.addEventListener('click', openProfileEditPopup);
cardAddButton.addEventListener('click', openCardPopup);
profileFormElement.addEventListener('submit', submitProfileInfo);
cardForm.addEventListener('submit', handleCardFormSubmit);


