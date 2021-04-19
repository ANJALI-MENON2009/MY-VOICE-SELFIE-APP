var speechRecognition = window.webkitSpeechRecognition ;
var recognition = new speechRecognition() ;

function start()
{
    document.getElementById("textbox").innerHTML = "" ;
    recognition.start() ;
}

recognition.onresult = function(event) {
    
    console.log(event) ;
    var content = event.results[0][0].transcript ;
    console.log(content) ;
    document.getElementById("textbox").innerHTML = content ;
    if(content=="take my selfie") {
        console.log("Take my selfie ---") ;
        speak() ;
    }
}

function speak()
{
    var synth = window.speechSynthesis ;

    speech_data = document.getElementById("textbox").value ;
    
    var utterThis = new SpeechSynthesisUtterance(speech_data) ;
    console.log(utterThis) ;

    synth.speak(utterThis) ;
    setTimeout(function() {
        takeSnapshot() ;
        save() ;
    } ,5000)  ;
}  

camera = document.getElementById("camera") ;
Webcam.set({
    width: 360,
    height: 270,
    image_format: 'jpeg' ,
    jpeg_quality: 90 
}) ;
Webcam.attach(camera) ;
function takeSnapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("output").innerHTML = '<img id="resultImage" src='+data_uri+'>' ;
    }) ;
} 
function save()
{
    link = document.getElementById("link") ;
    image = document.getElementById("resultImage").src ;
    link.href = image;
    link.click() ;
}

