'use strict'
const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/index.js',//入口 单页面入口是字符串，多页面入口是对象
    output: {//出口
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    }
}