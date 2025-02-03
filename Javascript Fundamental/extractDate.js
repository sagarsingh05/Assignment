function extractDateComponents(str) {
    let datePattern = /(\d{2})-(\d{2})-(\d{4})/;
    let match = str.match(datePattern);

    if (match) {
        return {
            day: match[1],
            month: match[2],
            year: match[3]
        };
    } else {
        return "No valid date found!";
    }
}

console.log(extractDateComponents("Today is 15-08-2023."));
console.log(extractDateComponents("The event is on 01-01-2025."));
console.log(extractDateComponents("No date here!"));
