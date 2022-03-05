Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90

});
Webcam_view = document.getElementById("Webcam_view");
 Webcam.attach('#Webcam_view');
 function captureimg() {
    Webcam.snap(function(data_url){
        document.getElementById("Captured_img").innerHTML = '<img id="catured_img" src= "'+data_url + ' ">';

    });

}
lassifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/[...]/model.json" , modelLoaded);
 