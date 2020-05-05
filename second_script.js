var myVideo = document.getElementById("Video1");

function Squeeze(){
    document.getElementById("Video1").width = 320;
    document.getElementById("Video1").height = 240;
}

function Enlarge(){
    document.getElementById("Video1").setAttribute("width", "1060");
    document.getElementById("Video1").setAttribute("height", "720");
}

function Standard(){
    document.getElementById("Video1").width = 740;
    document.getElementById("Video1").height = 480;
}

function Hide_Show(){
    if(document.getElementById("Video1").style.display=="none"){
        document.getElementById("Video1").style.display="inline";
    }
    else{
        document.getElementById("Video1").style.display="none";
    }
}