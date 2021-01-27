img="";
function preload(){
img=loadImage('dog_cat.jpg')
}

function setup(){
canvas=createCanvas(640,420)
canvas.center();
}

function draw(){
image(img,0,0,640,420)
fill('#ff0008')
text("Dog",100,100)
noFill()
stroke('#ff0008')
rect(50,50,400,350)

}