const db = require("../config/db")

const getAllLecturers = () => {
    const query = "SELECT * FROM lecturer_data"
    return db.query(query)
}

module.exports = {getAllLecturers}