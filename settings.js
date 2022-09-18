let colorWell;

function updateFirst(event) {
  const title = document.querySelector(".title");
  if (title) {
    title.style.backgroundColor = event.target.value;
  }
  store();
}

function updateAll(event) {
  document.querySelectorAll(".title").forEach((title) => {
    title.style.backgroundColor = event.target.value;
    console.log(title.style.backgroundColor);
  });
  store();
 }

function startup() {
  colorWell = document.querySelector("#colorwell");
  colorWell.value = window.localStorage.color;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  store();
  colorWell.select();
}

function store() {
  window.localStorage.color = colorWell.value;
}

function getValues() {
  var storedValues = window.localStorage.color;
  if(!storedValues) {
    document.querySelectorAll(".title").forEach((title) => {
      title.style.backgroundColor = "#D3D3D3";
    });
  }
  else {
    document.querySelectorAll(".title").forEach((title) => {
      title.style.backgroundColor = storedValues;
    });
  }
}

getValues();

startup();
