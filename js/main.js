/**
 * Complete le code pour avoir un carre qui bouge, on change la direction du carre avec wasd
 *
 */

//***********************************************************************************************
//***********************************************************************************************
//***********************************************************************************************
function example() {
    // cree un forme
    var snake = new createjs.Shape();
    // dessine la forme
    snake.graphics.beginFill("rgb(0, 255,0)").rect(0, 0, 20,20);
    // positione la form
    snake.x = 50;
    snake.y = 150;

    var stage = new createjs.Stage("demoCanvas");
    // ajoute la forme a la scne
    stage.addChild(snake);

    // met a jours la scene
    // a faire pour redessiner
    stage.update();


    // ecoute les touches appuiyer
    window.addEventListener('keypress',
        // execute la fonction sur chaquee touche appuyer
        (ev) => {
            // ev.code  est egual a 'KeyW'  'KeyS' 'KeyA' 'KeyD'
            // effectuer un action
    });

    setInterval(()=> {
        // effectue quelque chose toutes les 'period' millisecond

    }, period);
//***********************************************************************************************
//***********************************************************************************************
//***********************************************************************************************

function init() {
    // vitesse en pixel par seconde
    var speed = 100;
    var frequency = 20;
    var period = 1000 / frequency;
    var speedByPeriod = speed * period / 1000;
    var ySpeed = 0;
    var xSpeed = speedByPeriod;
    // gl samuel amuse toi bien a tout reecrire ! :)
    // sert toi des example de code si dessus pour reecrire un prog qui fonction pour controller le carre

}
