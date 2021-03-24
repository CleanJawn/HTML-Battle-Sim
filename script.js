// function for generating a random int. between 0 and the defending players defense stat.
// that number will be subtracted by attackers attack stat to calculate damage taken
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

// creating template for character types
class Type {
    constructor(health, attackStat, defenseStat, areDefending){
        this.health = health;
        this.attackStat = attackStat;
        this.defenseStat = defenseStat;
        this.areDefending = false;
    }
    // attack method
    attack(target){
        let damage;
        let random = getRandomInt(0, target.defenseStat)/2;
        switch(target.areDefending){
            case true:
                damage = this.attackStat - random;
                damage = damage/2;
                break;
            case false:
                damage = this.attackStat - random;
                break;
        }
        if (damage < 0){
            damage = 0;
        }
        target.health -= damage;;    
    }
    // defense method
    defend(){
        this.areDefending = true;
    }
}
let knight1 = new Type (50, 5, 15);
let wizard1 = new Type(50, 15, 0);
let monk1 = new Type(50, 10, 10);
let knight2 = new Type (50, 5, 15);
let wizard2 = new Type(50, 15, 0);
let monk2 = new Type(50, 10, 10);

// player one chooses type
function pickedKnight1() {
    document.getElementById("type1").innerHTML = "Type: Knight";
    document.getElementById("health1").innerHTML = "HP: " + knight1.health;
    document.getElementById("p1Knight").style.display = "none";
    document.getElementById("p1Wizard").style.display = "none";
    document.getElementById("p1Monk").style.display = "none";
}
function pickedWizard1() {
    document.getElementById("type1").innerHTML = "Type: Wizard";
    document.getElementById("health1").innerHTML = "HP: " + wizard1.health;
    document.getElementById("p1Knight").style.display = "none";
    document.getElementById("p1Wizard").style.display = "none";
    document.getElementById("p1Monk").style.display = "none";
}
function pickedMonk1() {
    document.getElementById("type1").innerHTML = "Type: Monk";
    document.getElementById("health1").innerHTML = "HP: " + monk1.health;
    document.getElementById("p1Knight").style.display = "none";
    document.getElementById("p1Wizard").style.display = "none";
    document.getElementById("p1Monk").style.display = "none";
}

// player 2 chooses type
function pickedKnight2() {
    document.getElementById("type2").innerHTML = "Type: Knight";
    document.getElementById("health2").innerHTML = "HP: " + knight2.health;
    document.getElementById("p2Knight").style.display = "none";
    document.getElementById("p2Wizard").style.display = "none";
    document.getElementById("p2Monk").style.display = "none";
}
function pickedWizard2() {
    document.getElementById("type2").innerHTML = "Type: Wizard";
    document.getElementById("health2").innerHTML = "HP: " + wizard2.health;
    document.getElementById("p2Knight").style.display = "none";
    document.getElementById("p2Wizard").style.display = "none";
    document.getElementById("p2Monk").style.display = "none";
}
function pickedMonk2() {
    document.getElementById("type2").innerHTML = "Type: Monk";
    document.getElementById("health2").innerHTML = "HP: " + monk2.health;
    document.getElementById("p2Knight").style.display = "none";
    document.getElementById("p2Wizard").style.display = "none";
    document.getElementById("p2Monk").style.display = "none";
}
