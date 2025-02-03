function findCharacterClasses(str) {
    let digitPattern = /\d/g;
    let upperPattern = /[A-Z]/g;
    let lowerPattern = /[a-z]/g;
    let specialPattern = /[^a-zA-Z0-9]/g;

    return {
        digits: str.match(digitPattern) || [],
        uppercase: str.match(upperPattern) || [],
        lowercase: str.match(lowerPattern) || [],
        specialChars: str.match(specialPattern) || []
    };
}

console.log(findCharacterClasses("Hello123@!"));