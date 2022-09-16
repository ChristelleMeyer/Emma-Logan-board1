// javascript
let hscore = 0
let gscore = 0
let homeScore = document.getElementById(id="home-score")
let guestScore = document.getElementById(id="guest-score")
function add1PointH(){ 
    hscore = hscore + 1
    homeScore.innerHTML = hscore;
}

function add2PointsH(){ 
    hscore = hscore + 2
    homeScore.innerHTML = hscore;
}

function add3PointsH(){ 
    hscore = hscore + 3
    homeScore.innerHTML = hscore;
}
function add1PointG(){ 
    gscore = gscore + 1
    guestScore.innerHTML = gscore;
}

function add2PointsG(){ 
    gscore = gscore + 2
    guestScore.innerHTML = gscore;
}

function add3PointsG(){ 
    gscore = gscore + 3
    guestScore.innerHTML = gscore;
}

let newGame = document.getElementById(id="new-game")

function resetScore(){
    
    guestScore.innerHTML = 0
    gscore = 0
    homeScore.innerHTML = 0
    hscore = 0
    
    
}

