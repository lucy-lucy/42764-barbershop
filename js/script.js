var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");

if(popup) {
  var close = popup.querySelector(".modal-content-close");
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=login]");
  var password = popup.querySelector("[name=password]");
}

var storage = localStorage.getItem("login");

if(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    if (storage) {
      login.value = storage;
      password.focus();
    }
    else {
      login.focus();
    }
  });
}

if(close) {
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
  });
}

if(form) {
  form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth;
      popup.classList.add("modal-error");
    }
    else {
      localStorage.setItem("login", login.value);
    }
  });
}

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");

if (mapPopup) {
  var mapClose = mapPopup.querySelector(".modal-content-close");
}

if(mapOpen) {
  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
  });
}

if(mapClose) {
  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
  });
}

function initMap() {
  var barbershop = {lat: 59.938789, lng: 30.323062};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: barbershop,
    scrollwheel: false,
    zoom: 16,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: barbershop,
    map: map
  });
}
