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

const max = new Gladiator("Maximus", "Trident");
console.log(max.name);
console.log(max.weapon);

class Arena {
  constructor(name, gladiators) {
    this.name = capitalize(name);
    this.gladiators = [];

  }
}
