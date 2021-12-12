var x = 6*Math.random();
var y = 6*Math.random();
x = Math.floor(x);
y = Math.floor(y);
x = x+1;
y = y+1;

if (x==1) {
    document.querySelector("#player1").setAttribute("src", "images/1.png");
}
else if(x==2) {
    document.querySelector("#player1").setAttribute("src", "images/2.png");
}
else if(x==3) {
    document.querySelector("#player1").setAttribute("src", "images/3.png");
}
else if(x==4) {
    document.querySelector("#player1").setAttribute("src", "images/4.png");
}
else if(x==5) {
    document.querySelector("#player1").setAttribute("src", "images/5.png");
}
else if(x==6) {
    document.querySelector("#player1").setAttribute("src", "images/6.png");
}

if (y==1) {
    document.querySelector("#player2").setAttribute("src", "images/1.png");
}
else if(y==2) {
    document.querySelector("#player2").setAttribute("src", "images/2.png");
}
else if(y==3) {
    document.querySelector("#player2").setAttribute("src", "images/3.png");
}
else if(y==4) {
    document.querySelector("#player2").setAttribute("src", "images/4.png");
}
else if(y==5) {
    document.querySelector("#player2").setAttribute("src", "images/5.png");
}
else if(y==6) {
    document.querySelector("#player2").setAttribute("src", "images/6.png");
}

if(x>y){
    document.querySelector(".result").innerHTML = "<h2>Player 1 Wins</h2>"
}
else if(x<y){
    document.querySelector(".result").innerHTML = "<h2>Player 2 Wins</h2>"
}
else{
    document.querySelector(".result").innerHTML = "<h2>It's a Tie</h2>"
}