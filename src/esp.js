const axios = require('axios')

const onEsp = async () => {
    let data = await axios('http://192.168.0.12/on')
    console.log(data);
}

const offEsp = async () => {
    let data = await axios('http://192.168.0.12/off')
    console.log(data);
}

module.exports = { onEsp, offEsp };
