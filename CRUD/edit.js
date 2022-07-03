const read = require("./read")
const write = require("./write");

const books = read()
const action = process.argv[4]
let edit = () => {
    books.forEach(function(book){
        if(book.id == process.argv[3]){
            switch(action){
                case "title":
                book = book    
                book.title = process.argv[5]
              
                console.log(`The title of the book ${book.title} was edited`)
                break;
                
                case "author":
                book = book
                book.author = process.argv[5]
                  
                    console.log(`The name of the author of the book ${book.title} was edited`)
                break;
               
                case "genre":
                book = book
                book.genre = process.argv[5]
                console.log(`The genre of the book ${book.title} was edited`)
                break;
                
                case "year":
                    book = book
                    book.year = process.argv[5]
                    console.log(`The year of publication of the book ${book.title} was edited`)
                break;
               
                case "price":
                    book= book
                    book.price = process.argv[5]
                    console.log(`The price of the book ${book.title} was edited`)
                break;
                
                case "cost":
                    book = book
                    book.cost = process.argv[5]
                    console.log(`The cost of the book ${book.title} was edited`)
                break;
              
                default:
                console.log('the book was not found')
            }
       
        } 
            }
        )    
        write(books);
    }

    
    module.exports = edit; 

