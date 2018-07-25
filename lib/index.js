const path = require('path')
const fs = require('fs')

class MkDirs {
    constructor() {
    }

    /**
     * 创建目录
     * @param {*} dirname 
     */
    async multi(dirname) {
        if (fs.existsSync(dirname)) {
            return true
        } else {
            const res = await this.multi(path.dirname(dirname))
            if (res) {
                fs.mkdirSync(dirname)
                return true
            }
        }
    }
}

module.exports = new MkDirs()