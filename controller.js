const View = require('./view')
const Model = require('./model')

class Controller {
    //ga pake constructor juga gapapa karena kita akan pake static method dalam tugas ini
    //static method adalah method yang manggilnya ga usah bikin new class segala
    constructor() {

    }

    static help() {
        View.help()
    }
    static list() {
        let dataList = Model.list()
        View.list(dataList)
    }
    static add(command) {
        Model.add(command)
        Controller.list()
    }
    static findById(id) {
        let data = Model.findById(id)
        if (data != undefined) {
            View.success(data)
        } else {
            View.failed()
        }
    }
    static delete(id) {
        Model.delete(id)
        View.success(`--harusnya ini logic apakah berhasil atau gagal delete. nanti dicari`)
        Controller.list()
    }
}

module.exports = Controller