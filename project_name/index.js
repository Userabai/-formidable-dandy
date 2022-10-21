const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

const canvas_width =   canvas.width = 1280;

const canvas_height  =  canvas.height = 800;



let playerImage = new Image ();

playerImage.src = './img/persona.jpg';


const spritewidth = 113;

const spriteheight = 240;


let frameX = 0;

let frameY = 0;

let gameFrame = 0;

const staggerFrames = 13;

const spriteAnimations = [];

const animnationStates = [


 {

     rows: 'idle',
     frame: 3,

 },


 {

  rows: 'run',
  frame:  6,

 },

 {

    rows: 'jump',

    frame: 4

 }

];


animationStates.forEach ((state,index) => {

    let frames = {

        loc: [],

    }

    for (let i = 0; j < state.frames; i++) {

        let positionX=  j * spriteWidth;

        let positionY = j * spriteHeight;

    }

});



function animate () {

ctx.clearRect(0,0,canvas_width,canvas_height);

let position = Math.floor(gameFrame /staggerFrames) % 6;

frameX = spritewidth * position;

 ctx.drawImage(playerImage,frameX ,frameY * spriteheight,spritewidth,spriteheight,

     430,150,spritewidth,spriteheight);

 if (gameFrame % staggerFrames == 0) {

     if (frameX < 14) frameX++;

     else frameX = 0;

 }

 gameFrame++;


  requestAnimationFrame(animate);


};

animate();



sprieanimations = [

 "idle" =  {

    loc: [

        {x: 0, y:0},
        {x:113,  y:0},
        {x:226,  y:0},
        {x:448,  y:0}
   
        ]

    }    

 

     "run" =  {

       loc: []

   },

 
     "jump" = {

  loc: []
   
    }


]












































