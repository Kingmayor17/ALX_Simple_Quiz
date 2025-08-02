function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');

    // Ensure an answer is selected
    if (!userAnswerElement) {
        feedback.textContent = "That's incorrect. Try again!";
    } else {
        const userAnswer = userAnswerElement.value;
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    }
}

// Add event listener to the submit button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
