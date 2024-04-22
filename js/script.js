var elBurger = document.querySelector(".burger");
var elHeaderList = document.querySelector(".header-list");
var elClose = document.querySelector(".close-img")

elBurger.addEventListener('click', function() {elHeaderList.classList.add('header-show')} )

elClose.addEventListener('click', function () {elHeaderList.classList.remove('header-show')} )