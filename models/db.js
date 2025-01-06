const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "lecturer"
})

connection.connect((err) => {
    if (err) {
        console.log("Failed to connect database!")
    } else {
        console.log("Connection Succeed")
    }
})

module.exports = connection