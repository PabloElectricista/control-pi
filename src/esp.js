const axios = require('axios')

const onEsp = async () => {
    try {
        let data = await axios('http://192.168.0.12/on')
        console.log(data);
    } catch (error) {
        // console.log(error);
    }
}

const offEsp = async () => {
    try {
        let data = await axios('http://192.168.0.12/off')
        console.log(data);
    } catch (error) {
        // console.log(error);
    }
}

module.exports = { onEsp, offEsp };
