import './styles/index.css';

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


// вызов функций
initialCards.forEach(addCardPrepend);

enableValidation(config);
closePopupEscape();
enableValidation(config)


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


