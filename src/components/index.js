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
  popupCloseButton,
  config,
  cardNameInput,
  cardLinkInput,
} from './utils.js';

import{
  cleanPopupSpanErrors,
  enableValidation,
  toggleButtonState
  //
} from './validate.js';

import{
  addCardFormHandler,
  openCardPopup,
  addCardPrepend,
} from './card.js';

import{
  closePopup,
  openPopup,
  clickClosePopup,
  closePopupByCross
} from './modal.js';
// Вынес присваивание для инпутов, чтобы проходила валидация

// Функции открытия/закрытия попапа профиля
export function setInputValue(){
  jobInput.value = profileJob.textContent;
  nameInput.value = profileName.textContent;
  cardNameInput.value = "";
  cardLinkInput.value = "";
}

function openProfileEditPopup() {
  setInputValue()
  toggleButtonState([nameInput, jobInput], profileEditSubmitButton);
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
setInputValue()
initialCards.forEach(addCardPrepend);
enableValidation(config);

// Слушатели
popups.forEach(popup =>
  popup.addEventListener("mousedown", clickClosePopup));
profileOpenButton.addEventListener('click', openProfileEditPopup);
cardAddButton.addEventListener('click', openCardPopup);
profileFormElement.addEventListener('submit', submitProfileInfo);
cardForm.addEventListener('submit', addCardFormHandler);
popupCloseButton.forEach(button => {
  button.addEventListener('click', closePopupByCross)
});


