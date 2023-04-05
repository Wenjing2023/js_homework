const Dinosaur = require("../models/dinosaur.js");
const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDino = [];
};
Park.prototype.amountOfDino = function () {
  return this.collectionOfDino.length;
};
Park.prototype.addDino = function (dinosaur) {
  this.collectionOfDino.push(dinosaur);
};
Park.prototype.removeDino = function (dinosaur) {
  const indexOfDino = this.collectionOfDino.indexOf(dinosaur);
  this.collectionOfDino.splice(indexOfDino, 1);
};
Park.prototype.findMostPopDino = function () {
  // let mostPop = this.collectionOfDino[0]
  // for (let dinosaur of this.collectionOfDino){
  //     if (dinosaur.guestsAttractedPerDay > mostPop.guestsAttractedPerDay){
  //         mostPop = dinosaur;
  //     }
  // }
  // return mostPop
  let mostPopular = [];
  for (var dino of this.collectionOfDino) {
    mostPopular.push(dino.guestsAttractedPerDay);
  }
  const index = mostPopular.indexOf(Math.max(mostPopular));
  return this.collectionOfDino[index];
};
Park.prototype.findDinoBySpecies = function (species) {
  let dinoSameSpecies = [];
  for (var dino of this.collectionOfDino) {
    if ((dino.species = species)) {
      dinoSameSpecies.push(dino);
    }
  }
  return dinoSameSpecies;
};
Park.prototype.totalOfVisiterPerDay = function () {
  let total = 0;
  for (var dino of this.collectionOfDino) {
    total += dino.guestsAttractedPerDay;
  }
  return total;
};
Park.prototype.removeAllBySpecies = function (species) {
  for (var dino of this.collectionOfDino) {
    if ((dino.species = species)) {
      const index = this.collectionOfDino.indexOf(dino);
      this.collectionOfDino.splice(index, 1);
    }
  }
};
module.exports = Park;
