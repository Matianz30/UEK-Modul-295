const fs = require("node:fs/promises");

function leseDateiInhalt(filePath){
    return new Promise((resolve, reject) => {

        fs.readFile(filePath, 'utf8', (err, data) => {
          const length = data.length;
            resolve({ content: data, length });
        });
      });

}

leseDateiInhalt('beispiel.txt')
  .then(inhalt => {
    console.log('Die Länge des Dateiinhalts beträgt:', inhalt.length);
  })
  .catch(err => {
    console.error('Fehler beim Lesen der Datei:', err);
  });
