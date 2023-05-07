import { deleteCardUser, openImagePopup } from "./index.js";

import{
  likeCard,
  disLikeCard,
} from './api.js'

// Создаём карточку
export function createCard (item, userId) {
  const cardName = item.name;
  const cardLink = item.link;
  const cardId = item._id;
  const cardOwnerId = item.owner._id;
  const likes = item.likes
  const cardTemplate = document.querySelector('#template-card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const cardDeleteButton = cardElement.querySelector('.element__remove-btn');
  cardImage.src = cardLink;
  cardImage.alt = cardName;
  cardElement.dataset.cardId = cardId;
  cardElement.querySelector('.element__name').textContent = cardName;
  cardDeleteButton.addEventListener('click', deleteCardUser);
  cardImage.addEventListener('click', () => openImagePopup(cardImage));

  // Likes
  if(likes.length !== 0) {
    cardElement.querySelector('.element__likes-count').textContent = likes.length;
    const cardLiked = likes.find(like => like._id === userId ? true : false);
    if (cardLiked){
      cardElement.querySelector('.element__button').classList.toggle('element__button_active');
    };
  }
  cardElement.querySelector('.element__button').addEventListener('click', function(evt){
    const target = evt.target;
    if (!evt.target.classList.contains('element__button_active')) {
      likeCard(item._id)
        .then((card) => {
          target.classList.add('element__button_active');
          target.closest('.element').querySelector('.element__likes-count').textContent = card.likes.length;
        })
        .catch((err) => {
          console.log(err);
        })
      }
    else{
      disLikeCard(item._id)
        .then((card) => {
          target.classList.remove('element__button_active');
          target.closest('.element').querySelector('.element__likes-count').textContent = card.likes.length;
          if(card.likes.length <= 0){
            cardElement.querySelector('.element__likes-count').textContent = '';
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  })
  disableCardDelete(userId, cardOwnerId, cardDeleteButton);
  return cardElement;
}

function disableCardDelete(userId, ownerId, button) {
  if(userId != ownerId) {
    button.classList.add('element__remove-btn_inactive');
  }
}

