var lastDay = 4;

for(var i = 1; i <= lastDay; i++) {
    if(i % 3 == 0)
    {
        console.log(i + " - medicine");
        continue;
    }

    console.log(i + " - rest");
}

console.log("=========================");

lastDay = 6;

for (var i = 1; i <= lastDay; i++) {
    if (i % 3 == 0) {
        console.log(i + " - medicine");
        continue;
    }

    console.log(i + " - rest");
}