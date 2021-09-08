
var random_num = Math.floor((Math.random()*6) + 1);
var random_num2 = Math.floor((Math.random()*6) + 1);
var rand_img = "images/dice" + random_num + ".png";
document.querySelector(".img2").setAttribute("src", rand_img);

var rand_img2 = "images/dice" + random_num2 + ".png";
document.querySelector(".img1").setAttribute("src", rand_img2);

document.querySelector("h1").
