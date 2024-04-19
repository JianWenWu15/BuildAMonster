class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")

        // Arms
        my.sprite.RightArm = this.add.sprite(this.bodyX + 100, this.bodyY + 50, "monsterParts", "arm_greenD.png");
        my.sprite.LeftArm = this.add.sprite(this.bodyX - 100, this.bodyY + 50, "monsterParts", "arm_greenD.png");
        my.sprite.LeftArm.flipX = true;

        // Legs 
        my.sprite.RightLeg = this.add.sprite(this.bodyX + 50, this.bodyY + 120, "monsterParts", "leg_greenD.png");
        my.sprite.LeftLeg = this.add.sprite(this.bodyX - 50, this.bodyY + 120, "monsterParts", "leg_greenD.png");
        my.sprite.LeftLeg.flipX = true;

        // Eyes
        my.sprite.RightEye = this.add.sprite(this.bodyX + 50, this.bodyY - 110, "monsterParts", "detail_dark_eye.png");
        my.sprite.LeftEye = this.add.sprite(this.bodyX - 50, this.bodyY - 110, "monsterParts", "detail_dark_eye.png");
        my.sprite.LeftEye.flipX = true;

        // Mouth
        my.sprite.Mouth = this.add.sprite(this.bodyX, this.bodyY - 50, "monsterParts", "mouthA.png");

        //Fangs
        my.sprite.Fangs = this.add.sprite(this.bodyX, this.bodyY - 50, "monsterParts", "mouth_closed_fangs.png");

        my.sprite.Fangs.visible = false;

        //Eye Balls
        my.sprite.RightEyeBall = this.add.sprite(this.bodyX + 50, this.bodyY - 110, "monsterParts", "eye_angry_green.png");
        my.sprite.LeftEyeBall = this.add.sprite(this.bodyX - 50, this.bodyY - 110, "monsterParts", "eye_angry_green.png");
        my.sprite.LeftEyeBall.flipX = true;
        

        // Create F key
        this.fkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);


        // Create S key
        this.skey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        // Create A key
        this.akey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        // Create D key
        this.dkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);        

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        //Event Input: Show Fangs
        this.fkey.on('down', (key, event) =>  {
            my.sprite.Mouth.visible = false;
            my.sprite.Fangs.visible = true;
        });

        //Event Input: Regular Smile
        this.skey.on('down', (key, event) =>  {
            my.sprite.Mouth.visible = true;
            my.sprite.Fangs.visible = false;
        });

        //Event Input: Move Left

        this.akey.on('down', (key, event) =>  {
            for (let monsterParts in my.sprite) {
                my.sprite[monsterParts].x -= 1;
            }
        });

        //Event Input: Move Right
        this.dkey.on('down', (key, event) =>  {
            for (let monsterParts in my.sprite) {
                my.sprite[monsterParts].x += 1;
            }
        });

       
    }

}