
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function takesnapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img src="+data_uri+" id='captured_img'>";
})

}
console.log("ml5 version: ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2-mbULgGP/model.json",modelloaded);

function modelloaded(){
    console.log("model loaded");

}
var prediction1="";
var prediction2="";
function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The first prediction is "+prediction1;
    speak_data2=" And the second prediction is  "+prediction2;
    var utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}