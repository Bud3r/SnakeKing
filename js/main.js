function init() {

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
            if (snake.y>=10) {     
                snake.y -= 10;
                stage.update();
            }
        }else if (ev.code ==='KeyS') {            
            if (snake.y<280)   snake.y += 10;
            stage.update();
        }else if (ev.code ==='KeyA') {            
           if (snake.x>=10) {
            snake.x -= 10;
            stage.update();
           }
        }else if (ev.code ==='KeyD') {            
         if (snake.x<480) {  
             snake.x += 10;
            stage.update();
           }
        }
        
    });

}