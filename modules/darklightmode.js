

/****************************************
 Dark/Light mode
*****************************************/

export function toggleDarkLightMode() {
  if (this.checked) {
    bodyEl.classList.add("lightmode");
  } else {
    bodyEl.classList.remove("lightmode");
  }
};

