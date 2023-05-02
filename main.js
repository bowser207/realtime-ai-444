
size = 0;
rightWristX = 0;
leftWristX = 0;




function setup()
{
    video = createCapture(VIDEO);
    video.size(650, 600);

    canvas = createCanvas(650, 600);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#8F5FD3');
    document.getElementById("font_side").innerHTML = "width and height of the text will be = " + size + "px";
    fill('#FFFFFF');
    stroke('#FFFFFF');
    text('444', 100, 200);
    textSize(size);
}



function modelLoaded()
{
    console.log('PoseNet is initialized.')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        size = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "size = " + size);
    }
}