$.getJSON("http://ip-api.com/json", function(data) {
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + data.city +  "&appid=e0e5f6bac14b6ebffa0ad78d1bfa8136", function(data) {
    var city = data.name;
    var temp = data.main.temp;
    var description = data.weather[0].description;
    var farenheight = Math.round(((9 / 5) * temp)  - 459.67);
    var celsius = Math.round(temp - 273.15);

    $("#main").append("<h1 class='text-center'>" + city + "</h1>")
            .append("<button class='temp' id='farenheight'>" + farenheight + " &#8457;</button>")
            .append("<button class='temp' id='celsius'>" + celsius + " &#8451;</button>")
            .append("<h1 class='text-center'>" + description + "</h1>");

    $("#celsius").hide();

    if (farenheight > 80) {
      $("#icon").append("<i class='wi wi-day-sunny'></i>");
    } else if (farenheight > 70) {
      $("#icon").append("<i class='wi wi-day-cloudy'></i>");
    } else if(farenheight > 60) {
      $("#icon").append("<i class='wi wi-cloud'></i>");
    } else if(farenheight > 50) {
      $("#icon").append("<i class='wi wi-cloudy-gusts'></i>");
    } else {
      $("#icon").append("<i class='wi wi-rain-mix'></i>");
    }
  });
});


$("#main").on("click", ".temp", function() {
  if ($("#celsius").css("display") === "none") {
    $("#celsius").show();
    $("#farenheight").hide();
  } else {
    $("#celsius").hide();
    $("#farenheight").show();
  }
});
