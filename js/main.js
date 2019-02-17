let elVal = document.getElementById("list");

document.onload = checkCookie();
elVal.addEventListener("change", selEl);
document.onload = today();

function selEl() {
  let elVal = document.getElementById("list").value;
  setColor(elVal);
  setCookie("elementValue", elVal, 5);
}

function setColor(elVal) {
  switch (elVal) {
    case "gray":
      document.body.style.backgroundColor = '#eee';
      break;
    case "yellow":
      document.body.style.backgroundColor = 'yellow';
      break;
    case "pink":
      document.body.style.backgroundColor = 'pink';
      break;
    case "blue":
      document.body.style.backgroundColor = 'blue';
      break;
    default:
      document.body.style.backgroundColor = 'white';
      break;
  }
}

function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let elVal = getCookie("elementValue");
  setColor(elVal);
}

function today() {
  let date = new Date(),
    elSpan = document.getElementById("today");

  const days = ["Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday", "Sunday"];

  elSpan.innerHTML = days[date.getDay() - 1];
};

let form = document.getElementById("form");

form.onsubmit = function () {
  alert("Hello!");
  return false;
};

document.body.addEventListener("mousemove", mouse, event);

function mouse(e) {
  let x = e.screenX;
  let y = e.screenY;
  let coor = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coor;
}

let clock = setInterval(function () {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let clockElement = document.getElementById("clock");
  if (hh <= 9) hh = "0" + hh;
  if (mm <= 9) mm = "0" + mm;
  if (ss <= 9) ss = "0" + ss;
  clockElement.innerHTML = hh + ":" + mm + ":" + ss;
}, 1000);

let stoptimeElement = document.getElementById("stoptime");
stoptimeElement.addEventListener("click", stoptime);

function stoptime () {
  clearInterval(clock);
}

function changeCheckbox(obj) {
  var checkbox = document.getElementsByClassName("checkbox");
  for (var i=0; checkbox.length > i; i++) {
    checkbox[i].checked = false;
  }
  obj.checked = true;
}