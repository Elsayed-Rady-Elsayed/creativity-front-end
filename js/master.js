let randomeBackGround = true;
let intervalElmanet;

let randValue = localStorage.getItem("rand-change");
if (randValue !== null) {
  if (randValue === "1") {
    randomeBackGround = true;
    randomeBackGroundFunction();
  } else if (randValue === "0") {
    randomeBackGround = false;
  }
}
if (localStorage.getItem("setting-color") !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("setting-color")
  );
  document.querySelectorAll(".color-list li").forEach((e) => {
    e.classList.remove("active");
    if (e.dataset.color === localStorage.getItem("setting-color")) {
      e.classList.add("active");
    }
  });
}
let bullets = document.querySelectorAll(".background-settings.bullets span");
let yesButton = document.querySelector(".background-settings.bullets .yes");
let noButton = document.querySelector(".background-settings.bullets .no");

let container = document.querySelector(".mover");
let bullets_check = window.localStorage.getItem("bullets");
if (bullets_check !== null) {
  if (bullets_check === "yes") {
    container.style.display = "block";
    yesButton.classList.add("active");
    noButton.classList.remove("active");
  } else {
    container.style.display = "none";
    yesButton.classList.remove("active");
    noButton.classList.add("active");
  }
} else {
  container.style.display = "block";
  window.localStorage.setItem("bullets", "yes");
  yesButton.classList.add("active");
  noButton.classList.remove("active");
}
//setting open
let settings_element = document.getElementById("settings");
document.getElementById("rotate-settings").onclick = () => {
  settings_element.classList.toggle("opend");
};
//color change
let getAllColors = document.querySelectorAll(".color-list li");
getAllColors.forEach((e) => {
  e.addEventListener("click", (evt) => {
    //event of click should be added to detect the click
    document.documentElement.style.setProperty(
      "--main-color",
      evt.target.dataset.color
    );
    localStorage.setItem("setting-color", evt.target.dataset.color);
    getAllColors.forEach((e) => {
      e.classList.remove("active");
    });
    evt.target.classList.add("active");
  });
});
// landing chnage screen
let landing_element = document.getElementById("landing");
let landingArray = [
  "landing1.jpg",
  "landing2.jpg",
  "landing3.jpg",
  "landing4.jpg",
];

//background image chage
let getButtons = document.querySelectorAll("#buttons-contianer span");

getButtons.forEach((e) => {
  e.addEventListener("click", (evt) => {
    getButtons.forEach((e) => {
      e.classList.remove("active");
    });
    evt.target.classList.add("active");
    if (evt.target.dataset.background === "yes") {
      randomeBackGround = true;
      randomeBackGroundFunction();
      localStorage.setItem("rand-change", 1);
    } else {
      randomeBackGround = false;
      clearInterval(intervalElmanet);
      localStorage.setItem("rand-change", 0);
    }
  });
});
function randomeBackGroundFunction() {
  if (randomeBackGround === true) {
    intervalElmanet = setInterval(() => {
      let randomeNumber = Math.floor(Math.random() * landingArray.length);
      landing_element.style.backgroundImage =
        'url("images/' + landingArray[randomeNumber] + '")';
    }, 10000);
  }
}

let skills = document.querySelector(".our-skills");
window.onscroll = function () {
  let skillOffsetTop = skills.offsetTop;
  let skillOuterHeight = skills.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;
  if (windowScrollTop > skillOffsetTop + skillOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(".content .skill div span");

    allSkills.forEach(function (e) {
      e.style.width = e.dataset.progress;
    });
  }
};

let ourGallary = document.querySelectorAll(".galary .image-box img");

ourGallary.forEach((e) => {
  e.addEventListener("click", (evt) => {
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    let popup = document.createElement("div");
    popup.className = "popup";
    let imageGallary = document.createElement("img");
    imageGallary.src = e.src;
    popup.appendChild(imageGallary);
    document.body.appendChild(popup);
    let headingElment = document.createElement("h3");
    let headingText = document.createTextNode(e.alt);
    headingElment.appendChild(headingText);
    popup.appendChild(headingElment);
    let pElment = document.createElement("p");
    let pText = document.createTextNode(
      "this is the best image you will see ever and you will like it alot so much llgsjksajgkjsakjg"
    );
    pElment.appendChild(pText);
    popup.appendChild(pElment);
    let closeButton = document.createElement("p");

    closeButton.className = "close-button";
    let closeContnet = document.createTextNode("X");
    closeButton.appendChild(closeContnet);
    popup.appendChild(closeButton);
  });
});
document.addEventListener("click", (evt) => {
  if (evt.target.className === "close-button") {
    document.querySelector(".overlay").remove();
    evt.target.parentNode.remove();
    // console.log(document.querySelector(".overlay"));
    document.querySelector(".overlay").style.display = "none";
    // document.querySelector(".overlay").style.display = "none";
  }
});
let allBullets = document.querySelectorAll(".mover .cir");
allBullets.forEach((e) => {
  e.addEventListener("click", (evt) => {
    document.querySelector(evt.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
let links = document.querySelectorAll("#landing  .nav a");
links.forEach((e) => {
  e.addEventListener("click", (evt) => {
    evt.preventDefault();
    document.querySelector(evt.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

bullets.forEach((e) => {
  e.addEventListener("click", (evt) => {
    if (evt.currentTarget.dataset.bullets === "yes") {
      container.style.display = "block";
      window.localStorage.setItem("bullets", "yes");
    } else {
      container.style.display = "none";
      window.localStorage.setItem("bullets", "no");
    }
    bullets.forEach((e) => {
      e.classList.remove("active");
    });
    evt.currentTarget.classList.add("active");
  });
});
document.querySelector(".settings .reset").onclick = function () {
  localStorage.clear();
  window.location.reload();
};
document.querySelector(".header .icons").onclick = () => {
  if (document.querySelector(".nav").className === "nav") {
    document.querySelector(".nav").classList.add("small");
  } else {
    document.querySelector(".nav").classList.remove("small");
  }
};
