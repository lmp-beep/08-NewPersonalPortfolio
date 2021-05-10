console.log("hello");

const portfolioBtn = document.getElementById("portfolio");
const aboutBtn = document.getElementById("about");
const contactBtn = document.getElementById("contact");
const portfolioSection = document.querySelector(".hide-portfolio");
const aboutMeSection = document.querySelector(".hide-about-me");
const contactMeCard = document.querySelector(".hide-contact-me-form");


window.addEventListener("load", function () {
  portfolioSection.classList.remove("hide-portfolio");
  aboutMeSection.classList.add("hide-about-me");
  contactMeCard.classList.add("hide-contact-me-form");
});


// Click function to display portfolio items
portfolioBtn.addEventListener("click", function () {
  console.log("what up portfolio");

  portfolioSection.classList.remove("hide-portfolio");
  aboutMeSection.classList.add("hide-about-me");
  contactMeCard.classList.add("hide-contact-me-form");
});

// Click function to display About Me info
aboutBtn.addEventListener("click", function () {
  console.log("what up about me");

  portfolioSection.classList.add("hide-portfolio");
  aboutMeSection.classList.remove("hide-about-me");
  contactMeCard.classList.add("hide-contact-me-form");
});

// Click function to display Contact Me form
contactBtn.addEventListener("click", function () {
  console.log("what up contact me");

  portfolioSection.classList.add("hide-portfolio");
  aboutMeSection.classList.add("hide-about-me");
  contactMeCard.classList.remove("hide-contact-me-form");
});
