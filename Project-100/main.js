var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}


camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});



function speak() {


    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis)

    setTimeout(function () {
        img_id = "img1";
        snapshot();
        speak_data = "Taking your Selfie in 10 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function () {
        img_id = "img2";
        snapshot();
        speak_data = "Taking your Selfie in 20 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

    setTimeout(function () {
        img_id = "img1";
        snapshot();
        speak_data = "Taking your Selfie in 30 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000);

}

function snapshot() {
    console.log(img_id);

    Webcam.snap(data_uri) {
        if (img_id == "img1") {
            document.getElementById("result1").innerHTML = '<img id = "img1" src = "' + data_uri + '"></img>';
        }

        if (img_id == "img2") {
            document.getElementById("result2").innerHTML = '<img id = "img2" src = "' + data_uri + '"></img>';
        }

        if (img_id == "img3") {
            document.getElementById("result3").innerHTML = '<img id = "img3" src = "' + data_uri + '"></img>';
        }
    };
}