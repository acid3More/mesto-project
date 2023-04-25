export function openPopup(popup){
  popup.classList.add('popup_opened');
}

// Общее закрытие попапов
export function closePopup(){
  document.querySelector('.popup_opened').classList.remove('popup_opened');
}

// Закрытие попапов по клику
export function clickClosePopup(event){
  if(event.currentTarget === event.target){
    event.target.classList.remove("popup_opened")
  }
}

export const closePopupEscape = window.onkeydown = function( event ) {
  if ( event.key === "Escape") {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
  }
};