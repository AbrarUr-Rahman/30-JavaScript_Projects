/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 12/17/2020
 *
 */

// select elements & assign them to variables
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");

// functions
let createTask = function (task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  label.innerText = task;
  checkBox.type = "checkbox";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

let addTask = function (event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";
  // bind the new list item to the incomplete list
  bindInCompleteItems(listItem, completeTask);
};

let completeTask = function () {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  let checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();
  completeUl.appendChild(listItem);
  bindCompleteItems(listItem, deleteTask);
};

let deleteTask = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

let bindInCompleteItems = function (taskItem, checkboxClick) {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
};

let bindCompleteItems = function (taskItem, deleteButtonClick) {
  let deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deleteButtonClick;
};

for (let i = 0; i < todoUl.children.length; i++) {
  bindInCompleteItems(todoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener("submit", addTask);

//?---------------------------My Understanding------------------------

// console.dir(document)
// document.title='play with me'

// console.dir(document)

// const headerElement = document.getElementById("header");
//  headerElement.textContent="To-Do Apps"
//  headerElement.innerText="To-Do Apps2"
// console.log(headerElement.innerText);//shows what is displayed
// console.log(headerElement.textContent)//shows what is written in html file
// console.log(headerElement.innerHTML)

// headerElement.style.color = "red";
// headerElement.style.fontSize = "50px";
// const itemParent = document.getElementById("items");
// const items = itemParent.getElementsByClassName("item");

// for (let i = 0; i < items.length; i++) {
//   items[i].style.color = "red";
// }

// console.log(items);

//? ---------------Get Elment by TagName------------

// const tags = document.getElementsByTagName("li");

// console.log(tags);

//?Query Selector!!!!!!!!!!!!!!!

// const header = document.querySelector("#header");
// console.log(header);

// const lastItems = document.querySelectorAll(".item:last-child");

// for (let i = 0; i < lastItems.length; i++) {
//   lastItems[i].style.color = "red";
// }
//  for (let elemento of lastItems) {
//   elemento.style.color = "red";
//  }

// const nthItem = document.querySelectorAll(".item:nth-child(1)");
// for (let i of nthItem) {
//   i.style.color = "red";
// }

//?Parent-Child relationship

// const parent=document.querySelector('#todo-list box');
// const child=parent.

// const headerTag = document.getElementById("header");
// headerTag.innerText = "To do something";

// const toDo = document.getElementsByClassName("todo-list box");

// console.log(toDo.length);

// console.log(headerTag.innerText);
// console.log(headerTag.innerHTML);

// headerTag.style.color = "green";

//!Revision Time

// const parent = document.querySelector("#items");

// const child = parent.children;
// console.log(child[1]);

// const children = document.querySelector(".item");
// const parent = children.parentElement;

// console.log(parent);

// const grandParent = children.closest(".todo -list");//todo:Not working

// const chidrenTwo = children.nextElementSibling;
// const childrenOne = chidrenTwo.previousElementSibling;

// console.log(chidrenTwo);

// chidrenTwo.style.color = "red";

// childrenOne.style.color = "green";

// //?Dom manipulate

// //?Create Element

// const divElement = document.createElement("div");

// divElement.className = "red";

// divElement.setAttribute("id", "red");
// divElement.setAttribute("title", "redDiv");

// const container = document.querySelector(".todo-list");
// const h2Element = container.querySelector("h2");
// container.insertBefore(divElement, h2Element);

// container.appendChild(divElement); //!can only take html elements but it can return the elements too,can only take one element
// container.append(divElement); //!Can take text Elements/ nodes as well but it can return the elements(returns Undefined),Can take multiple elements

// container.append("Hello World");

// //?Event Listeners

// const headerElement = document.querySelector("#header");
// headerElement.addEventListener("click", (event) => {
//   console.log(event);
// });

//?To-do App time
