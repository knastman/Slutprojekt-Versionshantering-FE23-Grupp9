

/****************************************
 Dark/Light mode
*****************************************/

export function toggleDarkLightMode() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    bodyEl.classList.add("lightmode");
  } else {
    console.log("Checkbox is not checked..");
    bodyEl.classList.remove("lightmode");
  }
};

