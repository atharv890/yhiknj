function preload(){

}
function setup(){
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.size(500,500);
video.hide();
ml=ml5.poseNet(video,modelloaded);
ml.on("pose",hi);
}
function modelloaded(){
console.log("posenet is loaded");
}
function hi(results){
    if(results.length>0){
    console.log(results);
    console.log(results[0].pose.nose.x);
    console.log(results[0].pose.nose.y);
    }}
function draw(){

}