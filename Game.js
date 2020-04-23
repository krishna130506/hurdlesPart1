class Game {
  constructor(){

  }

 /* getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }*/

  async start(){
    /*if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }*/
      form = new Form()
      form.display();
    }

   /* runner1 = createSprite(200,350);
    runner2 = createSprite(200,250);
    runner3 = createSprite(200,150);
    runner4 = createSprite(200,50);
    runners = [runner1,runner2,runner3,runner4];*/

  }

 /* play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCarsAtEnd();

    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      fill("white");
      stroke(0);
      strokeWeight(4);
      rectMode(CENTER);
      rect(600 ,100, 1200,200);
      rect(600,300,1200,200);
      rect(600,500,1200,200);
      rect(600,700,1200,200);
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 200 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        y = y + 200;
        //use data form the database to display the cars in y direction
       
        runners[index-1].x = x;
        runners[index-1].y = y;
       // console.log(index, player.index)

       
        
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank+=1;
      Player.updateCarsAtEnd(player.rank);
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}*/
