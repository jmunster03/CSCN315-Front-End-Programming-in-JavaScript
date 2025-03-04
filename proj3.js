//Jordan Munster JS 3

//Array of employee work hours for a week
const workHours = [8, 7.5, 9, 6, 8.5, 5, 0];

//Calculate total and average work hours using a for loop
let totalHours = 0;
for (let i = 0; i < workHours.length; i++) {
    totalHours += workHours[i];
}
const averageHours = totalHours / workHours.length;

//Determine work performance category
let performanceCategory;
if (averageHours >= 8) {
    performanceCategory = "Excellent";
} else if (averageHours >= 6) {
    performanceCategory = "Good";
} else if (averageHours > 0) {
    performanceCategory = "Needs Improvement";
} else {
    performanceCategory = "No Work Recorded";
}

//Work message using switch statement
let workMessage;
switch (performanceCategory) {
    case "Excellent":
        workMessage = "Great job! You're maintaining a strong work ethic.";
        break;
    case "Good":
        workMessage = "You're doing well, but there’s room for improvement.";
        break;
    case "Needs Improvement":
        workMessage = "Please try increasing your work hours to meet expectations.";
        break;
    case "No Work Recorded":
        workMessage = "No hours logged this week. Please make sure you are tracking time.";
        break;
    default:
        workMessage = "Status unknown.";
}

//Results
console.log(`Total Work Hours: ${totalHours.toFixed(2)} hours`);
console.log(`Average Daily Hours: ${averageHours.toFixed(2)} hours`);
console.log(`Performance Category: ${performanceCategory}`);
console.log(`Work Message: ${workMessage}`);
