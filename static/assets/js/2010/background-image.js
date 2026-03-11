var body = document.body;
var logo = document.getElementById("logo");

var cbl = document.getElementById("cb-l");
var cbp = document.getElementById("cb-p");
var cbrs = document.getElementById("cb-rs");
var cbcb = document.getElementById("cb-cb");
var cbi = document.getElementById("cb-i");

var background = false;

function setBackgroundImage(url) {
  background = true;
  body.setAttribute("background-image", true);

  body.style.background = "url(" + url + ")";
  localStorage.setItem("background-image", url);
  logo.src = "/static/assets/images/2010/logo1t.png";
  cbl.innerHTML = "Remove background image";
  cbp.style.visibility = "hidden";
}

function removeBackgroundImage() {
  background = false;
  body.removeAttribute("background-image");

  body.style.backgroundImage = "";
  localStorage.removeItem("background-image");
  logo.src = "/static/assets/images/2010/logo1w.png";
  cbl.innerHTML = "Change background image";
  cbp.style.visibility = "hidden";
}

var backgroundImage = localStorage.getItem("background-image");

if (backgroundImage) {
  setBackgroundImage(backgroundImage);
}

function preventDefault(e) {
  var event = e || window.event;

  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}

cbl.onclick = function (e) {
  preventDefault(e);

  if (background) {
    removeBackgroundImage();
    return;
  }

  if (cbp.style.visibility == "hidden") {
    cbp.style.visibility = "visible";
  }
};

cbrs.onclick = function () {
  setBackgroundImage(cbi.value);
};

cbcb.onclick = function (e) {
  preventDefault(e);

  cbp.style.visibility = "hidden";
};
