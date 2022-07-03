const fs = require('fs');

function write(datos){

    return fs.writeFileSync("./booksDataBase.json", JSON.stringify(datos, null, 4));
}

module.exports = write;