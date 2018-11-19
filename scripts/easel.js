function init() {
  var stage = new createjs.Stage("canvas");

  var dab = new createjs.Bitmap("images/dab.PNG");
  stage.addChild(dab);

  dab.x = dab.y = 300;
  
  function loadImage() {  // image/bitmap loading
    var preload = new createjs.LoadQueue();
    function fileLoaded() {
      bounds = dab.getBounds();
      dab.regX = bounds.x + bounds.width/2;
      dab.regY = bounds.y + bounds.height/2;
    }
    preload.on("fileload", fileLoaded);
    preload.loadFile("images/dab.png");
  };
  loadImage();  // In order to find the bounds of a bitmap, we must first load it

  function animate(target) {
    createjs.Tween.get(target, { loop: true })
      .to({ x: 1000, rotation: 360, alpha: 0.3 }, 2500, createjs.Ease.getPowInOut(4))
      .to({ x: 300, rotation: 0, alpha: 1 }, 2500, createjs.Ease.getPowInOut(4));
  };
  animate(dab);

  createjs.Ticker.frameraate = 60;
  createjs.Ticker.addEventListener("tick", stage); 


};
