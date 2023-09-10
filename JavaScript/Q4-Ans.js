function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`name: ${this.name} and age: ${this.age}`);
};

const person = new Person("xxx", 25)
person.greet()