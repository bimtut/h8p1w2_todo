class Model {
    constructor(id, task, status, completedAt) {//ini nanti aku rubah karena beneran deh ini bukan todolist jatohnya. tapi malah bikin database
        //kan nanti kita mau bikin ceklist kan
        this.id = id
        this.task = task
        this.status = status || false //ini hanya untuk simulasi input dengan object literal.
        this.completedAt = completedAt || 0 // ada 2 opsi input agar inputan memiliki nilai default
    }

    static help() {
        console.log('hjfgskfb')
    } 
    static list() { //pada method ini dibutuhkan melakukan method lain untuk mendukung biar method list jalan
        return Model.parseData()
    }
    static readData() {//output method ini adalah array of string object. selanjutnya perlu di-parse agar lebih mudah dibaca
        const fs = require('fs')
        let data = fs.readFileSync('./data.json', 'utf8')
        return data
    }
    static parseData() {//dalam method ini kita mem-parse outputan dari readData dengan JSON.parse sehingga outputnya adalah array of object namun berupa object yang sesungguhnya
        let data = JSON.parse(Model.readData())
        for (let i = 0; i < data.length; i++) {//selanjutnya outputan dari let data dijadikan array of object literral yang diambil dari class model
            data[i] = new Model(data[i].id, data[i].task, data[i].status, data[i].completedAt)
        }
        return data
    }
    static add(command) {
        let data = Model.parseData() //file json yang ada dipanggil dulu. selanjutnya baru diinput data baru
        data.push(new Model(data[data.length-1].id+1, command)) //setelah data ditambahkan/push, selanjutnya data di-save
        Model.save(JSON.stringify(data, null, 3)) //maka buatlah save method jika belum
        //BIMA PELAJARI APA ITU JSON STRINGIFY
        //dan inget kita bikin todo yg baru yang kontennya beneran todo list nanti
        // return data
    }

    static save(toSave) {
        const fs = require('fs')
        fs.writeFileSync('./data.json', toSave)
    }
    static findById(id) {
        let data = Model.parseData()
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                return data[i]
            }
        }
    }
    static delete(id) {
        let data = Model.parseData()
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                data.splice(i,1)
                // data.pop()
                // console.log('holaaa')
            }
        }
        Model.save(JSON.stringify(data, null, 3))
    }
}

// console.log(Model.parseData())
module.exports = Model