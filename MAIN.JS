song1status="";
song2status="";
song1="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
function preload(){
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}
function setup(){
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function draw(){
image(video,0,0,500,500);
song1status=song1.isPlaying();
song2status=song2.isPlaying();
}
function modelLoaded(){
console.log("poseNet has been initialized");
}
function gotPoses(results){
if(results.length>0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftWristX="+leftWristx+"leftWristY="+leftWristy)
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWristX="+rightWristx+"rightWristY="+rightWristy);
}
}    
function play(){
song.play();
song.setVolume(1);
song.rate(1);
}