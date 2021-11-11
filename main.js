status="";
objects=[];

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,400);
    if(status != "") 
    { objectDetector.detect(video, gotResult);
    for (i = 0; i < objects.length; i++){
    document.getElementById("status").innerHTML = "Status : Object Detected";
    fill("#FF0000"); 
    percent = floor(objects[i].confidence * 100); 
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15); 
    noFill();
    stroke("#FF0000"); 
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

if(objects[i].label==object_name){
    video.stop();
    document.getElementById("objectsstatus").innerHTML="Object found";
    objectDetector.detect(gotResult);
}
else{
    document.getElementById("objectsstatus").innerHTML="Object not found";
}
}
}
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Object...";
    object_name=document.getElementById("input1").value;
}

function modelloaded(){
    console.log("model is loaded");
    status=true;
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}