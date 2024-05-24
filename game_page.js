player1score=0
player2score=0
questionturn="player1"
answerturn="player2"
player1name=localStorage.getItem("player1_name")
player2name=localStorage.getItem("player2_name")
document.getElementById("player1_score").innerHTML=player1score
document.getElementById("player2_score").innerHTML=player2score

document.getElementById("player1_name").innerHTML=player1name+":"
document.getElementById("player2_name").innerHTML=player2name+":"

document.getElementById("player_question").innerHTML="Question turn :"+ player1name
document.getElementById("player_answer").innerHTML="Answer turn :"+ player2name

function send() {
    n1=document.getElementById("number1").value
    n2=document.getElementById("number2").value
    product=n1*n2
    question="<h4 id='word_display'>q."+n1+"x"+n2+"</h4>"
    inputbox="<br>answer:<input type='text' id='inputcheckbox'>"
checkbutton="<br><br><button class='btn btn-info' onclick='check()'>check</button>"
row=question+inputbox+checkbutton
document.getElementById("output").innerHTML=row
document.getElementById("number1").value=""
document.getElementById("number2").value=""
}

function check() {
    enteredanswer=document.getElementById("inputcheckbox").value
   
    if (product==enteredanswer) {
       if (answerturn=="player2") {
        player2score=player2score+1
        document.getElementById("player2_score").innerHTML=player2score
       } 
       else{
        player1score=player1score+1
        document.getElementById("player1_score").innerHTML=player1score
       }
    }
    
    if (questionturn=="player1") {
        questionturn="player2"
        document.getElementById("player_question").innerHTML="Question Turn:"+player2name
    }

    else{
        questionturn="player1"
        document.getElementById("player_question").innerHTML="Question Turn:"+player1name
    }

    if (answerturn=="player1") {
        answerturn="player2"
        document.getElementById("player_answer").innerHTML="Answer Turn:"+player2name
    }
    else{
        answerturn="player1"
        document.getElementById("player_answer").innerHTML="Answer Turn:"+player1name
    }

    document.getElementById("output").innerHTML=""

    
}

