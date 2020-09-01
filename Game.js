class Game{
    constructor(){
    
    }

getState(){
database.ref('gameState').on("value",function(data){
 gameState=data.val();
})
} 

updateState(state){
database.ref('/').update({
gameState: state
})
}

start(){
if(gameState === 0){
form = new Form();
form.display();
player=new Player();
player.getCount();
}    
}

play(){
   form.hide();
   textSize(30);
   text("GAME START", 120,100);
   Player.getPlayerInfo();
   console.log(allPlayers);

   if(allPlayers !== undefined){
       var y_position = 130;
     for(var i in allPlayers){
         if(i === "player"+player.index){
           fill("red");
         }else{
             fill("black");
         }
         textSize(15);
         y_position += 20; 
         text(allPlayers[i].name+":"+allPlayers[i].distance, 120, y_position)
     }
   }

   if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance += 50;
      player.update();
   }
}
}