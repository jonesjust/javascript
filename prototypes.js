const animal = {
    dna: 123,
    legs: {
        front: 2, back: 2
    },
    sleep() {
        console.log('zzz')
    },
    eat() {
        console.log('🍽️')
    },
};

const dog = {
    bark() {
        console.log('woof');
    }
};

Object.setPrototypeOf(dog, animal);

const p1 = Object.getPrototypeOf(animal);
const p2 = Object.getPrototypeOf(p1);
console.log(p1);
console.log(p2);

animal.sleep();
dog.sleep();
dog.eat();

console.log(dog.dna);
console.log( Object.getPrototypeOf(dog) );

