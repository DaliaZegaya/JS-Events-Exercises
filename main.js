function printAlert () {
    alert ("hello world")
}

function printMyName () {
    console.log("Dalia Zegaya");
}

function changeColor () {
    var mySpan= document.getElementById("first_span")
    mySpan.style.color= "red"
}

function changeH1Size () {
    var myH1= document.getElementById("second_h1")
    myH1.style.fontSize= "50px"
}

function changeH2 () {
    var myH2= document.getElementById("first_h2")
    myH2.innerText= "Dalia Zeagaya"
}

function buttonFunc () {
     var userName= prompt ("enter your name")
     var x= document.getElementById("button_h1")
     x.innerText= userName
}

window.onload= function () {
    var time= new Date ()
    if (time.getHours()<12) {
        document.body.style.background= "yellow"
        var x= document.getElementById("date_h2")
        x.innerHTML= "good day"
    }
    else {
        document.body.style.background= "blue"
        var x= document.getElementById("date_h2")
        x.innerHTML= "good evening"
    }
}

window.onload= function () {
    var userAge= +prompt ("enter your age")
    if (userAge>18) {
        var x= document.getElementById("age_id")
        x.innerHTML= "welcome"
        x.style.color= "red"
    }
    else {
        var x= document.getElementById("age_id")
        x.innerHTML= "baby"
        x.style.color= "blue"   
    }
}

function greenColor () {
    var x= document.getElementById("age_id")
    x.style.color= "green"
}

function myLotto() {
    for (var i=0; i<5;i++) {
        var userNumber= +prompt("enter number between 0-56")
        var x= document.getElementById("lotto_id")
        document.write (userNumber+" ")
    }
    var rnd= Math.floor (Math.random()*55)
    document.write ("<br>"+rnd)
    if (userNumber==rnd) {
       alert ("Sucsses")
    }
    else {
        alert ("Fail")
    }
} 
