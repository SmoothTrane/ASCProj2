class Pokemon{
  constructor(name, attack, defense, health, type){
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.type = type;

  }

  takeDamage(reduceVal){
    let newHealth = this.health - reduceVal;
    if(isNaN(reduceVal)){
      return this.health;
    }
    if(newHealth < 0 ){
      newHealth = 0;
    }
    this.health = newHealth;
    return this.health;

  }
  attackOpponent(opponent){
    const damage  = this.attack - opponent.defense;
    return opponent.takeDamage(damage);

  }
}
