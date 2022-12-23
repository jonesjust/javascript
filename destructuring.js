const dog = {
    name: 'Kopa',
    age: 5,
    bark() {
        console.log('woof');
    }
}

const { name: firtName, age } = dog;
// const name = dog.name;
// const age = dog.age;

console.log(firtName);

const arr = ['foo', 'bar', 'baz'];

const [a, b, c] = arr;

// const c = arr[2];

console.log(a, b, c);
// console.log(c);