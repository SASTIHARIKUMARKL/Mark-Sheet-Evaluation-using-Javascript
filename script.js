function calculate() {
    let totalMarks = 0;
    let isPass = true;
    const passMarkTheory = 25; 
    const passMarkPractical = 10; 
    const maxTotalMarks = 500; 

    for (let i = 1; i <= 5; i++) {
        const theoryMarks = parseFloat(document.getElementById(`theory${i}`).value);
        const practicalMarks = parseFloat(document.getElementById(`practical${i}`).value);
        const total = theoryMarks + practicalMarks;

        document.getElementById(`total${i}`).textContent = total;
        totalMarks += total;

        if (theoryMarks < passMarkTheory || practicalMarks < passMarkPractical) {
            isPass = false;
        }
    }

    const percentage = (totalMarks / maxTotalMarks) * 100;
    let grade = '';

    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B+';
    } else if (percentage >= 60) {
        grade = 'B';
    } else if (percentage >= 50) {
        grade = 'C+';
    } else if (percentage >= 40) {
        grade = 'C';
    } else {
        grade = 'F';
        isPass = false;
    }
    
    document.getElementById('finalTotal').textContent = `${totalMarks}`;
    document.getElementById('percentage').textContent = `${percentage.toFixed(2)}%`;
    document.getElementById('grade').textContent = `${grade}`;
    document.getElementById('passFail').textContent = isPass ? 'Pass' : 'Fail';
}
