var starImg,bgImg,fairyImg,sound;
var star, starBody,fairy,fairyBody;

//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg=loadImage("images/fairy.png");
	sound=loadSound("sound/sound.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
sound.play();
	//create fairy sprite and add animation for fairy

	fairy=createSprite(400,300);
	fairy.addImage(fairyImg);
	fairy.scale=0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	fairyBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, fairyBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
fairy.x=mouseX
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
if(star.y>470 && starBody.position.y > 470)
{
	Matter.Body.setStatic(starBody,true);
	star.y=fairy.y;
	star.x=fairy.x+100;
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
		
	}

	//writw code to move fairy left and right
	
	
}
