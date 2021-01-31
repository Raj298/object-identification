img="";
status="";
function preload(){
img=loadImage('dog_cat.jpg')
}

function setup(){
canvas=createCanvas(640,420)
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML="Status:Detecting Objects";

}

function draw(){
image(img,0,0,640,420)
fill('#ff0008')
text("Dog",100,75)
noFill()
stroke('#ff0008')
rect(50,50,400,350)
fill('#ff0008')
text("Cat",350,75)
noFill()
stroke('#ff0008')
rect(310,55,250,350)
fill('#ff0008')
text("Bowl",300,320)
noFill()
stroke('#ff0008')
rect(270,300,120,110)
}
function modelLoaded(){
    console.log("modelLoaded")
    status="true"
    objectDetector.detect(img,gotResults)
}
function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
    }
}