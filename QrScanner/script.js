const api = "http://api.qrserver.com/v1/create-qr-code/?data=";
const input = document.getElementById("input");
const container = document.querySelector(".container");
const imgBox = document.querySelector(".imgBox");
const warning = document.getElementById("warning");
const image = document.getElementById("image");

const QrGenerator = () => {
  if (input.value === "") {
    warning.style.display = "block";
    imgBox.style.display = "none";
  } else {
    warning.style.display = "none";
    imgBox.style.display = "block";
    image.src = api + input.value + "&amp;size=100x100";
  }
};
