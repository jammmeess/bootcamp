function runActivity() {
  class Dog {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    bark() {
      return "Bow wow wow";
    }

    rename(new_name) {
      this.name = new_name;
    }

    set_age(age) {
      if (age > 0) {
        this.age = age;
      }
      return age;
    }
  }

  class Pitbull extends Dog {
    constructor(name, age, muscle_mass) {
      super(name, age);
      this.muscle_mass = muscle_mass;
    }
    bark() {
      return "Borf borf borf!";
    }
  }
  let dog = [];
  dog[1] = new Dog("Oreo", 2);
  console.log(dog[1].name);
  //   console.log(dog1.breed);
  console.log(dog[1].bark());
  //   dog1.rename("Cupcake");
  //   dog1.name = "Bruce";
  //   console.log(dog1.name);
  //   console.log(dog1.set_age(3));

  dog[2] = new Dog("Bato", 4);
  console.log(dog[2].name);
  //   console.log(dog2.breed);

  dog[3] = new Pitbull("Cheese", 7, 120);
  console.log(dog[3].muscle_mass);
  console.log(dog[3].bark());
}
