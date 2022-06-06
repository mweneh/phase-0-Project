const h2 = document.createElement("h3");
h3.textContent = "Hello and welcome";
document.querySelector("body").appendChild(h3);
const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);