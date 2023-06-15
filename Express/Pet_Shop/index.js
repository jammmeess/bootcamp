const ex = require("express");
const fs = require("fs");
const pt = require("./pet_store");
const app = ex();

app.use(ex.json());
const pets = pt.pets;

app.get("/api/pet_store", (req, res) => {
  res.send(pets);
});

app.get("/api/pet_store/:species", (req, res) => {
  const petspecies = req.params.species.toLowerCase();
  const petList = pets.filter(
    (pet) => pet.species.toLowerCase() === petspecies
  );
  if (petList.length) {
    res.send(petList);
  } else {
    res.status(404);
    res.send("Animal Species not found!");
  }
});

app.get("/api/pets/:id", (req, res) => {
  let pet = false;
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].id == Number(req.params.id)) {
      pet = pets[i];
      break;
    }
  }

  if (pet) {
    res.send(pet);
  } else {
    res.status(404);
    res.send("Pet not found!");
  }
});

app.put("/api/pet_store", (req, res) => {
  let new_petinfo = {
    id: pets.length,
    breed: req.body.breed,
    species: req.body.species,
    name: req.body.name,
  };
  console.log(req.body);
  pets.push(new_petinfo);
  res.send(new_petinfo);
});

app.put("/api/pet_store/:id", (req, res) => {
  let pet = false;
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].id == Number(req.params.id)) {
      pet = pets[i];
      break;
    }
  }
  if (pet) {
    console.log(req.body);
    pet.species = req.body.species;
    pet.breed = req.body.breed;
    pet.name = req.body.name;
    res.send(pet);
  } else {
    res.sendStatus(404);
  }
});

app.listen(3000);
