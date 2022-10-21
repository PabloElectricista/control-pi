const { Pin } = require('./database.js');

const getControl = async (name) => {
    let pin = await Pin.findOne({ where: { name } })
    if (!pin) pin = await Pin.create({ name })
    return pin;
}

module.exports = getControl;