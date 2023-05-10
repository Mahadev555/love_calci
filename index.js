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
        if(random < 70 && random > 50){
            random = random+25;
            score.innerText = random +"%" 
        }
        else if(random <= 50 && random > 30){
            random = random+40;
            score.innerText = random +"%" 
            }
        else if(random <= 30 && random >= 0){
            random = random +65;
            score.innerText = random +"%" ;
        }
        else{
            score.innerText = random +"%" 
        }
    }


}
