// Problem 1: Object Constructor Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// Example usage:
const person1 = new Person("John", 30);
console.log(person1.sayHello());


// Problem 2: Employee Constructor (Inheriting from Person)
function Employee(name, age, designation) {
    Person.call(this, name, age); // Call the parent constructor
    this.designation = designation;
}

// Inherit prototype from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getDetails = function () {
    return `${this.sayHello()} I work as a ${this.designation}.`;
};

// Example usage:
const emp1 = new Employee("Alice", 28, "Software Engineer");
console.log(emp1.getDetails());


// Problem 3: Calculator with Method Chaining
const Calculator = {
    result: 0,

    add(num) {
        this.result += num;
        return this;
    },

    subtract(num) {
        this.result -= num;
        return this;
    },

    multiply(num) {
        this.result *= num;
        return this;
    },

    divide(num) {
        if (num !== 0) {
            this.result /= num;
        } else {
            console.log("Error: Division by zero");
        }
        return this;
    },

    getResult() {
        return this.result;
    },

    reset() {
        this.result = 0;
        return this;
    }
};

// Example usage:
const calcResult = Calculator.add(10).subtract(3).multiply(2).divide(7).getResult();
console.log("Calculator Result:", calcResult);


// Problem 4: Shape, Circle, and Rectangle (Polymorphism)
class Shape {
    draw() {
        return "Drawing a shape";
    }
}

class Circle extends Shape {
    draw() {
        return "Drawing a circle";
    }
}

class Rectangle extends Shape {
    draw() {
        return "Drawing a rectangle";
    }
}

// Example usage:
const shapes = [new Shape(), new Circle(), new Rectangle()];
shapes.forEach(shape => console.log(shape.draw()));


// Problem 5: Polyfill for Array.includes
Array.prototype.customIncludes = function (element) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === element) {
            return true;
        }
    }
    return false;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.customIncludes(3)); // true
console.log(numbers.customIncludes(10)); // false
