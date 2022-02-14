status="";
objects=[];

function setup(){
    canvas = createCanvas(300, 301);
    canvas.center();
}

function start(){
    object.detector = ml5.object.detector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status : Object Detected";
}

function draw(){
    image(video, 0, 0, 300, 301);
    document.getElementById("Id_Of_The_Input_Box").value
    if(status != ""){
        objectDetector.detect(video ,gotResult);
        for(i = 0; i < objects.length; i++){
            document.getElementById('status').innerHTML = "Status : Object Detected",
            document.getElementById('number_of_objects').innerHTML = "number_of_objects :" + objects[i];
            
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%" + objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width ,objects[i].height);
        }

    }

} 
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
} 
