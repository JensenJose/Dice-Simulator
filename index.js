var randomNum1 = Math.floor(Math.random() * 6 + 1);
var randomImgSrc= "dice" + randomNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc);

var randomNum2 = Math.floor(Math.random() * 6 + 1);
var randomImgSrc2= "dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
}else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩"
}else{
    document.querySelector("h1").innerHTML = "Draw!"
}