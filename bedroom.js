function preload()
{
    bedroom_img = loadImage('bed.jpg');
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
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results)
{
    if(error) {
        console.log(error);
    }

    console.log(results);
    objects = results;
}
