var predict_1 ="";
var predict_2 ="";
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90,
});
camera = document.getElementById("camera");
Webcam.attach('#Camera');
function take_snapshot(){
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<img id = "capture_image src = "'+ data_uri + '">';
});
}
console.log('ml5version:' , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fJrJ4X4FI/model.json',modelLoaded);
function modelLoaded(){
console.log('modelloaded');
}
function speak(){
var synth = window.speechSynthesis;
s1 = "the first prediction is " + predict_1;
s2 = "the second prediction is" + predict_2;
var utterths = new SpeechSynthesisUtterance(s1 + s2);
synth.speak(utterths);
}
function modelLoaded(){
console.log('Model Loaded!')
}
function checkie(){
img = document.getElementById('captured image');
classifier.classify(img, gotResult)
}
function gotResult(error, results){
if(error){
console.log(error);
}
else{
console.log(results);
document.getElementById("result_hand_gesture_app").innerHTML = results[0].label;
document.getElementById("result_hand_gesture_app_2").innerHTML = results[1].label;
var prediction_1 = results[0].label;
var prediction_2 = results[1].label;
speak();
}
}