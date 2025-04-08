// Job Application Tracker

// JobTask class manages individual job applications created by the user
class JobTask {
    constructor(company, position, stage = "Upload Resume") {
        this.company = company;
        this.position = position;
        this.stage = stage;
        this.completed = false;
    }

    // Progress through application stages
    advanceStage() {
        const stages = ["Upload Resume", "Interview", "Get Job"];
        const currentIndex = stages.indexOf(this.stage);
        if (currentIndex < stages.length - 1) {
            this.stage = stages[currentIndex + 1];
        } else {
            this.completed = true;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("jobForm");
    const jobList = document.getElementById("jobList");

    let jobTasks = [];

    // Render all job tasks
    function renderJobs() {
        jobList.innerHTML = "";

        jobTasks.forEach((task, index) => {
            const li = document.createElement("li");

            // Create task HTML
            li.innerHTML = `
                <strong>${task.company}</strong> — ${task.position}<br>
                Stage: <em>${task.stage}</em><br>
                Status: ${task.completed ? "🎉 Got the Job!" : "🚀 In Progress"}<br>
            `;

            // Create buttons
            const advanceBtn = document.createElement("button");
            advanceBtn.textContent = "Advance Stage";
            advanceBtn.disabled = task.completed;
            advanceBtn.onclick = () => {
                task.advanceStage();
                renderJobs();
            };

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "❌ Remove";
            removeBtn.onclick = () => {
                jobTasks.splice(index, 1); // Remove task by index
                renderJobs(); // Re-render list
            };

            // Append buttons
            li.appendChild(advanceBtn);
            li.appendChild(removeBtn);

            // Add to job list
            jobList.appendChild(li);
        });
    }

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const company = document.getElementById("company").value;
        const position = document.getElementById("position").value;

        const newJob = new JobTask(company, position);
        jobTasks.push(newJob); // Add new job
        renderJobs(); // Refresh list
        form.reset(); // Clear input
    });
});
