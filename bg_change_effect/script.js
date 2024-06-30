let imgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.getElementById("originalImg");

originalImg.style.width = imgBox.offsetWidth + "px";

let line = document.getElementById("line");

let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function (e) {
  let boxWidth = e.pageX - leftSpace + "px";
  imgWrap.style.width = boxWidth;
  line.style.width = boxWidth;
};
