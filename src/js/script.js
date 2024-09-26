import "./task1.js"
import "./task2.js"
const menuData = {
  title: "Eat it createElement, templates rule!",
  items: ["Handlebars", "LoDash", "Pug", "EJS", "lit-html"],
};

import menuTemplate from "../templates/menu.hbs";

const menuElement = document.querySelector(".menu");

const markup = menuTemplate(menuData);

menuElement.innerHTML = markup;


