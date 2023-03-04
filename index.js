function love(){
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var score = document.getElementById("score1");
    if(name1.length<=2){
        alert("Enter at least 3 character");
    }
    else if (name2.length<=2){
        alert("Enter at least 3 character");
    }
    else{
        var random = Math.floor(Math.random()*100);
        score.innerText = random +"%"
    }
}

