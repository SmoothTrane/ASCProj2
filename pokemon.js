class Pokemon{
  // class definition
  constructor(name, attack, defense, health, type){
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.type = type;
    this.startHealth = health
  }
  // if the input is not a number, return the health as is
  takeDamage(reduceVal){
    let newHealth = this.health - reduceVal;
    if(isNaN(reduceVal)){
      return this.health;
    }
    if(newHealth <=0 ){
      newHealth = 0;
    }
    this.health = newHealth;
    return this.health;
  }
  // if the opponent has a higher defense than you're attack, we minus the attack by 0
  // if the opponent has no health, we will alert the user that the opponent has been defeated
  attackOpponent(opponent){
    let damage;
    if(opponent.health <= 0){
      return `Opponent is defeated!`
    }
    if(opponent.defense > this.attack){
      damage =  1;
    }
    else{
       damage  = this.attack - opponent.defense;
    }
    return opponent.takeDamage(damage);
  }
  display(){
    return `${this.name.toUpperCase()} (${this.type.toUpperCase()}) ${this.health}/${this.startHealth}`;
  }
}
