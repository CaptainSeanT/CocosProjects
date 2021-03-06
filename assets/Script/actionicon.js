// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        actionnum: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var num = this.randomSkill();
        this.actionnum.string = num.toString();
        
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        
        this.node.setColor(cc.color(r, g, b));

    },

    randomSkill: function() {
        var min = 0 ;
        var max = 8 ;

        var num = Math.floor( Math.random() * (max + 1 - min) ) + min ;

        return num;
    },

    onBtnnClicked: function() {
        //cc.log("Oooops!");
        this.node.destroy();
        //cc.log("[aaaatestest]" + this.controller.actioniconflag);
        this.controller.actioniconflag = true;
    },

    start () {

    },

    // update (dt) {},
});
