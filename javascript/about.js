// Scroll Snap
let ScrollSnapButton = document.querySelector("#scrollsnap-button");

window.addEventListener("scroll", () => {
  let scrollPos = window.pageYOffset;

  if (scrollPos > 300) {
    ScrollSnapButton.style.opacity = 1;
  } else {
    ScrollSnapButton.style.opacity = 0;
  }
});

// Navigation Drawer
let drawerButton = document.querySelector("#directory__btn--mobile-version");
let devicePanel = document.querySelector("#directory__directorylist--mobile-version");
let rollButton = document.querySelector("#directory__directorylist--mobile-version");
let buttonSwitch = false;

drawerButton.addEventListener("click", () => {
  if (buttonSwitch === false) {
    devicePanel.style.display = "flex";
    drawerButton.classList.replace("bi-list", "bi-x");
    drawerButton.style.position = "fixed";
    buttonSwitch = true;
  } else {
    devicePanel.style.display = "none";
    drawerButton.classList.replace("bi-x", "bi-list");
    drawerButton.style.position = "static";
    buttonSwitch = false;
  }
});

rollButton.addEventListener("click", () => {
  devicePanel.style.display = "none";
  drawerButton.classList.replace("bi-x", "bi-list");
  drawerButton.style.position = "static";
  buttonSwitch = false;
});
