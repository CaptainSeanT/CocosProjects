cc.Class({
    extends: cc.Component,

    properties: {
    	actioniconPrefab: {
            default: null,
            type: cc.Prefab
        },

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    	//定义技能参数
    	//this.skilliconid = 0;
    	//this.newActionIcons = new Object();

//    	var temp = 1;

//    	this.newActionIcons[temp] = "test worked";

//    	cc.log(this.newActionIcons[temp]);
        this.actioniconflag = false;

    	this.mouseclicked = false;

    	//随机生成actionicons
    	this.setActionIcons();

    	// 初始化鼠标输入监听
        this.setMouseControl();


    },

    start () {

    },

    setActionIcons: function() {

    	var maxActionIconNum = 8;
	    //var o = Math.round, rand = Math.random, s = 255;

    	//生成8个节点
    	for(i = 0; i < maxActionIconNum; i++) {
    		//this.drawActionIcon(this.skilliconid);
    		//this.skilliconid += 1;
    		this.drawActionIcon();
    	}

    },

    random_rgb: function() {
	    var o = Math.round, r = Math.random, s = 255;
    	return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    },


    tapAcionIcon: function(x, y) {
    	cc.log("onLeftMouseDown at: " + x + " " + y);
    	//使用action
		    	
    	//删除actionicon


    	//排列actionicon
    	//this.arrangeActionIcon();
    	//补充新卡(如果技能被使用)
    	

        //this.drawActionIcon(this.skilliconid);
    },

    //arrangeActionIcon: function() {},

    drawActionIcon: function() {  	
    	var newActionIcon = cc.instantiate(this.actioniconPrefab);
        this.node.addChild(newActionIcon);
        newActionIcon.getComponent('actionicon').controller = this;
    },

/*
    drawActionIcon: function(_skilliconid) {

		cc.log("skilliconid is: " + _skilliconid);    	
    	this.newActionIcons[_skilliconid] = cc.instantiate(this.actioniconPrefab);
        this.node.addChild(this.newActionIcons[_skilliconid]);
    },
*/

    setMouseControl: function() {
       var self = this;
        //add mouse listener 
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            // set a flag when key pressed
            onMouseDown: function(event) {
            	var pos = event.getLocation();
            	self.mouseclicked = true;
            	if(event.getButton() === cc.EventMouse.BUTTON_LEFT) {
            		self.tapAcionIcon(pos.x, pos.y);
            		//cc.log("onLeftMouseDown at: " + pos.x + " " + pos.y);
            		cc.log("mouseclicked: " + self.mouseclicked);
            	}
            },

            onMouseUp: function(event) {
            	self.mouseclicked = false;
            	cc.log("mouseclicked: " + self.mouseclicked);
            }
        }, self.node);
    },

    update (dt) {
        if(this.actioniconflag) {
            this.drawActionIcon();
            this.actioniconflag = false;
        }
    },
});
