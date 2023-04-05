function startClassification()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RJFg8bDlS/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    } else{
    console.log(results);
        random_number_r = Math.floor(Math.random() * 255)+1;
        random_number_g = Math.floor(Math.random() * 255)+1;
        random_number_b = Math.floor(Math.random() * 255)+1;

        document.getElementById("result_label").innerHTML = '   The Animal Is  - ' +results[0].label;
        document.getElementById("result_label").style.color = "rgb ("+random_number_r+" , "+random_number_g+" , "+random_number_b+")";

        img = document.getElementById('cat');
        img1 = document.getElementById('dog');
        img2 = document.getElementById('sheep');
        img3 = document.getElementById('cow');

        if(results[0].label == "Cat"){
        img  = 'th(1).jpeg';
        img1 = 'th.jpeg';
        img2 = 'angry-sheep-cartoon-600w-234208237.webp';
        img3 = 'vector-cute-cow-cartoon.webp';
        }else if(results[0].label == "Dog"){
            img  = 'th(1).jpeg';
            img1 = 'th.jpeg';
            img2 = 'angry-sheep-cartoon-600w-234208237.webp';
            img3 = 'vector-cute-cow-cartoon.webp';   
        }else if(results[0].label == "Cow"){
            img  = 'th(1).jpeg';
            img1 = 'th.jpeg';
            img2 = 'angry-sheep-cartoon-600w-234208237.webp';
            img3 = 'vector-cute-cow-cartoon.webp'; 
        }else {
            img  = 'th(1).jpeg';
            img1 = 'th.jpeg';
            img2 = 'angry-sheep-cartoon-600w-234208237.webp';
            img3 = 'vector-cute-cow-cartoon.webp';   
        } 
    }
}