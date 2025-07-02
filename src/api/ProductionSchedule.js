const { default: axios } = require("axios")

const getProductionScheduleEntry = async (date) => {
    try {
        const response = await axios.get(`http://192.168.0.21:7500/api/schedule/${date}`)
        return response.data
    } catch (err) {

    }
}


const saveProductionScheduleEntry = async (entry) => {
    try {
        const response = await axios.post("http://192.168.0.21:7500/api/schedule", entry)
        return response.data
    } catch (error) {

    }
}

module.exports = { saveProductionScheduleEntry, getProductionScheduleEntry }