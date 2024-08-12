document.getElementById('submit').addEventListener('click', function() {
    const answers = {
        q1: 'b',
        q2: 'c',
        q3: 'b',
        q4: 'b',
        q5: 'c',
        q6: 'a',
        q7: 'a',
        q8: 'b',
        q9: 'b',
        q10: 'b'
    };

    let score = 0;
    for (const [question, correctAnswer] of Object.entries(answers)) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        const correctOption = document.querySelector(`input[name="${question}"][value="${correctAnswer}"]`);
        
        if (selectedOption && selectedOption.value === correctAnswer) {
            score++;
        }
        
        // Highlight the correct answer
        if (correctOption) {
            correctOption.nextElementSibling.classList.add('correct-answer');
        }
    }

    document.getElementById('result').innerText = `You scored ${score} out of ${Object.keys(answers).length}`;
});
