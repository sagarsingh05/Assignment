const student = { name: 'John', age: 21 };

// Prevent adding new properties
Object.preventExtensions(student);

// Check if student object is extensible
const extensibleStatus = Object.isExtensible(student);

// Create teacher object
const teacher = { subject: 'Math' };

// Seal the teacher object (no adding/removing properties)
Object.seal(teacher);

// Check if teacher object is sealed
const sealedStatus = Object.isSealed(teacher);

console.log(`Student Extensible: ${extensibleStatus}`);
console.log(`Teacher Sealed: ${sealedStatus}`);
