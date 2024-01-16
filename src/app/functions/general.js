function showAlert(message) {
  alert(message);
}
function isInputEmpty(email, password) {
  return email === "" || password === "";
}

export { showAlert, isInputEmpty };
