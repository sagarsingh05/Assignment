function curry(func) {
    return function(a) {
        return function(b) {
            return func(a, b);
        };
    };
}


function add(a, b) {
    return a + b;
}


const curriedAdd = curry(add);


console.log(curriedAdd(5)(10));
console.log(curriedAdd(3)(7));
