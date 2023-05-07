export function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupEscape);
}

// Общее закрытие попапов
export function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupEscape);
}

export function hideOpenedPopup(){
  const openedPopup = document.querySelector('.popup_opened');
  closePopup(openedPopup)
}

// Закрытие попапов по клику
export function clickClosePopup(event){
  if(event.currentTarget === event.target){
    closePopup(event.target)
  }
}

export function closePopupEscape(event){
  if(event.key === 'Escape'){
    const openedPopup = document.querySelector('.popup_opened');
    hideOpenedPopup(openedPopup);
  }
}