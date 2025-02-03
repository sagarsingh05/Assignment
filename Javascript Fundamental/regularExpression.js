function testRegex(pattern, str) {
    let regex = new RegExp(pattern);
    return regex.test(str); 
}

console.log(testRegex("hello", "hello world"));
console.log(testRegex("\\d+", "123abc"));
console.log(testRegex("JavaScript", "I love Python")); 
