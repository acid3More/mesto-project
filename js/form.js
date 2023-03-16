const formElement = document.querySelector('.form-profile');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const popupProfile = document.querySelector('.popup');
const closeButtonProfile = document.querySelector('.form-profile__close-button');
const openButtonProfile = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');


function openProfile() {
  popupProfile.classList.add('popup_opened');
  jobInput.value = profileJob.textContent
  nameInput.value = profileName.textContent
}
function closeProfile() {
  popupProfile.classList.remove('popup_opened');
}

openButtonProfile.addEventListener('click', openProfile);
closeButtonProfile.addEventListener('click', closeProfile);

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileJob.textContent = jobInput.value
    profileName.textContent = nameInput.value
    formElement.addEventListener('submit', handleFormSubmit);
}
