cc.Class({
    extends: cc.Component,

    properties: {
        score: {
            default: null,
            type: cc.Label
        },

        enemyPrefab: {
            default: null,
            type: cc.Prefab
        },



    },

    // use this for initialization
    onLoad: function () {

        //this.score.string = "test";
        /*
        this.leftkey = false;
        this.rightkey = false;
        this.upkey = false;
        this.downkey = false;
        */
        this.enemyDirection = "",
        this.attackDirection = "",
        this.keypressed = false,

        this.scroe = 0;

        // 初始化键盘输入监听
        this.setInputControl();


        //spawnEnemies
        this.spawnNewEnemy();
    },

    spawnNewEnemy: function(){

        var newEnemy = cc.instantiate(this.enemyPrefab);

        this.node.addChild(newEnemy);
        newEnemy.setPosition(this.getNewEnemyPosition());
        newEnemy.rotation = this.randRotation();

        console.log("this enemy's direction is " + this.enemyDirection);

        newEnemy.getComponent('enemy').game = this;

    },

    getNewEnemyPosition: function () {
        return cc.p(0,0);
    },

    randRotation: function () {
        
        var x = cc.random0To1();
        var result = 0;

        if (x <= 0.25) {
            result = 90;
            this.enemyDirection = "up";
        } else if (x <= 0.5) {
            result = 180;
            this.enemyDirection = "right";
        } else if (x <= 0.75) {
            result = 270;
            this.enemyDirection = "down";
        } else {
            this.enemyDirection = "left";
        }

        return result;

    },



    // called every frame
    update: function (dt) {

        //console.log("test222" + this.keypressed);
/*
        if (this.leftkey) {
            this.score.string = "worked";
            this.newEnemy.killEnemy();
            this.score.string = "left";
        } else {
            this.score.string = "Scroe: 0";
        }
*/
        /*        
        if (this.checkEnemyHP() == 0) {
            this.killEnemy();
            this.spawnNewEnemy();
        };
        */
    },

    gainScore: function() {

    },



    setInputControl: function () {
        var self = this;
        //add keyboard input listener to jump, turnLeft and turnRight
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // set a flag when key pressed
            onKeyPressed: function(keyCode, event) {
                self.keypressed = true;
                switch(keyCode) {
                    /*case cc.KEY.left:
                        self.leftkey = true;
                        self.rightkey = false;                       
                        self.upkey = false;
                        self.downkey = false;
                        break;
                    case cc.KEY.right:
                        self.leftkey = false;
                        self.rightkey = true;                       
                        self.upkey = false;
                        self.down = false;
                        break;
                    case cc.KEY.up:
                        self.leftkey = false;
                        self.rightkey = false;                       
                        self.upkey = true;
                        self.down = false;
                        break;
                    case cc.KEY.down:
                        self.leftkey = false;
                        self.rightkey = false;                       
                        self.upkey = false;
                        self.down = true;break;*/
                    case cc.KEY.left:
                        self.attackDirection = "left";
                        break;
                    case cc.KEY.right:
                        self.attackDirection = "right";
                        break;
                    case cc.KEY.up:
                        self.attackDirection = "up";
                        break;
                    case cc.KEY.down:
                        self.attackDirection = "down";
                        break;
                }
            },
            // unset a flag when key released
            onKeyReleased: function(keyCode, event) {
                
                self.keypressed = false;
                self.attackDirection = "";

                /*switch(keyCode) {
                    case cc.KEY.left:
                        self.leftkey = false;
                        break;
                    case cc.KEY.right:
                        self.rightkey = false;
                        break;
                    case cc.KEY.up:
                        self.upkey = false;
                        break;
                    case cc.KEY.down:
                        self.downkey = false;
                        break;
                }*/
            }
        }, self.node);
    },


});
