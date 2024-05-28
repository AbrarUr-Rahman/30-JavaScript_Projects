const button = document.getElementById("button");

button.addEventListener("click", (event) => {
  button.style.backgroundColor = "orange";
  button.innerText = "Ouch!😢";
  event.preventDefault();
});

button.addEventListener("mouseover", (event) => {
  button.style.backgroundColor = "red";
  button.innerText = "Do It 😆";
});

button.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  button.innerHTML = "Click Me! 😊";
});
