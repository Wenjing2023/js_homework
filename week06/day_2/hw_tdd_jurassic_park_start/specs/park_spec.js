const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

describe("Park", function () {
  let park;
  beforeEach(function () {
    park = new Park("Jurassic", 15);
  });

  it("should have a name", function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic");
  });

  it("should have a ticket price", function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 15);
  });
  describe("collections", function () {
    it("should have a collection of dinosaurs", function () {
      const actual = park.collectionOfDino;
      assert.deepStrictEqual(actual, []);
    });

    it("should be able to add a dinosaur to its collection", function () {
      const dino1 = new Dinosaur("Ankylosaurus", "herbivorous", 100);
      park.addDino(dino1);
      const actual = park.amountOfDino();
      assert.deepStrictEqual(actual, 1);
    });

    it("should be able to remove a dinosaur from its collection", function () {
      const dino1 = new Dinosaur("Ankylosaurus", "herbivorous", 100);
      const dino2 = new Dinosaur("t-rex", "carnivore", 50);
      park.addDino(dino1);
      park.addDino(dino2);
      park.removeDino(dino2);
      // const actual = park.amountOfDino();
      // assert.strictEqual(actual, 1);
      const expected = [dino1];
      const actual = park.collectionOfDino;
      assert.deepStrictEqual(actual, expected);
    });

    it("should be able to find the dinosaur that attracts the most visitors", function () {
      const dino1 = new Dinosaur("Ankylosaurus", "herbivorous", 100);
      const dino2 = new Dinosaur("t-rex", "carnivore", 70);
      park.addDino(dino1);
      park.addDino(dino2);
      const actual = park.findMostPopDino();
      assert.strictEqual(actual, dino1);
    });

    it("should be able to find all dinosaurs of a particular species", function () {
      const dino1 = new Dinosaur("Ankylosaurus", "herbivorous", 100);
      const dino2 = new Dinosaur("t-rex", "carnivore", 50);
      const dino3 = new Dinosaur("t-rex", "carnivore", 70);
      park.addDino(dino1);
      park.addDino(dino2);
      park.addDino(dino3);
      const actual = park.findDinoBySpecies("t-rex");
      expected = [dino2, dino3];
      assert.deepStrictEqual(actual, expected);
    });

    it("should be able to calculate the total number of visitors per day", function () {
      const dino1 = new Dinosaur("Ankylosaurus", "herbivorous", 100);
      const dino2 = new Dinosaur("t-rex", "carnivore", 70);
      park.addDino(dino1);
      park.addDino(dino2);
      const actual = park.totalOfVisiterPerDay();
      assert.strictEqual(actual, 170);
    });

    it("should be able to calculate the total number of visitors per year", function () {
      const dino1 = new Dinosaur("Ankylosaurus", "herbivorous", 100);
      const dino2 = new Dinosaur("t-rex", "carnivore", 70);
      park.addDino(dino1);
      park.addDino(dino2);
      const actual = park.totalOfVisiterPerDay() * 365;
      assert.strictEqual(actual, 62, 050);
    });

    it("should be able to calculate total revenue for one year", function () {
      const dino1 = new Dinosaur("Ankylosaurus", "herbivorous", 100);
      const dino2 = new Dinosaur("t-rex", "carnivore", 70);
      park.addDino(dino1);
      park.addDino(dino2);
      const actual = park.totalOfVisiterPerDay() * 365 * 15;
      assert.strictEqual(actual, 930, 750);
    });
    it("should remove all dinosaurs of a particular species", function () {
      const dino1 = new Dinosaur("Ankylosaurus", "herbivorous", 100);
      const dino2 = new Dinosaur("t-rex", "carnivore", 50);
      const dino3 = new Dinosaur("t-rex", "carnivore", 70);
      park.addDino(dino1);
      park.addDino(dino2);
      park.addDino(dino3);
      const actual = park.removeAllBySpecies("t-rex");
      assert.deepStrictEqual(actual, [dino1]);
    });
  });
});
