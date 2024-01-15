function showAlert(message) {
  alert(message);
}
function isInputEmpty(email, password) {
  return email === "" || password === "";
}
function cleanFormFields(emailElement, passwordElement) {
  emailElement.value = "";
  passwordElement.value = "";
}

export { showAlert, isInputEmpty, cleanFormFields };
