// Проверка валидации
function isValid(form, input, config) {
  if (input.validity.patternMismatch) {
    input.setCustomValidity(input.dataset.errorMessage);
  }
  else {
    input.setCustomValidity("");
  }
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, config);
  }
  else {
    hideInputError(form, input, config);
  }
};

// Показать текст ошибки инпута
function showInputError(form, input, errorMessage, config) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  errorElement.textContent = errorMessage;
  input.classList.add(config.popupInputError);
}

// Скрыть текст ошибки инпута
function hideInputError(form, input, config) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.remove(config.popupInputError);
  errorElement.textContent = "";
}

// Удаление текста ошибки в span
export function cleanPopupSpanErrors(popup, inputs, button, config) {
  inputs.forEach(input => hideInputError(popup, input, config));
  toggleButtonState(inputs, button);
}

// Проверка инпута на валидность
function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

function setEventListeners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.popupInput));
  const buttonSubmit = form.querySelector(config.popupButtonSubmit);
  inputList.forEach(input => {
    input.addEventListener('input', function () {
      toggleButtonState(inputList, buttonSubmit);
      isValid(form, input, config);
    });
  });
};

export function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add('popup__submit-button_inactive');
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__submit-button_inactive');
  }
}

export function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.popupForm));
  formList.forEach((form) => {
    setEventListeners(form, config)
  });
}