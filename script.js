function showResult() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
        q4: document.querySelector('input[name="q4"]:checked')
    };

    if (!answers.q1 || !answers.q2 || !answers.q3 || !answers.q4) {
        alert("Please answer all questions!");
        return;
    }

    let score = {
        casual: 0,
        classic: 0,
        trendy: 0,
        relaxed: 0
    };

    score = calculateScore(answers.q1.value, score);
    score = calculateScore(answers.q2.value, score);
    score = calculateScore(answers.q3.value, score);
    score = calculateScore(answers.q4.value, score);

    let result = determineStyle(score);

    document.getElementById('fashion-style').textContent = result;
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}

function calculateScore(answer, score) {
    if (answer === "1") {
        score.casual++;
    } else if (answer === "2") {
        score.classic++;
    } else if (answer === "3") {
        score.trendy++;
    } else {
        score.relaxed++;
    }
    return score;
}

function determineStyle(score) {
    const highestScore = Math.max(score.casual, score.classic, score.trendy, score.relaxed);
    if (score.casual === highestScore) {
        return "Casual Chic";
    } else if (score.classic === highestScore) {
        return "Classic Elegance";
    } else if (score.trendy === highestScore) {
        return "Trendy Fashionista";
    } else {
        return "Relaxed Comfort";
    }
}