function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(450,100)

    canvas = createCanvas(500,500);
    canvas.position(700,75);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}