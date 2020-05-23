'use strict'
const path = require('path');
module.exports = {
    mode: 'production',
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },//入口 多页面入口
    output: {//出口 入口多个  出口就一个  把出口名字换成占位符
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    }
}