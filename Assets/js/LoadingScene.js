class LoadingScene extends Phaser.Scene{
    constructor(){
        super("LoadingScene");
    }

    preload(){
        //Background
        this.load.image('tophats', 'assets/images/LoadingBase.png');
        this.load.spritesheet('thePlayButton', 'assets/images/play.png', {
            frameWidth: 600,
            frameHeight: 145
        });
        //Loading icon and word spritesheets
        this.load.spritesheet('loadIcon', 'assets/images/LoadingSprite.png', {
            frameWidth: 1920,
            frameHeight: 1080,
        });
        this.load.spritesheet('loadWord', 'assets/images/LoadingWordSprite.png', {
            frameWidth: 673,
            frameHeight: 90
        });

        //Positioning icon and word
        this.loadIcon = this.add.sprite(config.width /2, config.height / 2, 'loadIcon');
        this.loadWord = this.add.sprite(config.width / 2, config.height + 145, 'loadWord');
    }

    create(){
        
        this.anims.create({
            key: 'loadIcon_anim',
            frames: this.anims.generateFrameNumbers('loadIcon'),
            frameRate: 1,
            repeat: 0
        });
        this.anims.create({
            key: 'loadWord_anim',
            frames: this.anims.generateFrameNumbers('loadWord'),
            frameRate: 1,
            repeat: -1
        });
        this.celestialBody = this.add.tileSprite(960,540,config.width, config.height, 'tophats');
        this.rainbow = this.physics.add.sprite(960,540, 'loadIcon');
        this.rainbow.play('loadIcon_anim');
        this.theWord = this.physics.add.sprite(1000, 70, 'loadWord');
        this.theWord.play('loadWord_anim');
        this.playButton = this.physics.add.sprite(1000, 70,'thePlayButton').setInteractive();
        this.playButton.visible = false;
        this.playButton.on('pointerdown', function (pointer) {
            this.scene.scene.scene.start('Level1');
        }, this);
    }

    update(){
        if(this.rainbow.anims.isPlaying == false){
            this.theWord.visible=false;
            this.playButton.visible=true;
        }
    }

}



