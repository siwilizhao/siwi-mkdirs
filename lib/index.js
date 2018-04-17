const path = require('path')
const fs = require('fs')

class MkDirs {
    constructor() {
        this.init()
    }
    async init () {
        
    }
    async mkdirsSync(dirname) {
        if (fs.existsSync(dirname)) {
            return true
        } else {
            const res = await this.mkdirsSync(path.dirname(dirname))
            if (res) {
                fs.mkdirSync(dirname)
                return true
            }
        }
    }
}

module.exports = new MkDirs()