const read = require('./read');
const write = require('./write');

const deletebook = id =>  {
    const books = read();

    write(books.filter(book => book.id != id ))

}

module.exports = deletebook