var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/fighter.png")
ASSET_MANAGER.queueDownload("./sprites/fightPlate.png")

ASSET_MANAGER.downloadAll(function () {

  
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');
    
    

	var MegaMan = new myCharacter(gameEngine);

	gameEngine.addEntity(MegaMan);
	
	gameEngine.init(ctx);

	gameEngine.start();
});