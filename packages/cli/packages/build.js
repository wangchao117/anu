

const path = require('path');
const transform = require('./translator/index');
const build = (arg)=>{
    transform(arg);
}

module.exports = build;