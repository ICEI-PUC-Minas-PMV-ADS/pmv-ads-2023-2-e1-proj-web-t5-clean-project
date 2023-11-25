function handleCheckboxClick(clickedCheckboxId, otherCheckboxId) {
 const clickedCheckbox = document.getElementById(clickedCheckboxId);
 const otherCheckbox = document.getElementById(otherCheckboxId);
fetch("../../json/usuarios.json")
  if (clickedCheckbox.checked) {
      otherCheckbox.checked = false;
  }
}

