class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} as Dog moved ${distanceInMeters}m.`);
  }
}

let dog = new Dog("myDog");
dog.move(50);