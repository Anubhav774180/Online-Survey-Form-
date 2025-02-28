document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    let rating = document.querySelector('input[name="rating"]:checked').value;
    let suggestions = document.getElementById("suggestions").value;
    let teacher = document.getElementById("teacher").value;

    // Create feedback object
    let feedback = {
        name: name,
        email: email,
        course: course,
        rating: rating,
        suggestions: suggestions,
        teacher: teacher
    };

    // Store in Local Storage
    localStorage.setItem("studentFeedback", JSON.stringify(feedback));

    // Show Thank You Message
    document.getElementById('survey-form').classList.add('hidden');
    document.getElementById('thank-you').classList.remove('hidden');
});

function restartForm() {
    document.getElementById('thank-you').classList.add('hidden');
    document.getElementById('survey-form').classList.remove('hidden');
    document.getElementById("feedbackForm").reset();
}
