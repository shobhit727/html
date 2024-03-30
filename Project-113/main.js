function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 40, 40, 560, 400);

    strokeWeight(5);
    stroke(0, 200, 0);
    line(40, 40, 40, 440);

    strokeWeight(5);
    stroke(0, 200, 0);
    line(40, 40, 600, 40);

    strokeWeight(5);
    stroke(0, 200, 0);
    line(600, 40, 600, 440);

    strokeWeight(5);
    stroke(0, 200, 0);
    line(40, 440, 600, 440);

    stroke(200, 0, 0);
    strokeWeight(20);
    point(40, 40);

    stroke(200, 0, 0);
    strokeWeight(20);
    point(40, 440);

    stroke(200, 0, 0);
    strokeWeight(20);
    point(600, 40);

    stroke(200, 0, 0);
    strokeWeight(20);
    point(600, 440);
}

function take_snapshot() {
    save('photo.jpg');
}