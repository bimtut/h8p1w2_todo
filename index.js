const argv = process.argv.slice(2)
// const argv = process.argv.slice(2)
//lalu memanggil class controller
const Controller = require('./controller')

if (argv[0] === 'help' || argv[0] === undefined) {
    Controller.help()
} else if (argv[0] === 'list') {
    Controller.list()
} else if (argv[0] === 'add') {
    Controller.add(argv[1])
} else if (argv[0] === 'findById') {
    Controller.findById(argv[1])
} else if (argv[0] === 'delete') {
    Controller.delete(argv[1])
}