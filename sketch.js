var database;
var Form, Game, Player;
var allPlayers;
var GameState = 0;
var PlayerCount = 0;
var FinishedCars = 0;

var cars, car1, car2, car3, car4;
var carImg1, carImg2, carImg3, carImg4;
var track;

function preload ()
{
    carImg1 = loadImage("images/car1.png");
    carImg2 = loadImage("images/car2.png");
    carImg3 = loadImage("images/car3.png");
    carImg4 = loadImage("images/car4.png");
    track = loadImage("images/track.jpg");
}

function setup()
{
    createCanvas(windowWidth - 50,windowHeight - 150);
    database = firebase.database();

    Game = new game ();
    Game.getState();
    Game.start();
   
    
}

function draw()
{
    background("white");

    if (PlayerCount === 4)
    {
        Game.update(1);
    } 
    if (GameState === 1)
    {
        clear ();
        Game.play();
    } 
    if (GameState === 2)
    {
        Game.end();
    } 
    if (FinishedCars === 4)
    {
        Game.displayRank ()
    }
}

