function init() {
    var stage = new createjs.Stage("canvas");
    
    var despacito = [
        new createjs.Text("d", "50px Arial", "#ff0000"),
        new createjs.Text("e", "50px Arial", "#ff8c00"), 
        new createjs.Text("s", "50px Arial", "#ffe600"), 
        new createjs.Text("p", "50px Arial", "#aeff00"), 
        new createjs.Text("a", "50px Arial", "#1aff00"),
        new createjs.Text("c", "50px Arial", "#00ffc3"), 
        new createjs.Text("i", "50px Arial", "#008cff"), 
        new createjs.Text("t", "50px Arial", "#0000ff"), 
        new createjs.Text("o", "50px Arial", "#9d00ff") 
    ];
    function animate(target, origin) {
        createjs.Tween.get(target, { loop: true })
          .to({ rotation: 360*Math.random(), x: 1650 + origin }, 4500, createjs.Ease.getPowInOut(3))
          .to({ rotation: 0, x: origin }, 4500, createjs.Ease.getPowInOut(3));
    };
    for(var letter = 0; letter < despacito.length; letter++) {
        despacito[letter].y = 400;
        despacito[letter].x = letter * 30;
        animate(despacito[letter], letter * 30);
        stage.addChild(despacito[letter]);
    }
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", stage); 
  
  
  };
  