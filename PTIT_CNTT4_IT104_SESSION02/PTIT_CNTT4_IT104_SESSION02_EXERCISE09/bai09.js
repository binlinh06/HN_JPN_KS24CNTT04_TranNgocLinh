const student = {
    name: "Dev",
    age: 20,
    listSub: [
        { subject: "Math", score: 9 },
        { subject: "English", score: 7.5 },
        { subject: "Physics", score: 6 },
        { subject: "Literature", score: 8.5 }
    ]
};
function getStudentSummary(student) {
    let total = 0;
    for (let i = 0; i < student.listSub.length; i++) {
        total += student.listSub[i].score;
    }
    const avg = total / student.listSub.length;
    let title = "";
    if (avg >= 8.5) {
        title = "Hoc sinh good"
    } else if (avg >= 7) {
        title = "Hoc sinh kha"
    } else if (avg >= 5) {
        title = "Hoc sinh TB"
    } else if (avg < 5) {
        title = "Hoc sinh yeu"
    }
    let best = student.listSub[0];
    let worst = student.listSub[0];
    for (let i = 1; i < student.listSub.length; i++) {
        let mon = student.listSub[i]
        if (mon.score > best.score) {
            best = mon;
        }
        if (mon.score < worst.score) {
            worst = mon
        }
    }
    return `${student.name} is ${student.age} years old.\n` +
        `Average score: ${avg} -> ${title}\n` +
        `Best subject: ${best.subject} (${best.score})\n` +
        `Weakest subject: ${worst.subject} (${worst.score})`;
}
console.log(getStudentSummary(student));
