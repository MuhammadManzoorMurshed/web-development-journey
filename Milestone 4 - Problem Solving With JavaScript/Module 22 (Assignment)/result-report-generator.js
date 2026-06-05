console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12, 87]));
console.log(resultReport([99]));
console.log(resultReport(100));

function resultReport(marks) {
    if (Array.isArray(marks) == false) {
        return 'Invalid';
    }

    let pass = 0;
    let fail = 0;
    let totalNumber = 0;
    const finalReport = {};

    for (const subjecMarks of marks) {
        if (subjecMarks < 40) {
            fail++;
        }
        else {
            pass++;
        }

        totalNumber += subjecMarks;
    }

    if (totalNumber == 0) {
        finalReport.finalScore = 0;
    }
    else {
        finalReport.finalScore = Math.round(totalNumber / marks.length);
    }
    finalReport.pass = pass;
    finalReport.fail = fail;

    return finalReport;
}
