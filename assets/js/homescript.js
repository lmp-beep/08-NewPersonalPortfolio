
console.log("hello");


var portfolioBtn = document.getElementById("portfolio-button");
var aboutBtn = document.getElementById("about-button");
var contactBtn = document.getElementById("contact-button");


portfolioBtn.addEventListener("click", function() {
    console.log("what up")
    var portfolioText = document.getElementById("portfolio-text");
    
    var portfolio1 = document.getElementById("portfolio1");
    portfolio1.innerHTML = "Password Generator";
    portfolio1.setAttribute("src","https://lmp-beep.github.io/03-PasswordGenerator/");
    portfolioText.append(portfolio1);
  })
  
  /* <li><a href="https://lmp-beep.github.io/03-PasswordGenerator/" target="_blank">Password Generator</a></li>
  
  <li><a href="https://lmp-beep.github.io/04-CodeQuiz/" target="_blank">Code Quiz</a></li>
  
  <li><a href="https://lmp-beep.github.io/05-DayPlanner/" target="_blank">Day Planner</a></li>
  
  <li><a href="https://lmp-beep.github.io/06-WeatherDashboard/" target="_blank">Weather Dashboard</a></li>
  
  <li><a href="https://xr7tsi.github.io/News-Flash/" target="_blank">News Flash</a></li> */