// Simple greeting based on time of day
document.addEventListener("DOMContentLoaded", function () {
    const greetBtn = document.getElementById("greetBtn");
    const greetMsg = document.getElementById("greetMsg");

    if (greetBtn && greetMsg) {
        greetBtn.addEventListener("click", function () {
            const now = new Date();
            const hour = now.getHours();
            let msg = "";

            if (hour < 12) {
                msg = "Good Morning! Have a productive day.";
            } else if (hour < 18) {
                msg = "Good Afternoon! Keep learning.";
            } else {
                msg = "Good Evening! Don't forget to take a break.";
            }

            greetMsg.textContent = msg;
        });
    }
});
