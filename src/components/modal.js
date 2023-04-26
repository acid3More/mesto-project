import { setInputValue } from "./index.js";

export function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupEscape);
}

// Общее закрытие попапов
export function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupEscape);
  setInputValue()
}

export function closePopupByCross(){
  const openedPopup = document.querySelector('.popup_opened');
  closePopup(openedPopup)
}

// Закрытие попапов по клику
export function clickClosePopup(event){
  if(event.currentTarget === event.target){
    event.target.classList.remove("popup_opened")
  }
}

export function closePopupEscape(event){
  if(event.key === 'Escape'){
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}