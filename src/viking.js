// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}
// Viking
class Viking extends Soldier {
    constructor(name,health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        let result = "something went wrong..."
        if (this.health <= 0){
            result = `${this.name} has died in act of combat`;
        }else{
            result = `${this.name} has received ${damage} points of damage`;
        }
        return result;
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
  
    receiveDamage(damage){
        this.health -= damage;
        if( this.health <= 0){
            return "A Saxon has died in combat";
        }else{
            return `A Saxon has received ${damage} points of damage`
        }
    }


}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
/*
    addViking(name,health, strength){
        this.vikingArmy.push(new Viking(name,health, strength));
    }
    */
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let ataker = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length )];
        let defender = this.saxonArmy[Math.floor(Math.random() *this.saxonArmy.length )];
       
       
        if ( defender.receiveDamage(ataker.attack()) === "A Saxon has died in combat"){
            defender.receiveDamage(ataker.attack());
            this.saxonArmy.forEach(function(e){
                if(e.health <= 0 ){
                    this.saxonArmy.splice(this.saxonArmy.indexOf(e),1);
                }
            })
        }else{
            defender.receiveDamage(ataker.strength);
        }
        this.showStatus();
        return result;
        
    }
    saxonAttack(){

    }
    showStatus(){
        let text;
        if (this.saxonArmy.length === 0){
            text = "Vikings have won the war of the century!";
        }else if (this.vikingArmy.length === 0){
            text = "Saxons have fought for their lives and survived another day...";
        }else{
            text = "Vikings and Sazons are still in the thick of battle.";
        }
        return text;
    }
}
 
