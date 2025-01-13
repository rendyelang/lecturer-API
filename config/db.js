// const mysql = require("mysql2")

// const dbPool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWROD,
//     database: process.env.DB_NAME
// })


// module.exports = dbPool.promise()

const mysql = require("mysql")

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWROD,
    database: process.env.DB_NAME
})

connection.connect((err) => {
    if (err) {
        console.log("Failed to connect database!")
    } else {
        console.log("Database connected")
    }
})

module.exports = connection