function getGrade(marks) {
    if (marks > 90) {
        console.log("A Grade")
    } else if (marks > 70) {
        console.log("B Grade")
    } else if (marks > 50) {
        console.log("c Grade")
    } else {
        console.log("F Grade")
    }
}

getGrade(85)