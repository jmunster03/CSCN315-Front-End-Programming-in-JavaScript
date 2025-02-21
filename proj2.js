document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); //Prevents the page from reloading

        //Get input values
        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();
        const hobby = document.getElementById("hobby").value.trim();

        //Error spans
        const nameError = document.getElementById("nameError");
        const ageError = document.getElementById("ageError");
        const hobbyError = document.getElementById("hobbyError");

        //Reset error messages
        nameError.textContent = "";
        ageError.textContent = "";
        hobbyError.textContent = "";

        let isValid = true;

        //Error messages
        if (!name) {
            nameError.textContent = "Name cannot be empty.";
            isValid = false;
        }

        if (!age || isNaN(age) || age <= 0) {
            ageError.textContent = "Please enter a valid age.";
            isValid = false;
        }

        if (!hobby) {
            hobbyError.textContent = "Hobby cannot be empty.";
            isValid = false;
        }

        if (!isValid) {
            console.warn("Invalid input detected.");
            return;
        }

        //Calculations for birth year
        const birthYear = new Date().getFullYear() - parseInt(age, 10) - 1;
        const ageInMonths = age * 12;

        //Interaction message
        const messages = [
            "Keep chasing your dreams!",
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        //Result + greeting and messages
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<p>Hello ${name}, you are ${age} years old.</p>
                               <p>You were born in the year ${birthYear}.</p>
                               <p>That means you are about ${ageInMonths} months old!</p>
                               <p>Your favorite hobby is ${hobby}. That sounds fun!</p>
                               <p>${randomMessage}</p>`;

        //Log data to the console
        console.log(`User Input: Name - ${name}, Age - ${age}, Hobby - ${hobby}`);
        console.log(`Calculated: Birth Year - ${birthYear}, Age in Months - ${ageInMonths}`);
    });
});
