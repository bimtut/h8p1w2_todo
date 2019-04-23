class View {
    constructor() {}

    static help() {
        console.log(`        $ node todo.js help                     # menampilkan command apa saja yang tersedia
        $ node todo.js list                     # Melihat daftar TODO
        $ node todo.js add <task_content>       # Menambahkan TODO ke dalam list
        $ node todo.js findById <task_id>       # Melihat detail TODO sesuai 'task_id' nya
        $ node todo.js delete <task_id>         # Menghapus TODO sesuai 'task_id' nya
        $ node todo.js complete <task_id>       # Menandai status TODO selesai
        $ node todo.js uncomplete <task_id>     # Menandai status TODO belum selesai`)
    }

    static success(data) {
        console.log(data)
    }

    static list (data) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i])
        }
    }

    static failed () {
        console.log(`data or ID not found`)
    }
}

module.exports = View