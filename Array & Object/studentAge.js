const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort and find min & max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find median age
const middle = Math.floor(ages.length / 2);
const median = ages.length % 2 === 0 ? (ages[middle - 1] + ages[middle]) / 2 : ages[middle];

// Find average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

// Find age range
const ageRange = maxAge - minAge;

// Compare (min - avg) and (max - avg)
const minAvgDifference = Math.abs(minAge - averageAge);
const maxAvgDifference = Math.abs(maxAge - averageAge);

console.log(`Min Age: ${minAge}, Max Age: ${maxAge}`);
console.log(`Median Age: ${median}`);
console.log(`Average Age: ${averageAge.toFixed(2)}`);
console.log(`Age Range: ${ageRange}`);
console.log(`Min-Average Difference: ${minAvgDifference}`);
console.log(`Max-Average Difference: ${maxAvgDifference}`);
