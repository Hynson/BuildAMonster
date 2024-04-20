class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.faceX = this.bodyX;
        this.faceY = this.bodyY + 35;

        this.rightHornX = this.bodyX + 60;
        this.rightHornY = this.bodyY - 70;

        this.leftHornX = this.bodyX - 60;
        this.leftHornY = this.bodyY - 70;

        this.eyeX = this.bodyX; 
        this.eyeY = this.bodyY - 30;

        this.leftArmX = this.bodyX - 115;
        this.leftArmY = this.bodyY + 70;

        this.rightArmX = this.bodyX + 115;
        this.rightArmY = this.bodyY + 70;

        this.leftLegX = this.bodyX - 60;
        this.leftLegY = this.bodyY + 150;

        this.rightLegX = this.bodyX + 60;
        this.rightLegY = this.bodyY + 150;

        
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
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_psycho_light.png");
        my.sprite.mouthOpen = this.add.sprite(this.faceX, this.faceY, "monsterParts", "mouthB.png");
        my.sprite.mouthClosed = this.add.sprite(this.faceX, this.faceY, "monsterParts", "mouth_closed_fangs.png");
        
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_greenA.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_greenA.png");
        
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_greenA.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_greenA.png");
        
        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_green_horn_small.png");
        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_green_horn_small.png");
        my.sprite.leftHorn.flipX = true;

        my.sprite.mouthOpen.visible = false;
        my.sprite.mouthClosed.visible = false;

        this.SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let FKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        
        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        //event input: dimple smile
        FKey.on('down', (key, event) => {
            my.sprite.mouthOpen.visible = false;
            my.sprite.mouthClosed.visible = true;
        });
        //event input: regular smile
        let SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        SKey.on('down', (key, event) => {
            my.sprite.mouthOpen.visible = true;
            my.sprite.mouthClosed.visible = false;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
         if (this.DKey.isDown){     //pulling input: peace hand
            my.sprite.body.x += 3;
            my.sprite.eye.x += 3;
            my.sprite.mouthOpen.x += 3;
            my.sprite.mouthClosed.x += 3;
            my.sprite.leftArm.x += 3;
            my.sprite.rightArm.x += 3;
            my.sprite.leftLeg.x += 3;
            my.sprite.rightLeg.x += 3;
            my.sprite.rightHorn.x += 3;
            my.sprite.leftHorn.x += 3;

        }
        else if (this.AKey.isDown) {
            my.sprite.body.x -= 3;
            my.sprite.eye.x -= 3;
            my.sprite.mouthOpen.x -= 3;
            my.sprite.mouthClosed.x -= 3;
            my.sprite.leftArm.x -= 3;
            my.sprite.rightArm.x -= 3;
            my.sprite.leftLeg.x -= 3;
            my.sprite.rightLeg.x -= 3;
            my.sprite.rightHorn.x -= 3;
            my.sprite.leftHorn.x -= 3;

        }
    


    }
       


}