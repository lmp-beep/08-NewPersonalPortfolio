
console.log("hello");


var portfolioBtn = document.getElementById("portfolio-button");
var aboutBtn = document.getElementById("about-button");
var contactBtn = document.getElementById("contact-button");


// Click function to display portfolio items
portfolioBtn.addEventListener("click", function() {
    console.log("what up portfolio");
    // Changes background color at 500ms transition duration
    document.getElementById("body").style.backgroundColor = "#00BDA9";
    document.getElementById("container").style.backgroundColor = "#00BDA9";
    document.getElementById("body").style.transitionDuration = "500ms";
    document.getElementById("container").style.transitionDuration = "500ms";
    // Hides About and Contact
    document.getElementById("contact-me").innerHTML = "";
    document.getElementById("about-me").innerHTML = "";
    var portfolioText = document.getElementById("portfolio-text");

    var portfolio1 = document.getElementById("portfolio1");
    portfolio1.innerHTML = "Password Generator";
    portfolio1.setAttribute("href","https://lmp-beep.github.io/03-PasswordGenerator/");
    portfolio1.setAttribute("target", "_blank");
    portfolioText.append(portfolio1);

    var portfolio2 = document.getElementById("portfolio2");
    portfolio2.innerHTML = "Code Quiz";
    portfolio2.setAttribute("href","https://lmp-beep.github.io/04-CodeQuiz/");
    portfolio2.setAttribute("target", "_blank");
    portfolioText.append(portfolio2);

    var portfolio3 = document.getElementById("portfolio3");
    portfolio3.innerHTML = "Day Planner";
    portfolio3.setAttribute("href","https://lmp-beep.github.io/05-DayPlanner/");
    portfolio3.setAttribute("target", "_blank");
    portfolioText.append(portfolio3);

    var portfolio4 = document.getElementById("portfolio4");
    portfolio4.innerHTML = "Weather Dashboard";
    portfolio4.setAttribute("href","https://lmp-beep.github.io/06-WeatherDashboard/");
    portfolio4.setAttribute("target", "_blank");
    portfolioText.append(portfolio4);

    var portfolio5 = document.getElementById("portfolio5");
    portfolio5.innerHTML = "News Flash";
    portfolio5.setAttribute("href","https://xr7tsi.github.io/News-Flash/");
    portfolio5.setAttribute("target", "_blank");
    portfolioText.append(portfolio5);
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
    contactMe.innerHTML = "Contact Me";
    // Changes background color at 500ms transition duration
    document.getElementById("body").style.backgroundColor = "#E55F93";
    document.getElementById("container").style.backgroundColor = "#E55F93";
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