Webcam.set({
    width:350,
    height:300,
   image_format : 'png',
   png_quality:90 
});

Webcam.attach('#camera');

camera = document.getElementById("camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

});}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KXZ2TWsQq/', modelLoaded);

function modelLoaded(){
    console.log("¡modelo cargado!");
} 

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, result){
 if (error){
    console.log(error);
}else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = result[0].label;
    document.getElementById("result_object_accuracy").innerHTML = result[0].confidense.toFixed(2);
}}
