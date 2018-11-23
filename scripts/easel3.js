function init() {
    var stage = new createjs.Stage("canvas");

    var circle = new createjs.Shape();

    circle.graphics.beginFill("#99e6ff").setStrokeStyle(30).beginStroke("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = circle.y = 100;
  
    var dab = new createjs.Bitmap("images/dab.PNG");
    stage.addChild(dab);
    dab.y = 0;
    dab.x = 200;
    dab.scale = 0.55;
    
    var preload = new createjs.LoadQueue();
    preload.loadFile("images/dab.png"); // we must first load it in order to interact with it

    stage.addChild(circle);  
    stage.addChild(dab);  

    circle.addEventListener("click", handleClickCircle);
    dab.addEventListener("click", handleClickDab);

    function handleClickCircle() {
        console.log("Circle clicked!");
        createjs.Tween.get(circle)
            .to( { alpha: 0.1 }, 300)
            .to( { y: 500, alpha: 0.2 }, 1000, createjs.Ease.getPowInOut(4))
            .to( { x: 500, alpha: 0.5 }, 1000, createjs.Ease.getPowInOut(4))
            .to( { x: 100, y: 100, alpha: 1 }, 1000, createjs.Ease.getPowInOut(4));
    };
    function handleClickDab() {
        console.log("Dab clicked!");
        createjs.Tween.get(dab)
            .to( {x: 1000, alpha: 0 }, 1000, createjs.Ease.getPowInOut(4))
            .to( {x: 200, alpha: 1 }, 1000, createjs.Ease.getPowInOut(4));
    };

    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", stage); 
  
  
};
  