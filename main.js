song1="My heart will go on(Original Celine Dion).mp3";
song2="Summer of 69(Bryan Adams).mp3";

rightWristY=0;
leftWristY=0;

rightWristX=0;
leftWristX=0;

difference=0;
function preload()
{
    rightWrist=loadSound(song1);
    leftWrist=loadSound(song2);
}

function setup()
{
    canvas=createCanvas(348,512);
    canvas.position(211,201);

    video=createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 0, 0, 391, 293);
}

function playMusic()
{
    song.play();
}