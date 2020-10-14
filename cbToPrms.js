const fs = require('fs');

// promisificaton fs.readFile
const readFs = function(src) {
    return new Promise((resolve, reject) => {
        fs.readFile(src, (err, data) => {
            if (err) reject(err)
            else resolve(data);
        });
    })
}

async function loadFile(src) {

    const file = await readFs(src);
    return file;
}

loadFile('./arr.js')
    .then(d => console.log(d))