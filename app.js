const read = require('./CRUD/read');
const write = require('./crud/write');
const organized = require('./CRUD/organized');
const delete1 = require('./CRUD/delete');
const create = require('./CRUD/booksCharge')
const edit = require('./CRUD/edit');

let accion = process.argv[2];
let id = process.argv[3];


switch (accion){

    case 'read':
        organized(),
     console.log(read());
    break;
    
    case 'new':
    create(process.argv[3],
           process.argv[4],
           process.argv[5],
           process.argv[6],
           process.argv[7],
           process.argv[8]),
           organized();
           console.log('book loaded into database')
        break;
    
        case 'delete' : 
        delete1(process.argv[3]);
        console.log(`the book with the id ${process.argv[3]} was deleted`);
        organized()
        break;

        case 'edit':
            edit();
           break;
    default:
     console.log('action not recognized')

}