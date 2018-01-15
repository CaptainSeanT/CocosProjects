cc.Class({
    extends: cc.Component,

    properties: {
        game: {
            default: null,
            serializable: false
        },

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},


    start () {

    },

    update (dt) {
        //console.log("test1111" + this.game.keypressed);
        if (this.game.keypressed && this.game.enemyDirection == this.game.attackDirection) {
            this.game.gainScore();
            this.node.destroy();
            this.game.enemyDirection = "";
            console.log("enemyDirection" + this.game.enemyDirection);
            this.game.spawnNewEnemy();
        }
    },


});
