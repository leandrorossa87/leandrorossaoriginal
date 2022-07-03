const read = require('./read');
const write = require('./write');

function organizeId(){
let idBook = read();
for (let i = 1; i < idBook.length; i++){
if(idBook[i].id){
    idBook[i].id = i + 1
}
}

write(idBook);
}



module.exports = organizeId;