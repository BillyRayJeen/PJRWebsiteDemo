console.log("PJR Website loaded!");

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");

menuToggle.addEventListener("click", () => {

navigation.classList.toggle("active");

});


const navigationLinks = document.querySelectorAll(".main-navigation a");

navigationLinks.forEach(link => {

link.addEventListener("click", () => {

navigation.classList.remove("active");

});

});