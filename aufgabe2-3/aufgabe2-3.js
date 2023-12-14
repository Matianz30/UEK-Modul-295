async function simuliereVerzoegerung(ms) {
    await new Promise(resolve => setTimeout(() => {
        resolve()}, ms))}


async function addiereNachVerzoegerung(a, b, ms) {
    await simuliereVerzoegerung(ms);
    let ergebnis = a + b;
    console.log("Das Ergebnis nach der Verzögerung beträgt: ", ergebnis);
}

// Aufruf der Funktion
addiereNachVerzoegerung(3, 7, 2000);

