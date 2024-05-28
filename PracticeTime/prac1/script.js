const button = document.getElementById("button");
const button2 = document.getElementById("button2");

const add = button.addEventListener("click", () => {
  const clicked = document.createElement("h1");
  clicked.style.color = "white";
  clicked.style.padding = "5 px";
  clicked.textContent = "You clicked me";
  button.appendChild(clicked);
});

const remove = button2.addEventListener("click", (event) => {
  //   console.log(event);
  const container = document.querySelector(".container");

  const paragraph = document.querySelector("h1");
  //   const parent = this.parent;
  console.log(parent);
  if (paragraph) {
    container.remove(paragraph);
  } else {
    console.log("No paragraph element found to remove.");
  }
  console.log(paragraph);
});
