function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true, video:false});
    classifier =ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/KfsWnnYgQ/model.json", modelReady);

}

dog=0;
cat=0;


function modelReady(){
    classifier.classify(gotResults);

}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear- "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb( " +random_number_r+ "," +random_number_g+ "," +random_number_r+")";
        document.getElementById("result_confidence").style.color="rgb( "+random_number_r+","+random_number_g+","+random_number_r+")";
    }

    img= document.getElementById('Hear');
    

    if (results[0].label== "Barking"){
        img.src="cute_dog.webp";
    }
   
    else if(results[0].label== "Meow"){
        img.src="the_cat_2d_by_alisadi.jpg";
            
    }
    else{
img.src="source.gif";
    }
   
}