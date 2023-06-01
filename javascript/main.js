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

// Box Evangelist
let arrContent = [];

function objBuilder(name, awards, text, img_src) {
  let newObj = new Object();
  arrContent.push(newObj);

  let i = arrContent.length - 1;

  arrContent[i].name = name;
  arrContent[i].awards = awards;
  arrContent[i].text = text;
  arrContent[i].img_src = img_src;
}

objBuilder(
  "Dante Gebel",
  "Preacher",
  "He is currently pastor the megachurch River Church, in California, he is the author of several books written in Spanish.",
  "./images/boxes/photo-dg.jpg"
);
objBuilder(
  "Juan Carlos Harrigan",
  "Evangelist",
  "He is a renowned Evangelist who has been impacting people´s lives through his ministry for many years. He was born in Honduras and grew up in a family that was passionate about serving God.",
  "./images/boxes/photo-jch.jpg"
);
objBuilder(
  "José Duarte",
  "Profet and Apostol",
  "He studies on biblical Hebrew, eschatology, hermeneutics and everything that involves the Bible. Army Ministry of Revival of the Kingdom of God - Lambare Paraguay",
  "./images/boxes/photo-jd.jpg"
);
objBuilder(
  "Lamartine Posella",
  "Preacher",
  "Lamartine Posella is pastor president of YAH Church in São Paulo and works as a preacher, theologian, musician, composer, writer and lecturer.",
  "./images/boxes/photo-lp.jpg"
);

// Box Evangelist
let evangelistBoxesVessel = document.querySelector("#evangelist-speakers__boxes");
let evangelistCoupledSpeakers = document.createElement("div");

function htmlBuilder() {
  for (let i = 0; i < arrContent.length; i++) {
    if (i % 2 === 0) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("m-tier", `evangelist-speakers__coupled-boxes${i}`);
      evangelistBoxesVessel.insertAdjacentElement("beforeend", newDiv);
      evangelistCoupledSpeakers = document.querySelector(
        `.evangelist-speakers__coupled-boxes${i}`
      );
    }

    evangelistCoupledSpeakers.insertAdjacentHTML(
      "beforeend",
      `
        <div class="m-pil" id="evangelist-speakers__boxes">
          <div class="evangelist-speakers__box">
            <img class="evangelist-speakers__box-portrait" src="${arrContent[i].img_src}">
            <div class="evangelist-speakers__box-texts m-pil">
              <h3 class="evangelist-speakers__box-title">${arrContent[i].name}</h3>
              <h4 class="evangelist-speakers__box-subtitle coral">${arrContent[i].awards}</h4>
              <hr class="stripe-light" />
              <p>${arrContent[i].text}</p>
            </div>
          </div>
        </div>
    `
    );
  }

  if (window.innerWidth < 1100) {
    document.querySelector(".evangelist-speakers__coupled-boxes0").style =
      "flex-direction: column";
    document.querySelector(".evangelist-speakers__coupled-boxes2").style =
      "flex-direction: column";
  }
}

htmlBuilder();

// Box Evangelist - More Button
let moreButton = document.querySelector("#evangelist-speakers__btn-more");
let buttonActivity = false;
let coupledboxes = document.querySelector(".evangelist-speakers__coupled-boxes2");

moreButton.addEventListener("click", () => {
  if (buttonActivity === false) {
    moreButton.innerHTML =
      'LESS <i class="bi bi-arrow-up-circle-fill coral" id="btn-more-arrowdcf-icon"></i>';
    coupledboxes.style.display = "grid";
    buttonActivity = true;
  } else {
    moreButton.innerHTML =
      'MORE <i class="bi bi-arrow-down-circle-fill coral" id="btn-more-arrowdcf-icon"></i>';
    coupledboxes.style.display = "none";
    buttonActivity = false;
  }
});

// Scroll Snap 
let ScrollSnapButton = document.querySelector("#scrollsnap-button");

window.addEventListener("scroll", () => {
  let scrollPos = window.pageYOffset;

  if (scrollPos > 500) {
    ScrollSnapButton.style.opacity = 1;
  } else {
    ScrollSnapButton.style.opacity = 0;
  }
});