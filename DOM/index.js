var randomnumber1 = Math.floor(Math.random() *6)+ 1;

var randomdiceimage = "dice"+ randomnumber1 + ".png";

var imagesource = "images/" + randomdiceimage;

var images = document.querySelectorAll("img")[0];

images.setAttribute("src", imagesource);


var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomdiceimage2 = "dice" + randomnumber2 + ".png";

var imagesource2 = "images/" + randomdiceimage2;

var images2 = document.querySelectorAll("img")[1].setAttribute("src", imagesource2);

if(randomnumber1> randomnumber2) {
   
    document.querySelector("h1").innerHTML = "Player 1 Wins the Match";
    
}else if(randomnumber1< randomnumber2) {

    document.querySelector("h1").innerHTML = "Player 2 Wins the Match";
    
}else {

    document.querySelector("h1").innerHTML = "Match Draw";
    
}

