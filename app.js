// gotting all the elements 
const showCase = document.querySelector(".showing-section-Area");
let  showcaseImg = showCase.querySelectorAll("img");
showeheader = document.querySelector(".menu-btn");
let photoFrom = document.querySelector(".photoFrom");

window.onload = function () {
  
  setTimeout(() => {
  showCase.style.display = "flex";
  showeheader.click()
  
}, 9000);
};
