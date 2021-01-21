class myCharacter{
    constructor(game){
        Object.assign(this,{game});

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/fighter.png");
        this.spritesheet1 = ASSET_MANAGER.getAsset("./sprites/fightPlate.png");
        
        //spritesheet, xstart, ystart, width(character), height(character), frameCount, frameDuration, framePadding, reverse, loop;
        this.animation = new Animator(this.spritesheet, 8, 205, 40, 40, 10, 0.15, 10, false, true);
        this.animation1 = new Animator(this.spritesheet, 9, 108, 40, 40, 10, 0.15, 10, false, true);
        this.animation2 = new Animator(this.spritesheet1, 6, 274, 1000, 123, 1, 1, 70, false, true);
       
        
    };
    update(){

    };

    draw(ctx){
        //this.animations[this.state][this.size][this.facing].drawFrame(this.game.clockTick, ctx ,450, 300,3);
        this.animation.drawFrame(this.game.clockTick, ctx, 250, 405,3);
        this.animation1.drawFrame(this.game.clockTick, ctx, 700, 415,3);
        this.animation2.drawFrame(this.game.clockTick, ctx ,0, 500,1);
    };

};