cc.Class({
    extends: cc.Component,

    properties: {
        scorelabel: {
            default: null,
            type: cc.Label
        },

        enemyPrefab: {
            default: null,
            type: cc.Prefab
        },

        //testlab: cc.Label,
        testBtn: cc.Button,

    },

    // use this for initialization
    onLoad: function () {

        //this.testlab.string = "worked";
        this.enemyDirection = "",
        this.attackDirection = "",
        this.keypressed = false,

        this.score = 0;

        // 初始化键盘输入监听
        this.setInputControl();


        //spawnEnemies
        this.spawnNewEnemy();
    },

    spawnNewEnemy: function(){

        var newEnemy = cc.instantiate(this.enemyPrefab);

        this.node.addChild(newEnemy);
        newEnemy.setPosition(this.getNewEnemyPosition());
        newEnemy.setScale(0.5, 0.5);
        newEnemy.rotation = this.randRotation();

        console.log("this enemy's direction is " + this.enemyDirection);

        newEnemy.getComponent('enemy').game = this;

    },

    getNewEnemyPosition: function () {
        return cc.p(0,200);
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
    },

    gainScore: function() {
        this.score += 1;
        console.log("score is : " + this.score);
        this.scorelabel.string = "Score: " + this.score.toString();


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
            }
        }, self.node);
    },


});
