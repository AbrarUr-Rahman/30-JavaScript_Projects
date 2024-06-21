let scrollContainer = document.querySelector(".gallery");

let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY; //# Delta Y
  scrollContainer.style.scrollBehavior = "auto"; //# Scroll Behavior Added
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth"; //# Scroll Behavior Added
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth"; //# Scroll Behavior Added

  scrollContainer.scrollLeft -= 900;
});
