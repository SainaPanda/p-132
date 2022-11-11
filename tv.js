function preload()
{
    tv_img = loadImage('tv.jpg');
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center;
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult()
{
    if(error) {
        console.log(error);
    }

    console.log(results);
    objects = results;
}