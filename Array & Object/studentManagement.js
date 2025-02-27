const students = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
    { id: 3, firstName: 'Bob', lastName: 'Brown', age: 21, grade: 'A' },
];

// a. Add a Student
function addStudent(id, firstName, lastName, age, grade) {
    students.push({ id, firstName, lastName, age, grade });
}

// b. Update Student Information
function updateStudent(id, newDetails) {
    const student = students.find(student => student.id === id);
    if (student) {
        Object.assign(student, newDetails);
    } else {
        console.log('Student not found');
    }
}

// c. Delete a Student
function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    } else {
        console.log('Student not found');
    }
}

// d. List All Students
function listStudents() {
    console.log(students);
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}

// f. Calculate Average Age
function calculateAverageAge() {
    return students.reduce((sum, student) => sum + student.age, 0) / students.length;
}

// Example Usage
addStudent(4, 'Alice', 'Johnson', 23, 'B');
updateStudent(2, { age: 23, grade: 'A+' });
deleteStudent(3);
listStudents();
console.log(findStudentsByGrade('A'));
console.log(`Average Age: ${calculateAverageAge().toFixed(2)}`);
