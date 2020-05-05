function runCode(){
    alert("hello world");
}

function ShowDate(){
    document.getElementById('Date').innerHTML = Date();
}

function ClearDate(){
    document.getElementById('Date').innerHTML = "";
}

function ChangeColor(){
    document.getElementById('main').style.color='red';
}

var attempt = 3;

function Validate(){
    var username=document.getElementById("user");
    var password=document.getElementById("psw");

    if(username.value=="user" && password.value=="password"){
        return true;
    }
    else{
        attempt=attempt-1;
        alert("you have left "+attempt+" attempts");
        if(attempt==0){
            document.getElementById("user").disabled= true;
            document.getElementById("psw").disabled = true;
            document.getElementById("log_in").disabled = true;
    }
    return false;
}
}

function resett(){
    attempt=3;
    document.getElementById("user").disabled= false;
    document.getElementById("psw").disabled = false;
    document.getElementById("log_in").disabled = false;
}

