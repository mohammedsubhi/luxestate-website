let menuBar = document.querySelector('#menuBar');
let navBar = document.querySelector('nav');

console.log(navBar)



menuBar.onclick = function(){
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}

window.onscroll = ()=> {
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');
}

let newYear = document.querySelector('.newYear');

let currentYearEl = document.querySelector('.currentYear');
var currentDate = new Date();
currentYearEl.innerText = currentDate.getFullYear();