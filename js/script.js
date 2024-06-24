// const list = document.querySelector("button");
// const dropdown = document.querySelector("#drop");

// list.addEventListener("click", () => {
//   dropdown.classList.toggle("active");
// });

// const btn = document.querySelector("#btn");
// const popup = document.querySelector("#popup");

// btn.addEventListener("click", () => {
//   popup.classList.toggle("active");
// });

// const headerButton = document.getElementById("header__button");

// headerButton.addEventListener("click", function () {
//   this.classList.toggle("hamburger--open");
// });




const navItems = [...document.getElementsByClassName('nav__item')];

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(oldItem => oldItem.classList.remove('active'))

    item.classList.add('active')
  })
})