const db = require('../config/db');

const isAdmin = (req, res, next) => {
    const {username} = req.body

    const query = "SELECT * FROM user WHERE username = ?"
    db.query(query, [username], (err, results) => {
        if (err) {
            return res.status(500).json({message: "Internal Server Error"})
        } else if (results.length === 0) {
            return res.status(404).json({message: "User not found"})
        }

        const user = results[0]
        if (user.role !== 'admin') {
            return res.status(401).json({message: "Unauthorized. You must be an admin to access this route"})
        }

        next()
    })
}

module.exports = isAdmin