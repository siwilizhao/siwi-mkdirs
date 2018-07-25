const expect = require('chai').expect
const mkdir = require('../index')
const path = require('path')
const fs = require('fs')
describe('siwi-mkdir', () => {
    it('multi', async () => {
        const pathname = path.resolve('test/test/test/test/test')
        const res = await mkdir.multi(pathname)
        expect(res).to.be.equal(true)
        expect(fs.existsSync(pathname)).to.be.true
    });
});