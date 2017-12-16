function init() {
    // vitesse en pixel par seconde
    var speed = 50;
    var frequency = 5;
    var period = 1000 / frequency;
    var speedByPeriod = speed * period / 1000;
    var ySpeed = 0;
    var xSpeed = speedByPeriod;
    // cree la scene
    var stage = new createjs.Stage("demoCanvas");
    var olddraw = [];
    let size =10;
    let startLength = 20;
    // cree un forme
    let snake = [];
    for (let i=0;i<startLength;i++) {
        snake.push({x: 50-(i*size) ,y:150});
    }
    draw();
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
        let head = snake[0];
        let h = {x : head.x +xSpeed, y :head.y +ySpeed}
        snake.unshift(h);
        snake.pop();
        draw();
    }, period);

    function draw() {
        olddraw.forEach( wtf=> stage.removeChild(wtf));
        olddraw = [];
        snake.forEach(coord => {
            let s = new createjs.Shape();
            // dessinse la forme
            s.graphics.beginFill("rgb(255, 75,0)").rect(0, 0, size,size);
            // positione la form
            s.x = coord.x;
            s.y = coord.y;
            // ajoute la forme a la scne
            stage.addChild(s);
            olddraw.push(s);
        }  );
        stage.update();
    }
}

