console.log("script loaded");

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//console.log(capitalize("partytimebro"));

//create gladiator class
class Gladiator {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
}

//instantiate new gladiator
//const max = new Gladiator("Maximus", "Trident");
//const titus = new Gladiator("Titus", "Spear");
//const andronicus = new Gladiator("Andronicus", "Club");
//console.log(max.name);
//console.log(max.weapon);
//console.log(max)

//create arena class
class Arena {
  constructor(name) {
    this.name = capitalize(name);
    this.gladiators = [];
  }
  addGladiator(newGlad) {
    if (this.gladiators.length <= 1) {
      this.gladiators.push(newGlad);
    } else {
      this.gladiators.splice(0, 1);
      this.gladiators.push(newGlad);
    }
  }
  fight() {
    if (this.gladiators.length <= 1) {
      console.log("Not Enough Gladiators!");
    } else if (this.gladiators[0].weapon === this.gladiators[1].weapon){
      console.log("both lose")
      this.gladiators.splice(0, 2);
    } else if (this.gladiators[0].weapon === "Trident" && this.gladiators[1].weapon === "Spear") {
      console.log(`${this.gladiators[0].name} wins!`);
      this.gladiators.splice(1, 1);
    } else if (this.gladiators[0].weapon === "Trident" && this.gladiators[1].weapon === "Club") {
      console.log(`${this.gladiators[1].name} wins!`);
      this.gladiators.splice(0, 1);
    } else if (this.gladiators[0].weapon === "Spear" && this.gladiators [1]. weapon === "Club") {
      console.log(`${this.gladiators[0].name} wins!`);
      this.gladiators.splice(1, 1);
    } else if (this.gladiators[0].weapon === "Spear" && this.gladiators [1]. weapon === "Trident") {
      console.log(`${this.gladiators[1].name} wins!`);
      this.gladiators.splice(0, 1);
    } else if (this.gladiators[0].weapon === "Club" && this.gladiators [1]. weapon === "Trident") {
      console.log(`${this.gladiators[0].name} wins!`);
      this.gladiators.splice(1, 1);
    } else if (this.gladiators[0].weapon === "Club" && this.gladiators [1]. weapon === "Spear") {
      console.log(`${this.gladiators[1].name} wins!`);
      this.gladiators.splice(0, 1);
    }
  }

}

//let dome = new Arena ("colliseum");
//console.log(dome);
//dome.addGladiator(titus);
//dome.addGladiator(andronicus);
//dome.addGladiator(titus);
//console.log(dome);
//dome.fight();
//console.log(dome);