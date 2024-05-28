const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.querySelector("#button");
const warning = document.getElementById("warning");

button.addEventListener("click", (e) => {
  if (inputBox.value === "") {
    //   alert("You must Write Something");
    warning.style.display = "block";
  } else {
    warning.style.display = "none";
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.innerHTML = inputBox.value;
    span.innerHTML = "\u00d7";
    listContainer.appendChild(li);
    li.appendChild(span);
    data();
  }
  inputBox.value = "";
  //   if (inputBox.value !== "") {
  //     let li = document.createElement("li");
  //     li.innerHTML = inputBox.value;
  //     listContainer.appendChild(li);
  //   }
});
listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      data();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      data();
    }
  },
  false
);
// function addTask() {
//   if (inputBox.value === "") {
//     alert("You must Write Something");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);
//   }
// }
const data = function () {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showTask();
