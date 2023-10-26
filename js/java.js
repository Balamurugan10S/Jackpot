var randomNumber1 = Math.floor(Math.random() * 5) + 1;
var randomCard1 = "SLOT"+randomNumber1+".jpg";
var randomImage1 = "./images/"+randomCard1;
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);



var randomNumber2 = Math.floor(Math.random() * 5) + 1;
var randomCard2 = "SLOT"+randomNumber2+".jpg";
var randomImage2 = "./images/"+randomCard2;
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);




var randomNumber3 = Math.floor(Math.random() * 5) + 1;
var randomCard3 = "SLOT"+randomNumber3+".jpg"
var randomImage3 = "./images/"+randomCard3;
document.querySelectorAll("img")[2].setAttribute("src", randomImage3);


if(randomNumber1 === randomNumber2 && randomNumber2 === randomNumber3 && randomNumber1 === randomNumber3){
    document.querySelector("h1").innerHTML = "Congratulations You've Won The Jackpot";
}
else if(randomNumber1 === randomNumber2 || randomNumber2 === randomNumber3 || randomNumber1 === randomNumber3){
    document.querySelector("h1").innerHTML = "Cards Away For Jackpot!!!";
}
else{
    document.querySelector("h1").innerHTML = "Better Luck Next Time!";
}