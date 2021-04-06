
console.log("hello");


var portfolioBtn = document.getElementById("portfolio-button");
var aboutBtn = document.getElementById("about-button");
var contactBtn = document.getElementById("contact-button");
var contactMeCard = document.querySelector(".hide");


// Click function to display portfolio items
portfolioBtn.addEventListener("click", function() {
    console.log("what up portfolio");
    // Changes background color at 500ms transition duration
    document.getElementById("body").style.backgroundColor = "#00BDA9";
    document.getElementById("container").style.backgroundColor = "#00BDA9";
    document.getElementById("body").style.transitionDuration = "500ms";
    document.getElementById("container").style.transitionDuration = "500ms";
    // Hides About and Contact
    contactMeCard.classList.add("hide");
    document.getElementById("contact-me").innerHTML = "";
    document.getElementById("about-me").innerHTML = "";
    var portfolioText = document.getElementById("portfolio-text");

    var portfolio1 = document.getElementById("portfolio1");
    // portfolio1.innerHTML = "Password Generator";
    var portImg1 = document.createElement("img");
    portImg1.src = "./assets/images/PasswordGenerator.png";
    document.getElementById("portfolio-text").appendChild(portImg1);
    portImg1.setAttribute("href","https://lmp-beep.github.io/03-PasswordGenerator/");
    portImg1.setAttribute("target", "_blank");
    portfolioText.append(portImg1);

    var portfolio2 = document.getElementById("portfolio2");
    // portfolio2.innerHTML = "Code Quiz";
    var portImg2 = document.createElement("img");
    portImg2.src = "./assets/images/CodeQuiz.png";
    document.getElementById("portfolio-text").appendChild(portImg2);
    portfolio2.setAttribute("href","https://lmp-beep.github.io/04-CodeQuiz/");
    portfolio2.setAttribute("target", "_blank");
    portfolioText.append(portfolio2);

    var portfolio3 = document.getElementById("portfolio3");
    // portfolio3.innerHTML = "Day Planner";
    var portImg3 = document.createElement("img");
    portImg3.src = "./assets/images/DayPlanner.png";
    document.getElementById("portfolio-text").appendChild(portImg3);
    portfolio3.setAttribute("href","https://lmp-beep.github.io/05-DayPlanner/");
    portfolio3.setAttribute("target", "_blank");
    portfolioText.append(portfolio3);

    var portfolio4 = document.getElementById("portfolio4");
    // portfolio4.innerHTML = "Weather Dashboard";
    var portImg4 = document.createElement("img");
    portImg4.src = "./assets/images/WeatherDashboard.png";
    document.getElementById("portfolio-text").appendChild(portImg4);
    portfolio4.setAttribute("href","https://lmp-beep.github.io/06-WeatherDashboard/");
    portfolio4.setAttribute("target", "_blank");
    portfolioText.append(portfolio4);

    var portfolio5 = document.getElementById("portfolio5");
    // portfolio5.innerHTML = "News Flash";
    var portImg5 = document.createElement("img");
    portImg5.src = "./assets/images/NewsFlash.png";
    document.getElementById("portfolio-text").appendChild(portImg5);
    portfolio5.setAttribute("href","https://xr7tsi.github.io/News-Flash/");
    portfolio5.setAttribute("target", "_blank");
    portfolioText.append(portfolio5);

    var portfolio6 = document.getElementById("portfolio6");
    // portfolio5.innerHTML = "News Flash";
    var portImg6 = document.createElement("img");
    portImg6.src = "./assets/images/Placeholder.png";
    document.getElementById("portfolio-text").appendChild(portImg6);
    portfolio6.setAttribute("href","");
    portfolio6.setAttribute("target", "_blank");
    portfolioText.append(portfolio6);
  })
  

  // Click function to display About Me info
  aboutBtn.addEventListener("click", function() {
    console.log("what up about me");
    var aboutMe = document.getElementById("about-me");
    aboutMe.innerHTML = "About Me";
    // Changes background color at 500ms transition duration
    document.getElementById("body").style.backgroundColor = "#F19571";
    document.getElementById("container").style.backgroundColor = "#F19571";
    document.getElementById("body").style.transitionDuration = "500ms";
    document.getElementById("container").style.transitionDuration = "500ms";
    // Hides Portfolio and Contact
    contactMeCard.classList.add("hide");
    document.getElementById("portfolio1").innerHTML = "";
    document.getElementById("portfolio2").innerHTML = "";
    document.getElementById("portfolio3").innerHTML = "";
    document.getElementById("portfolio4").innerHTML = "";
    document.getElementById("portfolio5").innerHTML = "";
    document.getElementById("contact-me").innerHTML = "";
  })


  // Click function to display Contact Me form
  contactBtn.addEventListener("click", function() {
    console.log("what up contact me");
    var contactMe = document.getElementById("contact-me");
    var contactMeCard = document.querySelector(".hide");
    contactMeCard.classList.remove("hide");
    // Changes background color at 500ms transition duration
    document.getElementById("body").style.backgroundColor = "#2A5799";
    document.getElementById("container").style.backgroundColor = "#2A5799";
    document.getElementById("body").style.transitionDuration = "500ms";
    document.getElementById("container").style.transitionDuration = "500ms";
    // Hides Portfolio and About
    document.getElementById("portfolio1").innerHTML = "";
    document.getElementById("portfolio2").innerHTML = "";
    document.getElementById("portfolio3").innerHTML = "";
    document.getElementById("portfolio4").innerHTML = "";
    document.getElementById("portfolio5").innerHTML = "";
    document.getElementById("about-me").innerHTML = "";
  })