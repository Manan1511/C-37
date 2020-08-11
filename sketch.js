var ball,ball1;
var database;
var pos,gameState = 0;
var playerCount,player,form;
var game;
var car1,car2,car3,car4;
var AllCars=[]
var AllPlayerArray=[];
function setup(){
    createCanvas(displayWidth-20,displayHeight-20);
    database = firebase.database();

    game = new Game();
    game.getgameState();
    console.log(gameState);
    game.start();
    //var ball1pos = database.ref('Ball/Position');
    //ball1pos.on("value",function(data){
        //pos = data.val();
        //ball1.x = pos.x;
        //ball1.y = pos.y;
    //});
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1);
    }
    console.log(gameState);
    if(gameState===1){
        clear();
        game.play();
    }
}

function writePosition(x,y){
    database.ref('Ball/Position').set({
        x: pos.x+x,
        y: pos.y+y
    })
}