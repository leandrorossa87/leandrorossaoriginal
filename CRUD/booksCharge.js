const read = require('./read');
const write = require('./write');

const booksCharge = (title, author, genre, year, coast, price) =>{

    let biblioteca = read();

    let databook = {
    id: biblioteca.length + 1,
    title: title,
    author: author,
    genre: genre,
    year: year,
    coast: coast,
    price: price
} 

biblioteca.push(databook);

write(biblioteca)

}

module.exports = booksCharge;