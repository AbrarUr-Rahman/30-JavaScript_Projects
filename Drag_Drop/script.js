let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    //!DragStart Event
    let selected = e.target;

    rightBox.addEventListener("dragover", function (e) {
      //!DragOver Event
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      //!Drop Event
      rightBox.appendChild(selected);
      if (selected !== null) {
        rightBox.appendChild(selected);
      }
      selected = null;
    });
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected);
      if (selected !== null) {
        leftBox.appendChild(selected);
      }
      selected = null;
    });
  });
}
