let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");

selectField.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate"); //!Toggle Property
};

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.innerText;
    list.classList.toggle("hide"); //!Toggle Property
    arrowIcon.classList.toggle("rotate");
  };
}
