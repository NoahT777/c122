x = 0;
y = 0;
width = 0;
height = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function setup(){

    canvas = createCanvas(900, 600);

}

function start(){

    document.getElementById("status").innerHTML = "System is listening, please speak.";
    recognition.start();

}

recognition.onresult = function(event){

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized as : " + content;

    if(content == "Circle"){

        x = Math.floor(Math.random() * 850);
        y = Math.floor(Math.random() * 550);

        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";

    }

    if(content == "rectangle"){

        x = Math.floor(Math.random() * 850);
        y = Math.floor(Math.random() * 550);

        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rect = "set";

    }

}

function draw(){

    if(draw_circle == "set"){

        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle has been drawn.";
        draw_circle = "";

    }

    if(draw_rect == "set"){

        width = Math.floor(Math.random() * 300);
        height = Math.floor(Math.random() * 200);
        rect(x,y,width,height);
        document.getElementById("status").innerHTML = "Rectangle has been drawn.";
        draw_rect = "";

    }

}