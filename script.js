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
        switch(target.areDefending){
            case true:
                damage = this.attackStat - getRandomInt(0, target.defenseStat);
                damage = damage/2;
                break;
            case false:
                damage = this.attackStat - getRandomInt(0, target.defenseStat);
                break;
        }
        target.health -= damage;
        console.log(damage);    
    }
    // defense method
    defend(){
        this.areDefending = true;
    }
}
let knight = new Type (100, 5, 15);
let wizard = new Type(100, 15, 0);
let monk = new Type(100, 10, 10)

function pickedKnight() {
    document.getElementById("type1").innerHTML = "Type: Knight";
    document.getElementById("health1").innerHTML = "HP: " + knight.health;
    document.getElementById("p1Knight").style.display = "none";
    document.getElementById("p1Wizard").style.display = "none";
    document.getElementById("p1Monk").style.display = "none";
}
function pickedWizard() {
    document.getElementById("type1").innerHTML = "Type: Wizard";
    document.getElementById("health1").innerHTML = "HP: " + wizard.health;
    document.getElementById("p1Knight").style.display = "none";
    document.getElementById("p1Wizard").style.display = "none";
    document.getElementById("p1Monk").style.display = "none";
}
function pickedMonk() {
    document.getElementById("type1").innerHTML = "Type: Monk";
    document.getElementById("health1").innerHTML = "HP: " + monk.health;
    document.getElementById("p1Knight").style.display = "none";
    document.getElementById("p1Wizard").style.display = "none";
    document.getElementById("p1Monk").style.display = "none";
}