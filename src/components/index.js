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
  config
} from './utils.js';

import{
  cleanPopupSpanErrors,
  enableValidation,
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
  closePopupEscape,
  clickClosePopup
} from './modal.js';
// Вынес присваивание для инпутов, чтобы проходила валидация

// Функции открытия/закрытия попапа профиля
export function setProfileInputValue(){
  jobInput.value = profileJob.textContent
  nameInput.value = profileName.textContent
}

function openProfileEditPopup() {
  cleanPopupSpanErrors(profilePopup, [nameInput, jobInput], profileEditSubmitButton, config);
  setProfileInputValue()
  openPopup(profilePopup);
}

// Сохранение имени профиля
function submitProfileInfo(event) {
    event.preventDefault();
    profileJob.textContent = jobInput.value
    profileName.textContent = nameInput.value
    closePopup()
}

// вызов функций
setProfileInputValue()
initialCards.forEach(addCardPrepend);
enableValidation(config);
closePopupEscape();

// Слушатели
popups.forEach(popup =>
  popup.addEventListener("mousedown", clickClosePopup));
profileOpenButton.addEventListener('click', openProfileEditPopup);
cardAddButton.addEventListener('click', openCardPopup);
profileFormElement.addEventListener('submit', submitProfileInfo);
cardForm.addEventListener('submit', addCardFormHandler);
popupCloseButton.forEach(button => {
  button.addEventListener('click', closePopup)
});


