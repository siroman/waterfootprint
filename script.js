function showForm(formId) {
  document.getElementById(formId).style.display = 'block';
}
function hideForm(formId) {
  document.getElementById(formId).style.display = 'none';
}

function showMessage() {
  let doccia = document.getElementById('doccia').value;
  let famiglia = document.getElementById('famiglia').value;
  let docce = document.getElementById('docce').value;
console.log(docce);
  let risultato = doccia * famiglia * docce;
  alert('La tua impronta idrica è: ' + risultato);
}
function openPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == document.getElementById('popup')) {
    closePopup();
  }
};
