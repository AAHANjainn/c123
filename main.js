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
    }
}
