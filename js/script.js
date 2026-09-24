console.log("PJR Website loaded!");

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

const navigationLinks = document.querySelectorAll(".main-navigation a");

navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
    const jobForm = document.querySelector("#job-form");

jobForm.addEventListener("submit", (event) => {
    const phoneInput = document.querySelector("#phone");
    const phone = phoneInput.value.trim();

    // Remove spaces, brackets and hyphens
    const cleanedPhone = phone.replace(/[\s()-]/g, "");

    // Accept common UK phone formats
    const ukPhonePattern = /^(?:0\d{9,10}|\+44\d{9,10})$/;

    if (!ukPhonePattern.test(cleanedPhone)) {
        event.preventDefault();

        phoneInput.setCustomValidity(
            "Please enter a valid UK phone number."
        );

        phoneInput.reportValidity();

        return;
    }

    phoneInput.setCustomValidity("");
});