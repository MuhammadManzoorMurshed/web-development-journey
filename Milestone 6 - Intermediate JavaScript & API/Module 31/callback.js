function pakhiBhai(callMeBack, patro, patri) {
    console.log('callMeBack parameter: ', callMeBack);
    console.log('patro parameter: ', patro);
    console.log('patri parameter: ', patri);

    if(patri) {
        // console.log(callMeBack);
        callMeBack(patro);

    }
    else {
        console.log('Tor kopale biya nai.');
    }
}

function callSomeone(person) {
    console.log('Calling', person);
}

// callSomeone('Jodu');

pakhiBhai(callSomeone, 'Jodu', 'Miss Modu');