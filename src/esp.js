const axios = require('axios')

const onEsp = async () => {
    console.log(await axios('http://192.168.0.12/on'));
}

const offEsp = async () => {
    console.log(await axios('http://192.168.0.12/off'));
}

module.exports = { onEsp, offEsp };
