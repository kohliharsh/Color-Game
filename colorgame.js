var numSquares = 6;
var color = getRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var displaycolor = document.getElementById("displaycolor");
var pickedColor = pickcolor();
var displayMsg = document.getElementById("message");
var h1 = document.querySelector("h1");
var newGame = document.getElementById("reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var check = false;
var won = document.querySelector(".won");
var sound = new Audio("click.mp3");
var score = 6;
var scoreKeeper = document.querySelector(".scoreKeeper");

displaycolor.textContent = pickedColor;




easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquares = 3;
    color = getRandomColors(numSquares);
    pickedColor = pickcolor();
    displaycolor = pickedColor;
    for(var i = 0 ; i<squares.length ; i++)
    {
        if(i<=2)
        {
            squares[i].style.backgroundColor = color[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue"; 
    displayMsg.textContent = "";
    won.textContent = "";
    document.getElementById("container").style.height = "200px";
    scoreKeeper.textContent = "";
})

hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numSquares = 6;
    color = getRandomColors(numSquares);
    pickedColor = pickcolor();
    displaycolor = pickedColor;
    for(var i = 0 ; i<squares.length ; i++)
    {
        squares[i].style.backgroundColor = color[i];
        squares[i].style.display = "block";
    }
    h1.style.background = "steelblue"; 
    displayMsg.textContent = "";
    won.textContent = "";
    document.getElementById("container").style.height = "400px";
    scoreKeeper.textContent = "";
})

for(var i = 0 ; i<squares.length ; i++)
{    //giving initial colors
    squares[i].style.backgroundColor = color[i];
    //comparing clicked and picked color
    squares[i].addEventListener("click",function(){
        sound.play();
        var clickedcolor = this.style.backgroundColor;
        console.log(clickedcolor,pickedColor);
        if(clickedcolor === pickedColor)
        {
           colorChange(clickedcolor);
           displayMsg.textContent = "Correct!";
           h1.style.background = clickedcolor;
           newGame.textContent = "PLAY AGAIN?";
           won.textContent = "You Won!" ;
           scoreKeeper.textContent = "Your score is: " + score;
        }
        else
        {
            this.style.backgroundColor = "#232323";
            displayMsg.textContent = "Try Agian";
            score--;
        }
    });
}

function colorChange(color)
{
    for(var i = 0 ; i<squares.length ; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function getRandomColors(num)
{   
    var arr = []   
    for(var i = 0 ; i<num ; i++)
    {
        arr.push(randomColor(0));
    }
    return arr;
}

function randomColor()
{
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickcolor(){
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

function reset(){
    color = getRandomColors(numSquares);
    pickedColor = pickcolor();
    displaycolor.textContent = pickedColor;
    for(var i = 0 ; i<squares.length ; i++)
    {
        squares[i].style.backgroundColor = color[i];
    }
    h1.style.background = "steelblue";
    displayMsg.textContent = "";
    newGame.textContent = "NEW COLORS";
    won.textContent = "";
    scoreKeeper.textContent = "";
}
newGame.addEventListener("click",function(){
    reset();
});

