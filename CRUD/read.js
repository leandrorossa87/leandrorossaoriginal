const fs = require('fs');

function read(){
    if(fs.existsSync('./booksDataBase.json') == false){
        console.log("Creado");
        fs.writeFileSync('./booksDataBase.json', JSON.stringify([], null, 4));
    } else {
      
        return JSON.parse(fs.readFileSync('./booksDataBase.json', "utf-8"));
       
    }  
    console.log("leer");
   
}

module.exports = read;