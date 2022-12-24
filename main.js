nose_x = 0;
nose_y = 0;
left_wrist_x = 0;
right_wrist_x = 0;
gap = 0 ; 

function setup(){
    canvas = createCanvas(500,400);
    video = createCapture(VIDEO);
    canvas.center();
video.size(500 , 400);
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on("pose" , gotResults);
}

function modelLoaded(){
    console.log("model is loaded")
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
nose_y = results[0].pose.nose.y;
left_wrist_x = results[0].pose.leftWrist.x;
right_wrist_x = results[0].pose.rightWrist.x;
gap = left_wrist_x - right_wrist_x ; 
    }
}

function draw(){
    background("white")
    text("Aahan",nose_x,nose_y);
    textSize(gap);
    document.getElementById("fontsize").innerHTML = Math.round(gap)+"px";

}
