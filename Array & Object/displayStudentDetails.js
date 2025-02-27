const student = {
    name: "Alice",
    age: 25,
    major: "Computer Science",
    GPA: 4.5,
    isEnrolled: true
};

function displayStudentInfo(studentObj) {
    for (let property in studentObj) {
        console.log(`property: ${property}, value: ${studentObj[property]}`);
    }
}

// Call the function
displayStudentInfo(student);
