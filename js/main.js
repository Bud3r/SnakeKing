function init() {
    // vitesse en pixel par seconde
    var speed = 100;
    var frequency = 20;
    var period = 1000 / frequency;
    var speedByPeriod = speed * period / 1000;
    var ySpeed = 0;
    var xSpeed = speedByPeriod;
    // cree la scene
    var stage = new createjs.Stage("demoCanvas");
    // cree un forme
    var snake = new createjs.Shape();
    // dessine la forme
    snake.graphics.beginFill("rgb(0, 255,0)").rect(0, 0, 20,20);
    // positione la form
    snake.x = 50;
    snake.y = 150;
    // ajoute la forme a la scne
    stage.addChild(snake);
    // met a jours la scene
    stage.update();
    // ajoute un listener de pression de touche
    window.addEventListener('keypress',
    // execute la fonction sur chage 
    (ev) =>{
        
        if (ev.code ==='KeyW') {       
            ySpeed= -speedByPeriod;
            xSpeed =0;
        }else if (ev.code ==='KeyS') {            
            ySpeed= speedByPeriod;
            xSpeed =0;
        }else if (ev.code ==='KeyA') {            
            ySpeed= 0;
            xSpeed =-speedByPeriod;
        }else if (ev.code ==='KeyD') {            
            ySpeed= 0;
            xSpeed =speedByPeriod;
        }
        
    });

    setInterval(()=> {
         snake.x += xSpeed;   
         snake.y += ySpeed;   
         if (snake.x <0) {
             snake.x=0;
         } else if(snake.x>480) {
             snake.x=480;
         }
         if (snake.y <0) {
            snake.y=0;
        } else if(snake.y>280) {
            snake.y=280;
        }
         stage.update();
    }, period);


}