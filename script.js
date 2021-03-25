// function for generating a random int. between 0 and the defending players defense stat.
// that number will be subtracted by attackers attack stat to calculate damage taken
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

// creating template for character types
class Type {
    constructor(health, attackStat, defenseStat, areDefending, areWindingUp){
        this.health = health;
        this.attackStat = attackStat;
        this.defenseStat = defenseStat;
        this.areDefending = false;
        this.areWindingUp = false;
    }
    // wind up method
    windup(){
        this.areWindingUp = true;
    }
    // attack method
    attack(target){
        let damage;
        let random = getRandomInt(0, target.defenseStat)/2;
        switch(target.areDefending){
            case true:
                damage = this.attackStat;
                
                damage = damage/2;
                break;
            case false:
                damage = this.attackStat;
                break;
        }
        switch(this.areWindingUp){
            case true:
                damage = damage * 2;
                break;
            case false:
                damage = damage;
                break;
        }
        if (damage < 0){
            damage = 0;
        }
        target.health -= damage;;
        target.areDefending = false;
        this.areWindingUp = false;   
        console.log(damage);
    }
    // defense method
    defend(target){
        this.areDefending = true;
        target.areDefending = false;
        this.areWindingUp = false;
    }
}

//create all possible character types
let knight1 = new Type (100, 5, 15);
let wizard1 = new Type(100, 15, 0);
let monk1 = new Type(100, 10, 10);
let knight2 = new Type (100, 5, 15);
let wizard2 = new Type(100, 15, 0);
let monk2 = new Type(100, 10, 10);
let p1;
let p2;

//check if both players have choosen types
var charChosen = 0;
function checkPlayers(){
    if (charChosen == 2){
        turn();
    }
}

// player one chooses type
function pickedKnight1() {
    document.getElementById("type1").innerHTML = "Type: Knight";
    document.getElementById("health1").innerHTML = "HP: " + knight1.health;
    document.getElementById("p1Knight").style.display = "none";
    document.getElementById("p1Wizard").style.display = "none";
    document.getElementById("p1Monk").style.display = "none";
    charChosen++;
    checkPlayers();
    p1 = knight1;
}
function pickedWizard1() {
    document.getElementById("type1").innerHTML = "Type: Wizard";
    document.getElementById("health1").innerHTML = "HP: " + wizard1.health;
    document.getElementById("p1Knight").style.display = "none";
    document.getElementById("p1Wizard").style.display = "none";
    document.getElementById("p1Monk").style.display = "none";
    charChosen++;
    checkPlayers();
    p1 = wizard1;
}
function pickedMonk1() {
    document.getElementById("type1").innerHTML = "Type: Monk";
    document.getElementById("health1").innerHTML = "HP: " + monk1.health;
    document.getElementById("p1Knight").style.display = "none";
    document.getElementById("p1Wizard").style.display = "none";
    document.getElementById("p1Monk").style.display = "none";
    charChosen++;
    checkPlayers();
    p1 = monk1;
}

// player 2 chooses type
function pickedKnight2() {
    document.getElementById("type2").innerHTML = "Type: Knight";
    document.getElementById("health2").innerHTML = "HP: " + knight2.health;
    document.getElementById("p2Knight").style.display = "none";
    document.getElementById("p2Wizard").style.display = "none";
    document.getElementById("p2Monk").style.display = "none";
    charChosen++;
    checkPlayers();
    p2 = knight2;
}
function pickedWizard2() {
    document.getElementById("type2").innerHTML = "Type: Wizard";
    document.getElementById("health2").innerHTML = "HP: " + wizard2.health;
    document.getElementById("p2Knight").style.display = "none";
    document.getElementById("p2Wizard").style.display = "none";
    document.getElementById("p2Monk").style.display = "none";
    charChosen++;
    checkPlayers();
    p2 = wizard2
}
function pickedMonk2() {
    document.getElementById("type2").innerHTML = "Type: Monk";
    document.getElementById("health2").innerHTML = "HP: " + monk2.health;
    document.getElementById("p2Knight").style.display = "none";
    document.getElementById("p2Wizard").style.display = "none";
    document.getElementById("p2Monk").style.display = "none";
    charChosen++;
    checkPlayers();
    p2 = monk2;
}

// indicates players turn 
let player1Turn = true;
function turn(){
    if (player1Turn == true){
        player1Turn = false;
        turnOne();
    }
    else if (player1Turn == false){
        player1Turn = true;
        turnTwo();
    }
}

function turnOne(){
    document.getElementById("windup2").style.display = "none";
    document.getElementById("attack2").style.display = "none";
    document.getElementById("defend2").style.display = "none";
    document.getElementById("windup1").style.display = "inline";
    document.getElementById("attack1").style.display = "inline";
    document.getElementById("defend1").style.display = "inline";
}
function turnTwo(){
    document.getElementById("windup1").style.display = "none";
    document.getElementById("attack1").style.display = "none";
    document.getElementById("defend1").style.display = "none";
    document.getElementById("windup2").style.display = "inline";
    document.getElementById("attack2").style.display = "inline";
    document.getElementById("defend2").style.display = "inline";
}

//execute player move
function p1WindUp(){
    p1.windup;
}
function p1Attack(){
    p1.attack(p2);
    document.getElementById("health2").innerHTML = p2.health;
}
function p1Defend(){
    p1.defend(p2);
}
function p2WindUp(){
    p2.windup
}
function p2Attack(){
    p2.attack(p1);
    document.getElementById("health1").innerHTML = p1.health;
}
function p1Defend(){
    p2.defend(p1);
}

//check player health
function checkHealth(){

}