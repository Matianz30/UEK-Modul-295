async function simuliereVerzoegerung(ms) {
    new Promise(resolve => setTimeout(() => {
        resolve()}, ms))}


async function addiereNachVerzoegerung(a, b, ms) {
    await simuliereVerzoegerung(ms);
    return a + b;
}

addiereNachVerzoegerung(3, 7, 2000);

