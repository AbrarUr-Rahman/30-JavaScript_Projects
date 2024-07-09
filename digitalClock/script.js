let hours = document.getElementById("hrs");
let minutes = document.getElementById("mins");
let seconds = document.getElementById("sec");

// console.log(currentTime);

setInterval(() => {
  let currentTime = new Date(); //!New Date Object
  hours.innerHTML =
    currentTime.getHours() < 10
      ? `0${currentTime.getHours()}`
      : currentTime.getHours();

  minutes.innerHTML =
    currentTime.getMinutes() < 10
      ? `0${currentTime.getMinutes()}`
      : currentTime.getMinutes();

  seconds.innerHTML =
    currentTime.getSeconds() < 10
      ? `0${currentTime.getSeconds()}`
      : currentTime.getSeconds();
}, 500);
