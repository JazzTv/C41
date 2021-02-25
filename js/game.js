class game 
{
   constructor ()
   {

   } 

   getState ()
   {
       var gameRef = database.ref ('GameState');
       gameRef.on("value", function(data)
       {
           GameState = data.val();
       })
   } 
  
  update(state)
  {
     database.ref('/').update({GameState:state}) 
  }
   
  start ()
  {
      if (GameState === 0)
      {
          Player = new player();
          Player.getCount ();
          Form = new form();
          Form.display ();

          car1 = createSprite(100,200);
          car1.addImage(carImg1);
          car2 = createSprite(300,200);
          car2.addImage(carImg2);
          car3 = createSprite(500,200);
          car3.addImage(carImg3);
          car4 = createSprite(700,200);
          car4.addImage(carImg4);

          cars= [car1,car2,car3,car4];
      }
  } 

  play ()
  {
      Form.hideForm ();
      player.getPlayerInfo ();
      Player.getFinishedCars ();

      if (allPlayers!==undefined)
      {  
          background("#4B4B4B");
          image(track,0,-height*4,width,height*5);
          var index = 0;
          var carx = 350;
          var cary = height;

          for (var plry in allPlayers)
          {
            cary = height - allPlayers[plry].Distance;
            cars[index].x = carx;
            cars[index].y = cary;
            if((index + 1) === Player.index)
              { 
                cars[index].shapeColor = "red";
                camera.position.y = cars[index].y;
                fill("green");
                ellipse(cars[index].x,cars[index].y,100,100);
                push ()
                textSize (20);
                fill ("white")
                text(allPlayers[plry].Name,cars[index].x - 20,cars[index].y + 100);
                pop ()
                
              }
            carx = carx + 200;
            //console.log(cars[index].x);
            //console.log(cars[index].y);
            index = index + 1;


          }
      } 
      if (keyIsDown(UP_ARROW) && (Player.index!==null))
    { 
        Player.distance += 50;
        console.log(Player.distance);
        Player.update ();
        if (Player.distance >= 2500)
        {
          Player.rank += 1;
          Player.update ();
          player.updateFinishedCars (Player.rank);
          GameState = 2;
        }
    } 

    drawSprites();
  } 

  end ()
  {
    console.log("Game Ended");
    textSize(30);
    text("Game Over!",width/2,camera.position.y - 150);
    //text ("Player" + this.index + "Rank" + this.rank,camera.position.x + 10, camera.position.y + 20);
  } 

  displayRank ()
  { 
    textSize (30);
    text ("Leaderboard",width/2, camera.position.y - 50);
    var textYPosition = camera.position.y;
    for (var plry in allPlayers)
          {
             if(plry === "Player" + Player.index)
              fill("red")
              else
              fill("black")

              textSize(15);
              text (allPlayers[plry].Name + " : " + allPlayers[plry].Rank,width/2,textYPosition);
              textYPosition += 20;
          }
  }
}