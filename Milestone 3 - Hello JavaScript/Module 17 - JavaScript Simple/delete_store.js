var fileName = "result.mp4";

if ((fileName[0] == '#') || (fileName.includes('.pdf')) || (fileName.includes('.docx'))) {
    console.log("Store");
}
else {
    console.log('Delete');
}

console.log("=========================");

var fileName1 = "#result";

if ((fileName1.startsWith('#')) || (fileName1.endsWith('.pdf')) || (fileName1.endsWith('.docx'))) {
    console.log("Store");
}
else {
    console.log('Delete');
}