function outerFunction(outerParam) {
    let outerVariable = "Hello from outer function!";

    return function innerFunction() {
        console.log(`Outer Param: ${outerParam}`);
        console.log(`Outer Variable: ${outerVariable}`);
    };
}

const myClosure = outerFunction("Passed Parameter");
myClosure();