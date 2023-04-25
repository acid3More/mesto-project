
// Проверка валидации
function isValid(form, input) {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage);
  } else {
    hideInputError(form, input);
  }
}

// Показать текст ошибки инпута
function showInputError(form, inputElement, errorMessage) {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  inputElement.classList.add('popup__input_type_error');
}

// Скрыть текст ошибки инпута
function hideInputError(form, inputElement) {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.textContent = "";
}

// Проверка валидации при заполнении инпута
function formHandler(form) {
  const inputList = Array.from(form.querySelectorAll(config.popupInput));
  inputList.forEach((input) => {
    const button = form.querySelector(config.popupButtonSubmit);
    input.addEventListener("input", () => {
      isValid(form, input);
      toggleButtonState(inputList, button);
    });
  });
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

//
function toggleButtonState(inputList, buttonElement) {
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
    formHandler(form);
  });
}